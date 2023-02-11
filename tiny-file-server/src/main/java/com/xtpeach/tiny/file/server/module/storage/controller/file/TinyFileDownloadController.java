package com.xtpeach.tiny.file.server.module.storage.controller.file;

import com.xtpeach.tiny.file.server.core.exception.StorageSourceNotSupportProxyUploadException;
import com.xtpeach.tiny.file.server.module.storage.context.StorageSourceContext;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractBaseFileService;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractProxyTransferService;
import com.github.xiaoymin.knife4j.annotations.ApiSort;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.beans.Beans;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;

/**
 * 对外统一文件下载接口
 *
 * @author xtpeach
 */
@Api(tags = "对外统一文件下载接口")
@ApiSort(1)
@Slf4j
@RequestMapping("/tiny-file/file/download")
@RestController
public class TinyFileDownloadController {

    /**
     * logger
     */
    private Logger logger = LoggerFactory.getLogger(TinyFileDownloadController.class);

    @Resource
    private StorageSourceContext storageSourceContext;

    @GetMapping("/{storageKey}/{path}/{fileName}")
    @ResponseBody
    public ResponseEntity<byte[]> download(
            @PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName) throws IOException {
        // 获取下载文件路径
        String filePath = path + "/" + fileName;

        // 选择数据源服务对象实例
        AbstractBaseFileService<?> storageServiceByKey
                = storageSourceContext.getByStorageKey(storageKey);

        // 如果不是 ProxyTransferService, 则返回错误信息.
        if (!Beans.isInstanceOf(storageServiceByKey, AbstractProxyTransferService.class)) {
            throw new StorageSourceNotSupportProxyUploadException("存储类型异常，不支持上传.");
        }

        // 进行上传.
        AbstractProxyTransferService<?> proxyDownloadService
                = (AbstractProxyTransferService<?>) storageServiceByKey;
        HttpHeaders headers = new HttpHeaders();
        headers.add("Download-Filename", URLEncoder.encode(fileName, "utf-8"));
        headers.setContentDispositionFormData("attachment", URLEncoder.encode(fileName, "utf-8"));
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
        ResponseEntity<org.springframework.core.io.Resource> responseEntity = proxyDownloadService.downloadToStream(filePath);

        // 输出转 byte[]
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        try (InputStream input = responseEntity.getBody().getInputStream()) {
            byte[] buffer = new byte[4096];
            int n = 0;
            while (-1 != (n = input.read(buffer))) {
                output.write(buffer, 0, n);
            }
        } catch (Exception e) {
            logger.error("download error: {}", e.getMessage());
        }
        return new ResponseEntity<>(output.toByteArray(), headers, HttpStatus.CREATED);
    }

}
