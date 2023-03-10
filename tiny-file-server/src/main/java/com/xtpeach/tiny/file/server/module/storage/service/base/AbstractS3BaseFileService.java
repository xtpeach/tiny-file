package com.xtpeach.tiny.file.server.module.storage.service.base;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.BooleanUtil;
import cn.hutool.core.util.StrUtil;
import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.BucketCrossOriginConfiguration;
import com.amazonaws.services.s3.model.CORSRule;
import com.amazonaws.services.s3.model.GeneratePresignedUrlRequest;
import com.amazonaws.services.s3.model.ListObjectsRequest;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import com.amazonaws.services.s3.model.SetBucketCrossOriginConfigurationRequest;
import com.xtpeach.tiny.file.server.core.constant.ZFileConstant;
import com.xtpeach.tiny.file.server.core.exception.StorageSourceAutoConfigCorsException;
import com.xtpeach.tiny.file.server.core.util.StringUtils;
import com.xtpeach.tiny.file.server.module.config.service.SystemConfigService;
import com.xtpeach.tiny.file.server.module.storage.model.enums.FileTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.param.S3BaseParam;
import com.xtpeach.tiny.file.server.module.storage.model.result.FileItemResult;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractBaseFileService;
import lombok.extern.slf4j.Slf4j;

import javax.annotation.Resource;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;

/**
 * @author xtpeach
 */
@Slf4j
public abstract class AbstractS3BaseFileService<P extends S3BaseParam> extends AbstractBaseFileService<P> {
    
    protected AmazonS3 s3Client;
    
    public static final InputStream EMPTY_INPUT_STREAM = new ByteArrayInputStream(new byte[0]);
    
    @Resource
    private SystemConfigService systemConfigService;
    
    @Override
    public List<FileItemResult> fileList(String folderPath) {
        return s3FileList(folderPath);
    }
    
    
    /**
     * ?????? S3 ?????????????????????????????????, ?????????????????????, ???????????????????????????.
     * @return  S3 ??????????????????
     */
    @Override
    public String getDownloadUrl(String pathAndName) {
        String bucketName = param.getBucketName();
        String domain = param.getDomain();
        
        String fullPath = StringUtils.concatTrimStartSlashes(param.getBasePath() + pathAndName);
        
        // ????????????????????????, ????????????????????????, ???????????????????????????.
        if (BooleanUtil.isFalse(param.isPrivate()) && StrUtil.isNotEmpty(domain)) {
            return StringUtils.concat(domain, StringUtils.encodeAllIgnoreSlashes(fullPath));
        }
        
        Integer tokenTime = param.getTokenTime();
        if (param.getTokenTime() == null || param.getTokenTime() < 1) {
            tokenTime = 1800;
        }
        
        Date expirationDate = new Date(System.currentTimeMillis() + tokenTime * 1000);
        
        GeneratePresignedUrlRequest generatePresignedUrlRequest = new GeneratePresignedUrlRequest(bucketName, fullPath, HttpMethod.GET);
        generatePresignedUrlRequest.setExpiration(expirationDate);
        URL url = s3Client.generatePresignedUrl(generatePresignedUrlRequest);
        
        String defaultUrl = url.toExternalForm();
        if (StrUtil.isNotEmpty(domain)) {
            defaultUrl = StringUtils.concat(domain, url.getFile());
        }
        return defaultUrl;
    }
    
    
    /**
     * ?????? S3 ??????????????????????????????
     * @param path      ??????
     * @return  ??????????????????????????????
     */
    public List<FileItemResult> s3FileList(String path) {
        String bucketName = param.getBucketName();
        path = StringUtils.trimStartSlashes(path);
        String fullPath = StringUtils.trimStartSlashes(StringUtils.concat(param.getBasePath(), path, ZFileConstant.PATH_SEPARATOR));
        
        List<FileItemResult> fileItemList = new ArrayList<>();
    
        ListObjectsRequest listObjectsRequest = new ListObjectsRequest()
                .withBucketName(bucketName)
                .withPrefix(fullPath)
                .withMaxKeys(1000)
                .withDelimiter("/");
        ObjectListing objectListing = s3Client.listObjects(listObjectsRequest);
        
        boolean isFirstWhile = true;
        
        do {
            if (!isFirstWhile) {
                objectListing = s3Client.listNextBatchOfObjects(objectListing);
            }
    
            for (S3ObjectSummary s : objectListing.getObjectSummaries()) {
                FileItemResult fileItemResult = new FileItemResult();
                if (s.getKey().equals(fullPath)) {
                    continue;
                }
                fileItemResult.setName(s.getKey().substring(fullPath.length()));
                fileItemResult.setSize(s.getSize());
                fileItemResult.setTime(s.getLastModified());
                fileItemResult.setType(FileTypeEnum.FILE);
                fileItemResult.setPath(path);
        
                String fullPathAndName = StringUtils.concat(path, fileItemResult.getName());
                fileItemResult.setUrl(getDownloadUrl(fullPathAndName));
        
                fileItemList.add(fileItemResult);
            }
    
            for (String commonPrefix : objectListing.getCommonPrefixes()) {
                FileItemResult fileItemResult = new FileItemResult();
                fileItemResult.setName(commonPrefix.substring(fullPath.length(), commonPrefix.length() - 1));
                String name = fileItemResult.getName();
                if (StrUtil.isEmpty(name) || StrUtil.equals(name, StringUtils.DELIMITER_STR)) {
                    continue;
                }
        
                fileItemResult.setType(FileTypeEnum.FOLDER);
                fileItemResult.setPath(path);
                fileItemList.add(fileItemResult);
            }
            isFirstWhile = false;
        } while (objectListing.isTruncated());
        
        return fileItemList;
    }
    
    @Override
    public FileItemResult getFileItem(String pathAndName) {
        String fileName = FileUtil.getName(pathAndName);
        String parentPath = StringUtils.getParentPath(pathAndName);
        
        String trimStartPath = StringUtils.concatTrimStartSlashes(param.getBasePath(), pathAndName);
        ObjectMetadata objectMetadata = s3Client.getObjectMetadata(param.getBucketName(), trimStartPath);
        
        FileItemResult fileItemResult = new FileItemResult();
        fileItemResult.setName(fileName);
        fileItemResult.setSize(objectMetadata.getInstanceLength());
        fileItemResult.setTime(objectMetadata.getLastModified());
        fileItemResult.setType(FileTypeEnum.FILE);
        fileItemResult.setPath(parentPath);
        fileItemResult.setUrl(getDownloadUrl(pathAndName));
        return fileItemResult;
    }
    
    @Override
    public boolean newFolder(String path, String name) {
        name = StringUtils.trimSlashes(name);
        String fullPath = StringUtils.concat(param.getBasePath(), path, name, ZFileConstant.PATH_SEPARATOR);
        fullPath = StringUtils.trimStartSlashes(fullPath);
        PutObjectRequest putObjectRequest = new PutObjectRequest(param.getBucketName(), fullPath, EMPTY_INPUT_STREAM, null);
        PutObjectResult putObjectResult = s3Client.putObject(putObjectRequest);
        return putObjectResult != null;
    }
    
    @Override
    public boolean deleteFile(String path, String name) {
        String fullPath = StringUtils.concat(param.getBasePath(), path, name);
        fullPath = StringUtils.trimStartSlashes(fullPath);
        s3Client.deleteObject(param.getBucketName(), fullPath);
        return true;
    }
    
    @Override
    public boolean deleteFolder(String path, String name) {
        String fullPath = StringUtils.concat(param.getBasePath(), path, name);
        fullPath = StringUtils.trimStartSlashes(fullPath);
        s3Client.deleteObject(param.getBucketName(), fullPath + '/');
        return true;
    }
    
    @Override
    public boolean renameFile(String path, String name, String newName) {
        String srcPath = StringUtils.concatTrimStartSlashes(param.getBasePath(), path, name);
        String distPath = StringUtils.concatTrimStartSlashes(param.getBasePath(), path, newName);
        
        String bucketName = param.getBucketName();
        s3Client.copyObject(bucketName, srcPath, bucketName, distPath);
        deleteFile(path, name);
        return true;
    }
    
    @Override
    public boolean renameFolder(String path, String name, String newName) {
        throw new UnsupportedOperationException("?????????????????????????????????");
    }
    
    @Override
    public String getUploadUrl(String path, String name, Long size) {
        String bucketName = param.getBucketName();
        String uploadToPath = StringUtils.concat(param.getBasePath(), path, name);
        uploadToPath = StringUtils.trimStartSlashes(uploadToPath);
        
        GeneratePresignedUrlRequest req =
                new GeneratePresignedUrlRequest(bucketName, uploadToPath, HttpMethod.PUT);
        URL url = s3Client.generatePresignedUrl(req);
        
        return url.toExternalForm();
    }
    
    protected void setUploadCors() {
        if (param.isAutoConfigCors()) {
            try {
                // ??????????????? CORS ??????
                BucketCrossOriginConfiguration bucketCrossOriginConfiguration = s3Client.getBucketCrossOriginConfiguration(param.getBucketName());
                if (bucketCrossOriginConfiguration == null) {
                    bucketCrossOriginConfiguration = new BucketCrossOriginConfiguration();
                }
                List<CORSRule> corsRules = bucketCrossOriginConfiguration.getRules();
                if (corsRules == null) {
                    corsRules = new ArrayList<>();
                }
                
                
                // ????????????????????????
                List<String> allowOrigins = Arrays.asList("*", systemConfigService.getDomain(), systemConfigService.getFrontDomain());
                
                // ??????????????????????????????????????????, ????????????????????????.
                boolean presentCorsRules = corsRules.stream().anyMatch(corsRule -> {
                    List<String> origins = corsRule.getAllowedOrigins();
                    return new HashSet<>(origins).containsAll(allowOrigins);
                });
                
                if (presentCorsRules) {
                    log.info("????????? {} CORS ??????????????????????????????????????????", storageId);
                    return;
                }
                
                CORSRule corsRule = new CORSRule();
                corsRule.setAllowedMethods(CORSRule.AllowedMethods.PUT, CORSRule.AllowedMethods.GET);
                corsRule.setAllowedOrigins(allowOrigins);
                corsRules.add(corsRule);
                bucketCrossOriginConfiguration.setRules(corsRules);
                
                SetBucketCrossOriginConfigurationRequest setBucketCrossOriginConfigurationRequest =
                        new SetBucketCrossOriginConfigurationRequest(param.getBucketName(), bucketCrossOriginConfiguration);
                s3Client.setBucketCrossOriginConfiguration(setBucketCrossOriginConfigurationRequest);
            } catch (Exception e) {
                throw new StorageSourceAutoConfigCorsException("?????????????????????????????? API ??????????????????????????????????????????????????? API ???????????????????????????", e, param);
            }
        }
    }
    
}