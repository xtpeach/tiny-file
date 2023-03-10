package com.xtpeach.tiny.file.server.module.storage.service.impl;

import cn.hutool.core.exceptions.ExceptionUtil;
import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.ObjectUtil;
import cn.hutool.core.util.ReflectUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.http.HttpRequest;
import cn.hutool.http.HttpResponse;
import cn.hutool.http.HttpUtil;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xtpeach.tiny.file.server.core.exception.StorageSourceRefreshTokenException;
import com.xtpeach.tiny.file.server.core.util.RequestHolder;
import com.xtpeach.tiny.file.server.core.util.StringUtils;
import com.xtpeach.tiny.file.server.module.storage.service.base.RefreshTokenService;
import com.xtpeach.tiny.file.server.core.exception.http.HttpResponseStatusErrorException;
import com.xtpeach.tiny.file.server.module.storage.constant.StorageConfigConstant;
import com.xtpeach.tiny.file.server.module.storage.model.bo.RefreshTokenCacheBO;
import com.xtpeach.tiny.file.server.module.storage.model.dto.OAuth2TokenDTO;
import com.xtpeach.tiny.file.server.module.storage.model.entity.StorageSourceConfig;
import com.xtpeach.tiny.file.server.module.storage.model.enums.FileTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.enums.StorageTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.param.GoogleDriveParam;
import com.xtpeach.tiny.file.server.module.storage.model.result.FileItemResult;
import com.xtpeach.tiny.file.server.module.storage.service.StorageSourceConfigService;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractProxyTransferService;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.HttpEntity;
import org.apache.http.HttpHeaders;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.methods.RequestBuilder;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author xtpeach
 */
@Service
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
public class GoogleDriveServiceImpl extends AbstractProxyTransferService<GoogleDriveParam> implements RefreshTokenService {
	
	/**
	 * ????????????????????????
	 */
	private static final String FOLDER_MIME_TYPE = "application/vnd.google-apps.folder";
	
	/**
	 * ???????????????????????????
	 */
	private static final String SHORTCUT_MIME_TYPE = "application/vnd.google-apps.shortcut";
	
	/**
	 * ?????????????????? API
	 */
	private static final String DRIVE_FILE_URL = "https://www.googleapis.com/drive/v3/files";
	
	
	/**
	 * ?????????????????? API
	 */
	private static final String DRIVE_FILE_UPLOAD_URL = "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart";
	
	/**
	 * ?????? AccessToken URL
	 */
	private static final String REFRESH_TOKEN_URL = "https://oauth2.googleapis.com/token";
	
	@javax.annotation.Resource
	private StorageSourceConfigService storageSourceConfigService;
	
	@Override
	public void init() {
		refreshAccessToken();
	}
	
	/**
	 * ????????????????????????/????????? id
	 *
	 * @param 	path
	 * 			??????
	 *
	 * @return	??????/????????? id
	 */
	private String getIdByPath(String path) {
		String fullPath = StringUtils.concat(param.getBasePath(), path);
		if (StrUtil.isEmpty(fullPath) || StrUtil.equals(fullPath, StringUtils.DELIMITER_STR)) {
			return StrUtil.isEmpty(param.getDriveId()) ? "root" : param.getDriveId();
		}
		
		List<String> pathList = StrUtil.splitTrim(fullPath, "/");
		
		String driveId = "";
		for (String subPath : pathList) {
			String folderIdParam = new GoogleDriveAPIParam().getDriveIdByPathParam(subPath, driveId);
			HttpRequest httpRequest = HttpUtil.createGet(DRIVE_FILE_URL);
			httpRequest.header("Authorization", "Bearer " + param.getAccessToken());
			httpRequest.body(folderIdParam);
			
			HttpResponse httpResponse = httpRequest.execute();
			
			checkHttpResponseIsError(httpResponse);
			
			String body = httpResponse.body();
			
			JSONObject jsonObject = JSON.parseObject(body);
			JSONArray files = jsonObject.getJSONArray("files");
			
			if (files.size() == 0) {
				throw ExceptionUtil.wrapRuntime(new FileNotFoundException());
			}
			
			driveId = files.getJSONObject(0).getString("id");
		}
		
		return driveId;
	}
	
	@Override
	public List<FileItemResult> fileList(String folderPath) throws Exception {
		List<FileItemResult> result = new ArrayList<>();
		
		String folderId = getIdByPath(folderPath);
		String pageToken = "";
		do {
			String folderIdParam = new GoogleDriveAPIParam().getFileListParam(folderId, pageToken);
			HttpRequest httpRequest = HttpUtil.createGet(DRIVE_FILE_URL);
			httpRequest.header("Authorization", "Bearer " + param.getAccessToken());
			httpRequest.body(folderIdParam);
			
			HttpResponse httpResponse = httpRequest.execute();
			
			checkHttpResponseIsError(httpResponse);
			
			String body = httpResponse.body();
			
			JSONObject jsonObject = JSON.parseObject(body);
			pageToken = jsonObject.getString("nextPageToken");
			JSONArray files = jsonObject.getJSONArray("files");
			result.addAll(jsonArrayToFileList(files, folderPath));
		} while (StrUtil.isNotEmpty(pageToken));
		
		return result;
	}
	
	@Override
	public FileItemResult getFileItem(String pathAndName) {
		String fileId = getIdByPath(pathAndName);
		
		String folderName = FileUtil.getParent(pathAndName, 1);
		
		HttpRequest httpRequest = HttpUtil.createGet(DRIVE_FILE_URL + "/" + fileId);
		httpRequest.header("Authorization", "Bearer " + param.getAccessToken());
		httpRequest.body("fields=id,name,mimeType,shortcutDetails,size,modifiedTime");
		HttpResponse httpResponse = httpRequest.execute();
		
		checkHttpResponseIsError(httpResponse);
		
		String body = httpResponse.body();
		JSONObject jsonObject = JSON.parseObject(body);
		return jsonObjectToFileItem(jsonObject, folderName);
	}
	
	
	@Override
	public boolean newFolder(String path, String name) {
		HttpResponse httpResponse = HttpRequest.post(DRIVE_FILE_URL)
				.header("Authorization", "Bearer " + param.getAccessToken())
				.body(new JSONObject()
						.fluentPut("name", name)
						.fluentPut("mimeType", FOLDER_MIME_TYPE)
						.fluentPut("parents", Collections.singletonList(getIdByPath(path)))
						.toJSONString())
				.execute();
		
		checkHttpResponseIsError(httpResponse);
		
		return true;
	}
	
	@Override
	public boolean deleteFile(String path, String name) {
		String pathAndName = StringUtils.concat(path, name);
		HttpResponse httpResponse = HttpRequest.delete(DRIVE_FILE_URL + "/" + getIdByPath(pathAndName))
				.header("Authorization", "Bearer " + param.getAccessToken())
				.execute();
		
		checkHttpResponseIsError(httpResponse);
		
		return true;
	}
	
	@Override
	public boolean deleteFolder(String path, String name) {
		return deleteFile(path, name);
	}
	
	@Override
	public boolean renameFile(String path, String name, String newName) {
		String pathAndName = StringUtils.concat(path, name);
		String fileId = getIdByPath(pathAndName);
		
		HttpResponse httpResponse = HttpRequest.patch(DRIVE_FILE_URL + "/" + fileId)
				.header("Authorization", "Bearer " + param.getAccessToken())
				.body(new JSONObject()
						.fluentPut("name", newName)
						.toJSONString())
				.execute();
		
		checkHttpResponseIsError(httpResponse);
		
		return true;
	}
	
	@Override
	public boolean renameFolder(String path, String name, String newName) {
		return renameFile(path, name, newName);
	}
	
	@Override
	public void uploadFile(String pathAndName, InputStream inputStream) {
		String boundary = IdUtil.fastSimpleUUID();
		String fileName = FileUtil.getName(pathAndName);
		String folderName = StringUtils.getParentPath(pathAndName);
		
		String jsonString = new JSONObject()
				.fluentPut("name", fileName)
				.fluentPut("parents", Collections.singletonList(getIdByPath(folderName)))
				.toJSONString();
		HttpEntity entity = MultipartEntityBuilder.create()
				.setMimeSubtype("related")
				.setBoundary(boundary)
				.addTextBody(boundary, jsonString, ContentType.APPLICATION_JSON)
				.addBinaryBody(boundary, inputStream)
				.build();
		
		try (CloseableHttpClient httpClient = HttpClients.createDefault()) {
			HttpUriRequest httpUriRequest = RequestBuilder.post(DRIVE_FILE_UPLOAD_URL)
					.addHeader(HttpHeaders.AUTHORIZATION, "Bearer " + param.getAccessToken())
					.setEntity(entity)
					.build();
			
			CloseableHttpResponse response = httpClient.execute(httpUriRequest);
			checkHttpResponseIsError(response);
		} catch (IOException e) {
			throw ExceptionUtil.wrapRuntime(e);
		}
	}
	
	@Override
	public ResponseEntity<Resource> downloadToStream(String pathAndName) {
		String fileId = getIdByPath(pathAndName);
		
		HttpServletRequest request = RequestHolder.getRequest();
		
		HttpRequest httpRequest = HttpUtil.createGet(DRIVE_FILE_URL + "/" + fileId);
		httpRequest.header("Authorization", "Bearer " + param.getAccessToken());
		httpRequest.body("alt=media");
		httpRequest.header(HttpHeaders.RANGE, request.getHeader(HttpHeaders.RANGE));
		HttpResponse httpResponse = httpRequest.executeAsync();
		checkHttpResponseIsError(httpResponse);
		
		try {
			HttpServletResponse response = RequestHolder.getResponse();
			response.setHeader(HttpHeaders.CONTENT_RANGE, httpResponse.header(HttpHeaders.CONTENT_RANGE));
			response.setHeader(HttpHeaders.ACCEPT_RANGES, "bytes");
			response.setHeader(HttpHeaders.CONTENT_LENGTH, httpResponse.header(HttpHeaders.CONTENT_LENGTH));
			response.setContentType(httpResponse.header(HttpHeaders.CONTENT_TYPE));
			OutputStream outputStream = response.getOutputStream();
			httpResponse.writeBody(outputStream, true, null);
		} catch (IOException e) {
			throw ExceptionUtil.wrapRuntime(e);
		}
		return null;
	}
	
	
	@Override
	public StorageTypeEnum getStorageTypeEnum() {
		return StorageTypeEnum.GOOGLE_DRIVE;
	}
	
	/**
	 * ?????? RefreshToken ?????? AccessToken, ?????????????????? Token.
	 *
	 * @return  ???????????? Token
	 */
	public OAuth2TokenDTO getRefreshToken() {
		StorageSourceConfig refreshStorageSourceConfig =
				storageSourceConfigService.findByStorageIdAndName(storageId, StorageConfigConstant.REFRESH_TOKEN_KEY);
		
		String paramStr = "client_id=" + param.getClientId() +
				"&client_secret=" + param.getClientSecret() +
				"&refresh_token=" + refreshStorageSourceConfig.getValue() +
				"&grant_type=refresh_token" +
				"&access_type=offline";
		
		log.info("????????? {}({}) ??????????????????", storageId, this.getStorageTypeEnum().getDescription());
		
		if (log.isDebugEnabled()) {
			log.debug("????????? {}({}) ??????????????????, ???????????????: {}", storageId, this.getStorageTypeEnum().getDescription(), param);
		}
		
		HttpRequest post = HttpUtil.createPost(REFRESH_TOKEN_URL);
		
		post.body(paramStr);
		HttpResponse response = post.execute();
		String responseBody = response.body();
		
		log.info("????????? {}({}) ??????????????????, ???????????????: httpStatus: {}", storageId, this.getStorageTypeEnum().getDescription(), response.getStatus());
		
		if (log.isDebugEnabled()) {
			log.debug("????????? {}({}) ??????????????????, ???????????????: {}", storageId, this.getStorageTypeEnum().getDescription(), responseBody);
		}
		
		
		JSONObject jsonBody = JSONObject.parseObject(responseBody);
		
		if (response.getStatus() != HttpStatus.OK.value()) {
			return OAuth2TokenDTO.fail(param.getClientId(), param.getClientSecret(), param.getRedirectUri(), responseBody);
		}
		
		String accessToken = jsonBody.getString("access_token");
		return OAuth2TokenDTO.success(param.getClientId(), param.getClientSecret(), param.getRedirectUri(), accessToken, null, responseBody);
	}
	
	/**
	 * ????????????????????? AccessToken
	 */
	@Override
	public void refreshAccessToken() {
		try {
			OAuth2TokenDTO refreshToken = getRefreshToken();
			
			if (refreshToken.getAccessToken() == null) {
				throw new StorageSourceRefreshTokenException("???????????????????????????, ?????????????????????.", storageId);
			}
			
			StorageSourceConfig accessTokenConfig =
					storageSourceConfigService.findByStorageIdAndName(storageId, StorageConfigConstant.ACCESS_TOKEN_KEY);
			accessTokenConfig.setValue(refreshToken.getAccessToken());
			
			storageSourceConfigService.updateBatch(storageId, Collections.singletonList(accessTokenConfig));
			RefreshTokenCacheBO.putRefreshTokenInfo(storageId, RefreshTokenCacheBO.RefreshTokenInfo.success());
			param.setAccessToken(refreshToken.getAccessToken());
			param.setRefreshToken(refreshToken.getRefreshToken());
			log.info("????????? {} ?????? AccessToken ??????", storageId);
		} catch (Exception e) {
			RefreshTokenCacheBO.putRefreshTokenInfo(storageId, RefreshTokenCacheBO.RefreshTokenInfo.fail(getStorageTypeEnum().getDescription() + " AccessToken ????????????: " + e.getMessage()));
			throw new StorageSourceRefreshTokenException("???????????????????????????????????????????????????", e, storageId);
		}
	}
	
	/**
	 * ?????? api ????????? json array ??? zfile ??????????????????
	 *
	 * @param 	jsonArray
	 * 			api ???????????? json array
	 *
	 * @param 	folderPath
	 * 			?????????????????????
	 *
	 * @return	zfile ??????????????????
	 */
	public List<FileItemResult> jsonArrayToFileList(JSONArray jsonArray, String folderPath) {
		ArrayList<FileItemResult> fileList = new ArrayList<>();
		
		for (int i = 0; i < jsonArray.size(); i++) {
			fileList.add(jsonObjectToFileItem(jsonArray.getJSONObject(i), folderPath));
		}
		
		return fileList;
	}
	
	
	/**
	 * ?????? api ????????? json object ??? zfile ????????????
	 *
	 * @param 	jsonObject
	 * 			api ???????????? json object
	 *
	 * @param 	folderPath
	 * 			?????????????????????
	 *
	 * @return	zfile ????????????
	 */
	public FileItemResult jsonObjectToFileItem(JSONObject jsonObject, String folderPath) {
		FileItemResult fileItemResult = new FileItemResult();
		fileItemResult.setName(jsonObject.getString("name"));
		fileItemResult.setPath(folderPath);
		fileItemResult.setSize(jsonObject.getLong("size"));
		
		String mimeType = jsonObject.getString("mimeType");
		if (ObjectUtil.equals(SHORTCUT_MIME_TYPE, mimeType)) {
			JSONObject shortcutDetails = jsonObject.getJSONObject("shortcutDetails");
			mimeType = shortcutDetails.getString("targetMimeType");
		}
		
		if (StrUtil.equals(mimeType, FOLDER_MIME_TYPE)) {
			fileItemResult.setType(FileTypeEnum.FOLDER);
		} else {
			fileItemResult.setType(FileTypeEnum.FILE);
			fileItemResult.setUrl(getDownloadUrl(StringUtils.concat(folderPath, fileItemResult.getName())));
		}
		
		fileItemResult.setTime(jsonObject.getDate("modifiedTime"));
		
		if (fileItemResult.getSize() == null) {
			fileItemResult.setSize(-1L);
		}
		
		return fileItemResult;
	}
	
	
	/**
	 * ???????????????
	 */
	@Data
	class GoogleDriveAPIParam {
		
		private final Integer DEFAULT_PAGE_SIZE = 1000;
		
		// ????????? id
		private String driveId;
		
		// ????????????????????????????????????????????????
		private boolean includeItemsFromAllDrives;
		
		// ???????????????????????????, ?????? 'user', 'drive', 'allDrives'
		private String corpora;
		
		// ????????????????????????????????????????????????????????????????????????????????????
		private boolean supportsAllDrives;
		
		// ???????????????
		private String fields;
		
		// ????????????
		private String q;
		
		// ???????????????
		private Integer pageSize;
		
		// ???????????????
		private String pageToken;
		
		/**
		 * ?????????????????? id ??? api ????????????
		 *
		 * @param 	folderPath
		 * 			???????????????
		 */
		public String getDriveIdByPathParam(String folderPath, String parentId) {
			GoogleDriveAPIParam googleDriveApiParam = getBasicParam();
			
			String parentIdParam = "";
			
			if (StrUtil.isNotEmpty(parentId)) {
				parentIdParam = "'" + parentId + "' in parents and ";
			}
			
			googleDriveApiParam.setFields("files(id)");
			googleDriveApiParam.setQ(parentIdParam + " name = '" + folderPath + "'  and trashed = false");
			
			return googleDriveApiParam.toString();
		}
		
		
		/**
		 * ?????????????????? id ??? api ????????????
		 *
		 * @param 	folderId
		 * 			google drive ????????? id
		 *
		 * @param   pageToken
		 * 			?????? token
		 */
		public String getFileListParam(String folderId, String pageToken) {
			GoogleDriveAPIParam googleDriveAPIParam = getBasicParam();
			
			googleDriveAPIParam.setFields("files(id,name,mimeType,shortcutDetails,size,modifiedTime),nextPageToken");
			googleDriveAPIParam.setQ("'" + folderId + "' in parents and trashed = false");
			googleDriveAPIParam.setPageToken(pageToken);
			googleDriveAPIParam.setPageSize(DEFAULT_PAGE_SIZE);
			return googleDriveAPIParam.toString();
		}
		
		
		/**
		 * ???????????????????????????????????? api ????????????
		 *
		 * @param 	folderId
		 * 			????????????????????? id
		 *
		 * @param   pageToken
		 * 			?????? token
		 *
		 * @param 	keyword
		 * 			???????????????
		 */
		public String getSearchParam(String folderId, String pageToken, String keyword) {
			GoogleDriveAPIParam googleDriveAPIParam = getBasicParam();
			
			String parentIdParam = "";
			if (StrUtil.isNotEmpty(folderId)) {
				parentIdParam = "'" + folderId + "' in parents and ";
			}
			
			googleDriveAPIParam.setFields("files(id,name,mimeType,shortcutDetails,size,modifiedTime),nextPageToken");
			googleDriveAPIParam.setQ(parentIdParam + " name contains '" + keyword + "' and trashed = false");
			googleDriveAPIParam.setPageToken(pageToken);
			googleDriveAPIParam.setPageSize(DEFAULT_PAGE_SIZE);
			return googleDriveAPIParam.toString();
		}
		
		
		/**
		 * ?????????????????????????????????????????????
		 */
		public GoogleDriveAPIParam getBasicParam() {
			GoogleDriveAPIParam googleDriveAPIParam = new GoogleDriveAPIParam();
			String driveId = param.getDriveId();
			
			// ????????????????????????????????????????????????????????????????????????
			boolean isTeamDrive = StrUtil.isNotEmpty(driveId);
			
			googleDriveAPIParam.setCorpora("user");
			if (isTeamDrive) {
				googleDriveAPIParam.setDriveId(driveId);
				googleDriveAPIParam.setIncludeItemsFromAllDrives(true);
				googleDriveAPIParam.setSupportsAllDrives(true);
				googleDriveAPIParam.setCorpora("drive");
			}
			
			return googleDriveAPIParam;
		}
		
		/**
		 * ??????????????? url param string
		 *
		 * @return	url param string
		 */
		@Override
		public String toString() {
			Field[] fields = ReflectUtil.getFields(this.getClass());
			
			StringBuilder param = new StringBuilder();
			
			for (Field field : fields) {
				if (StrUtil.startWith(field.getName(), "this")) {
					continue;
				}
				Object fieldValue = ReflectUtil.getFieldValue(this, field);
				
				if (ObjectUtil.isNotEmpty(fieldValue) && ObjectUtil.notEqual(fieldValue, false)) {
					param.append(field.getName()).append("=").append(fieldValue).append("&");
				}
			}
			
			param.deleteCharAt(param.length() - 1);
			return param.toString();
		}
	}
	
	
	/**
	 * ?????? http ??????????????? 5xx, ???????????????????????????
	 *
	 * @param 	httpResponse
	 * 			http ??????
	 */
	private void checkHttpResponseIsError(HttpResponse httpResponse) {
		if (HttpStatus.valueOf(httpResponse.getStatus()).isError()) {
			int statusCode = httpResponse.getStatus();
			String responseBody = httpResponse.body();
			String msg = StrUtil.format("statusCode: {}, responseBody: {}", statusCode, responseBody);
			throw new HttpResponseStatusErrorException(msg);
		}
	}
	
	/**
	 * ?????? http ??????????????? 5xx, ???????????????????????????  (http client)
	 *
	 * @param 	closeableHttpResponse
	 * 			http ??????
	 */
	private void checkHttpResponseIsError(CloseableHttpResponse closeableHttpResponse) throws IOException {
		int statusCode = closeableHttpResponse.getStatusLine().getStatusCode();
		if (HttpStatus.valueOf(statusCode).isError()) {
			HttpEntity responseEntity = closeableHttpResponse.getEntity();
			String responseBody = EntityUtils.toString(responseEntity, StandardCharsets.UTF_8);
			String msg = StrUtil.format("statusCode: {}, responseBody: {}", statusCode, responseBody);
			throw new HttpResponseStatusErrorException(msg);
		}
	}
}