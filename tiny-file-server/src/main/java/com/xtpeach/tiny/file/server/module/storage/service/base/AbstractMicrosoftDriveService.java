package com.xtpeach.tiny.file.server.module.storage.service.base;

import cn.hutool.core.util.StrUtil;
import cn.hutool.core.util.URLUtil;
import cn.hutool.http.ContentType;
import cn.hutool.http.HttpResponse;
import cn.hutool.http.HttpUtil;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xtpeach.tiny.file.server.core.constant.ZFileConstant;
import com.xtpeach.tiny.file.server.core.exception.StorageSourceRefreshTokenException;
import com.xtpeach.tiny.file.server.core.exception.ZFileRetryException;
import com.xtpeach.tiny.file.server.core.util.StringUtils;
import com.xtpeach.tiny.file.server.module.storage.constant.StorageConfigConstant;
import com.xtpeach.tiny.file.server.module.storage.model.bo.RefreshTokenCacheBO;
import com.xtpeach.tiny.file.server.module.storage.model.dto.OAuth2TokenDTO;
import com.xtpeach.tiny.file.server.module.storage.model.entity.StorageSourceConfig;
import com.xtpeach.tiny.file.server.module.storage.model.enums.FileTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.param.MicrosoftDriveParam;
import com.xtpeach.tiny.file.server.module.storage.model.result.FileItemResult;
import com.xtpeach.tiny.file.server.module.storage.service.StorageSourceConfigService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.retry.RetryCallback;
import org.springframework.retry.support.RetryTemplate;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

/**
 * @author xtpeach
 */
@Slf4j
public abstract class AbstractMicrosoftDriveService<P extends MicrosoftDriveParam> extends AbstractBaseFileService<P> implements RefreshTokenService {

    /**
     * ??????????????? API URI
     */
    protected static final String DRIVER_ROOT_URL = "https://{graphEndPoint}/v1.0/{type}/drive/root/children?select=name,size,lastModifiedDateTime,file,@microsoft.graph.downloadUrl,@odata.nextLink,value";

    /**
     * ?????????????????? API URI
     */
    protected static final String DRIVER_ITEMS_URL = "https://{graphEndPoint}/v1.0/{type}/drive/root:{path}:/children?select=name,size,lastModifiedDateTime,file,@microsoft.graph.downloadUrl,@odata.nextLink,value";

    /**
     * ??????????????? API URI
     */
    protected static final String DRIVER_ITEM_URL = "https://{graphEndPoint}/v1.0/{type}/drive/root:{path}?select=name,size,lastModifiedDateTime,file,@microsoft.graph.downloadUrl";

    /**
     * ??????????????? API URI
     */
    protected static final String DRIVER_ITEM_OPERATOR_URL = "https://{graphEndPoint}/v1.0/{type}/drive/root:{path}";

    /**
     * ?????? RefreshToken ?????? AccessToken API URI
     */
    protected static final String AUTHENTICATE_URL = "https://{authenticateEndPoint}/common/oauth2/v2.0/token";

    /**
     * ???????????? API URI
     */
    protected static final String DRIVER_SEARCH_URL = "https://{graphEndPoint}/v1.0/{type}/drive/root/search(q='{path}')";

    /**
     * ???????????????????????? API
     */
    protected static final String CREATE_UPLOAD_SESSION_URL = "https://{graphEndPoint}/v1.0/{type}/drive/root:{path}:/createUploadSession";

    /**
     * OneDrive ????????????
     */
    private static final String ONE_DRIVE_FILE_FLAG = "file";
    
    /**
     * ????????????????????????
     */
    public static final String ACCESS_TOKEN_FIELD_NAME = "access_token";
    
    /**
     * ????????????????????????
     */
    public static final String REFRESH_TOKEN_FIELD_NAME = "refresh_token";
    
    
    @Resource
    @Lazy
    private RestTemplate oneDriveRestTemplate;

    @Resource
    private StorageSourceConfigService storageSourceConfigService;

    /**
     * ?????? RefreshToken ?????? AccessToken, ?????????????????? Token.
     *
     * @return  ???????????? Token
     */
    public OAuth2TokenDTO getAndRefreshToken() {
        StorageSourceConfig refreshStorageSourceConfig =
                storageSourceConfigService.findByStorageIdAndName(storageId, StorageConfigConstant.REFRESH_TOKEN_KEY);

        String param = "client_id=" + getClientId() +
                "&redirect_uri=" + getRedirectUri() +
                "&client_secret=" + getClientSecret() +
                "&refresh_token=" + refreshStorageSourceConfig.getValue() +
                "&grant_type=refresh_token";
    
        if (log.isDebugEnabled()) {
            log.debug("{} ??????????????????, ????????????: [{}]", getStorageSimpleInfo(), param);
        }
    
        String authenticateUrl = AUTHENTICATE_URL.replace("{authenticateEndPoint}", getAuthenticateEndPoint());
        HttpResponse response = HttpUtil.createPost(authenticateUrl)
                .body(param, ContentType.FORM_URLENCODED.getValue())
                .execute();
    
        String responseBody = response.body();
        int responseStatus = response.getStatus();
    
        log.info("{} ??????????????????. [httpStatus: {}]", getStorageSimpleInfo(), responseStatus);
        
        if (responseStatus != HttpStatus.OK.value()) {
            return OAuth2TokenDTO.fail(getClientId(), getClientSecret(), getRedirectUri(), responseBody);
        }
    
        JSONObject jsonBody = JSONObject.parseObject(responseBody);
        String accessToken = jsonBody.getString(ACCESS_TOKEN_FIELD_NAME);
        String refreshToken = jsonBody.getString(REFRESH_TOKEN_FIELD_NAME);
        return OAuth2TokenDTO.success(getClientId(), getClientSecret(), getRedirectUri(), accessToken, refreshToken, responseBody);
    }

    /**
     * OAuth2 ?????????, ?????? code ?????? access_token ??? refresh_token.
     *
     * @param   code
     *          ??????
     *
     * @return  ????????? Token ??????.
     */
    public OAuth2TokenDTO getTokenByCode(String code, String clientId, String clientSecret, String redirectUri) {
        String param = "client_id=" + clientId +
                "&redirect_uri=" + redirectUri +
                "&client_secret=" + clientSecret +
                "&code=" + code +
                "&scope=" + getScope() +
                "&grant_type=authorization_code";
    
        if (log.isDebugEnabled()) {
            log.debug("?????????????????? code ???????????????????????? [{}] ?????????, ????????????: [{}]", this.getStorageTypeEnum().getDescription(), param);
        }
    
        String fullAuthenticateUrl = AUTHENTICATE_URL.replace("{authenticateEndPoint}", getAuthenticateEndPoint());
        HttpResponse response = HttpUtil.createPost(fullAuthenticateUrl)
                .body(param, "application/x-www-form-urlencoded")
                .execute();

        String responseBody = response.body();
        int responseStatus = response.getStatus();
        
        log.info("?????????????????? code ???????????????????????? [{}] ???????????????. [httpStatus: {}]", this.getStorageTypeEnum().getDescription(), responseStatus);
    
        if (responseStatus != HttpStatus.OK.value()) {
            return OAuth2TokenDTO.fail(clientId, clientSecret, redirectUri, responseBody);
        }
    
        JSONObject jsonBody = JSONObject.parseObject(responseBody);
        String accessToken = jsonBody.getString(ACCESS_TOKEN_FIELD_NAME);
        String refreshToken = jsonBody.getString(REFRESH_TOKEN_FIELD_NAME);
        return OAuth2TokenDTO.success(clientId, clientSecret, redirectUri, accessToken, refreshToken, responseBody);
    }

    @Override
    public List<FileItemResult> fileList(String folderPath) {
        folderPath = StringUtils.trimStartSlashes(folderPath);
        String fullPath = StringUtils.concatTrimEndSlashes(param.getBasePath(), folderPath);

        List<FileItemResult> result = new ArrayList<>();
        String nextPageLink = null;

        do {
            String requestUrl;

            // ????????????????????????????????????????????????
            // ????????????????????????????????????????????????
            if (nextPageLink != null) {
                nextPageLink = nextPageLink.replace("+", "%2B");
                requestUrl = URLUtil.decode(nextPageLink);
            } else if (ZFileConstant.PATH_SEPARATOR.equalsIgnoreCase(fullPath) || "".equalsIgnoreCase(fullPath)) {
                requestUrl = DRIVER_ROOT_URL;
            } else {
                requestUrl = DRIVER_ITEMS_URL;
            }

            JSONObject root = executeRetryableRequest(context -> {
                int retryCount = context.getRetryCount();
                if (retryCount > 0) {
                    HttpClientErrorException ex = (HttpClientErrorException) context.getLastThrowable();
                    log.warn("{} ?????? OneDrive ??????????????????????????????, ????????????: [{}], ????????????????????? token ?????????. ???????????????: [{}]",
                            getStorageSimpleInfo(), ex.getResponseBodyAsString(), fullPath, ex);
                    refreshAccessToken();
                }
    
                HttpEntity<Object> entity = getAuthorizationHttpEntity();
                return oneDriveRestTemplate.exchange(requestUrl, HttpMethod.GET, entity, JSONObject.class, getGraphEndPoint(), getType(), fullPath).getBody();
            });
    
            if (root == null) {
                return Collections.emptyList();
            }

            JSONArray fileList = root.getJSONArray("value");
            for (int i = 0; i < fileList.size(); i++) {
                JSONObject fileItem = fileList.getJSONObject(i);
                FileItemResult fileItemResult = jsonToFileItem(fileItem, folderPath);
                result.add(fileItemResult);
            }
    
            nextPageLink = root.getString("@odata.nextLink");
        } while (nextPageLink != null);
    
        return result;
    }
    
    @Override
    public FileItemResult getFileItem(String pathAndName) {
        String fullPath = StringUtils.concat(param.getBasePath(), pathAndName);

        JSONObject fileItem = executeRetryableRequest(context -> {
            int retryCount = context.getRetryCount();
            if (retryCount > 0) {
                refreshAccessToken();
                HttpClientErrorException ex = (HttpClientErrorException) context.getLastThrowable();
                log.warn("{} ?????? OneDrive ??????????????????????????????????????????, ????????????: [{}], ????????????????????? token ?????????. ?????????????????????: {}",
                        getStorageSimpleInfo(), ex.getResponseBodyAsString(), fullPath, ex);
        
            }
    
            HttpEntity<Object> entity = getAuthorizationHttpEntity();
            return oneDriveRestTemplate.exchange(DRIVER_ITEM_URL, HttpMethod.GET, entity, JSONObject.class, getGraphEndPoint(), getType(), fullPath).getBody();
        });

        if (fileItem == null) {
            return null;
        }

        String folderPath = StringUtils.getParentPath(pathAndName);
        return jsonToFileItem(fileItem, folderPath);
    }


    @Override
    public boolean newFolder(String path, String name) {
        path = StringUtils.trimStartSlashes(path);
        String fullPath = StringUtils.concatTrimEndSlashes(param.getBasePath(), path);

        String requestUrl;

        if (ZFileConstant.PATH_SEPARATOR.equalsIgnoreCase(fullPath) || "".equalsIgnoreCase(fullPath)) {
            requestUrl = DRIVER_ROOT_URL;
        } else {
            requestUrl = DRIVER_ITEMS_URL;
        }

        HashMap<Object, Object> data = new HashMap<>();
        data.put("name", name);
        data.put("folder", new HashMap<>());
        data.put("@microsoft.graph.conflictBehavior", "replace");
    
        HttpEntity<HashMap<Object, Object>> entity = getAuthorizationHttpEntity(data);
        ResponseEntity<JSONObject> responseEntity = oneDriveRestTemplate.exchange(requestUrl, HttpMethod.POST, entity, JSONObject.class, getGraphEndPoint(), getType(), fullPath);
        return responseEntity.getStatusCode().is2xxSuccessful();
    }

    @Override
    public boolean deleteFolder(String path, String name) {
        return deleteFile(path, name);
    }

    @Override
    public boolean deleteFile(String path, String name) {
        String fullPath = StringUtils.concat(param.getBasePath(), path, name);

        HttpEntity<Object> entity = getAuthorizationHttpEntity();
        ResponseEntity<JSONObject> responseEntity = oneDriveRestTemplate.exchange(DRIVER_ITEM_OPERATOR_URL, HttpMethod.DELETE, entity, JSONObject.class, getGraphEndPoint(), getType(), fullPath);
        return responseEntity.getStatusCode().is2xxSuccessful();
    }

    @Override
    public boolean renameFile(String path, String name, String newName) {
        String fullPath = StringUtils.concat(param.getBasePath(), path, name);

        JSONObject jsonObject = new JSONObject().fluentPut("name", newName);
    
        HttpEntity<Object> entity = getAuthorizationHttpEntity(jsonObject);
        ResponseEntity<JSONObject> responseEntity = oneDriveRestTemplate.exchange(DRIVER_ITEM_OPERATOR_URL, HttpMethod.PATCH, entity, JSONObject.class, getGraphEndPoint(), getType(), fullPath);
        return responseEntity.getStatusCode().is2xxSuccessful();
    }

    @Override
    public boolean renameFolder(String path, String name, String newName) {
        return renameFile(path, name, newName);
    }

    @Override
    public String getUploadUrl(String path, String name, Long size) {
        String fullPath = StringUtils.concat(param.getBasePath(), path, name);

        HttpEntity<Object> entity = getAuthorizationHttpEntity();
        ResponseEntity<JSONObject> responseEntity = oneDriveRestTemplate.exchange(CREATE_UPLOAD_SESSION_URL,
                    HttpMethod.POST, entity, JSONObject.class,
                    getGraphEndPoint(), getType(), fullPath);
       
        JSONObject responseEntityBody = responseEntity.getBody();
        return responseEntityBody.getString("uploadUrl");
    }

    /**
     * ??????????????????, ?????? OneDrive ??? SharePoint, ??????????????????.
     * @return          Graph ?????????
     */
    public abstract String getType();

    /**
     * ?????? GraphEndPoint, ????????????????????? OneDrive, ??????????????????.
     * @return          Graph ?????????
     */
    public abstract String getGraphEndPoint();


    /**
     * ?????? AuthenticateEndPoint, ????????????????????? OneDrive, ??????????????????.
     * @return          Authenticate ?????????
     */
    public abstract String getAuthenticateEndPoint();

    /**
     * ?????? Client ID.
     * @return  Client Id
     */
    public abstract String getClientId();

    /**
     * ?????????????????????.
     * @return  ???????????????
     */
    public abstract String getRedirectUri();

    /**
     * ?????? Client Secret ??????.
     * @return  Client Secret ??????.
     */
    public abstract String getClientSecret();

    /**
     * ?????? API Scope.
     * @return  Scope
     */
    public abstract String getScope();


    /**
     * ????????????????????? AccessToken
     */
    @Override
    public void refreshAccessToken() {
        try {
            OAuth2TokenDTO refreshToken = getAndRefreshToken();

            if (refreshToken.getAccessToken() == null || refreshToken.getRefreshToken() == null) {
                throw new StorageSourceRefreshTokenException("???????????????????????????, ?????????????????????.", storageId);
            }

            StorageSourceConfig accessTokenConfig =
                    storageSourceConfigService.findByStorageIdAndName(storageId, StorageConfigConstant.ACCESS_TOKEN_KEY);
            StorageSourceConfig refreshTokenConfig =
                    storageSourceConfigService.findByStorageIdAndName(storageId, StorageConfigConstant.REFRESH_TOKEN_KEY);
            accessTokenConfig.setValue(refreshToken.getAccessToken());
            refreshTokenConfig.setValue(refreshToken.getRefreshToken());

            storageSourceConfigService.updateBatch(storageId, Arrays.asList(accessTokenConfig, refreshTokenConfig));
            RefreshTokenCacheBO.putRefreshTokenInfo(storageId, RefreshTokenCacheBO.RefreshTokenInfo.success());
        } catch (Exception e) {
            RefreshTokenCacheBO.putRefreshTokenInfo(storageId, RefreshTokenCacheBO.RefreshTokenInfo.fail(getStorageTypeEnum().getDescription() + " AccessToken ????????????: " + e.getMessage()));
            throw new StorageSourceRefreshTokenException("???????????????????????????????????????????????????", e, storageId);
        }
    }


    private FileItemResult jsonToFileItem(JSONObject jsonObject, String folderPath) {
        FileItemResult fileItemResult = new FileItemResult();
        fileItemResult.setName(jsonObject.getString("name"));
        fileItemResult.setSize(jsonObject.getLong("size"));
        fileItemResult.setTime(jsonObject.getDate("lastModifiedDateTime"));

        if (jsonObject.containsKey(ONE_DRIVE_FILE_FLAG)) {
            String originUrl = jsonObject.getString("@microsoft.graph.downloadUrl");
            if (StrUtil.isNotEmpty(param.getProxyDomain())) {
                originUrl = StringUtils.replaceHost(originUrl, param.getProxyDomain());
            }
            fileItemResult.setUrl(originUrl);
            fileItemResult.setType(FileTypeEnum.FILE);
        } else {
            fileItemResult.setType(FileTypeEnum.FOLDER);
        }
        fileItemResult.setPath(folderPath);
        return fileItemResult;
    }
    
    
    /**
     * ???????????????????????? HttpEntity ??????.
     * <br>
     * ?????????????????????????????????????????? AccessToken.
     *
     * @return  HttpEntity ??????
     */
    private HttpEntity<Object> getAuthorizationHttpEntity() {
       return getAuthorizationHttpEntity(null);
    }
    
    
    /**
     * ???????????????????????? HttpEntity ??????.
     * <br>
     * ?????????????????????????????????????????? AccessToken.
     *
     * @param   body
     *          ?????????
     *
     * @return  HttpEntity ??????
     */
    private <T> HttpEntity<T> getAuthorizationHttpEntity(T body) {
        HttpHeaders headers = new HttpHeaders();
        StorageSourceConfig accessTokenConfig =
                storageSourceConfigService.findByStorageIdAndName(storageId, StorageConfigConstant.ACCESS_TOKEN_KEY);
        headers.setBearerAuth(accessTokenConfig.getValue());
        return new HttpEntity<>(body, headers);
    }
    
    
    /**
     * ??????????????? 1 ????????????, ???????????????????????? ZFileRetryException(Unchecked Exception)
     * @param retryCallback     ??????????????????
     * @return                  ??????????????????
     *
     * @param                   <T> ????????????????????????
     */
    private <T> T executeRetryableRequest(RetryCallback<T, Throwable> retryCallback) {
        RetryTemplate retryTemplate = RetryTemplate.builder().maxAttempts(2).retryOn(HttpClientErrorException.class).build();
    
        T result;
        try {
            result = retryTemplate.execute(retryCallback);
        } catch (Throwable e) {
            throw new ZFileRetryException("????????????", e);
        }
        
        return result;
    }

}