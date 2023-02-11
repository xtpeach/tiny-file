package com.xtpeach.tiny.file.server.module.storage.controller.proxy;

import com.xtpeach.tiny.file.util.AjaxJson;
import com.xtpeach.tiny.file.server.module.storage.context.StorageSourceContext;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractBaseFileService;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractProxyTransferService;
import io.swagger.annotations.Api;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.HandlerMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.beans.Beans;
import java.io.IOException;

/**
 * 服务端代理上传 Controller
 *
 * @author xtpeach
 */
@Api(tags = "服务端代理上传")
@RestController
public class ProxyUploadController {

	@Resource
	private StorageSourceContext storageSourceContext;

	@Resource
	private HttpServletRequest httpServletRequest;


	@PostMapping("/file/upload/{storageKey}/**")
	@ResponseBody
	public AjaxJson<?> upload(@RequestParam MultipartFile file, @PathVariable("storageKey") String storageKey) throws IOException {
		if (ObjectUtils.isEmpty(file)) {
			throw new RuntimeException("空文件不能为空");
		}

		// 获取上传路径
		String path = (String) httpServletRequest.getAttribute(HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE);
		String bestMatchPattern = (String) httpServletRequest.getAttribute(HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE);
		AntPathMatcher apm = new AntPathMatcher();
		String filePath = apm.extractPathWithinPattern(bestMatchPattern, path);

		AbstractBaseFileService<?> storageServiceByKey = storageSourceContext.getByStorageKey(storageKey);

		// 如果不是 ProxyTransferService, 则返回错误信息.
		if (!Beans.isInstanceOf(storageServiceByKey, AbstractProxyTransferService.class)) {
			return AjaxJson.getError("存储类型异常，不支持上传.");
		}


		// 进行上传.
		AbstractProxyTransferService<?> proxyUploadService = (AbstractProxyTransferService<?>) storageServiceByKey;
		proxyUploadService.uploadFile(filePath, file.getInputStream());
		return AjaxJson.getSuccess();
	}

}