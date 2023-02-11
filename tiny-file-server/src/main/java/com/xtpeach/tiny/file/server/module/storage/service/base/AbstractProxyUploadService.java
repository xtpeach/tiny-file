package com.xtpeach.tiny.file.server.module.storage.service.base;

import com.xtpeach.tiny.file.server.module.storage.model.param.ProxyUploadParam;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;

/**
 * 代理上传 Service, 如果只需要代理上传, 则可实现此抽象类.
 *
 * @author xtpeach
 */
public abstract class AbstractProxyUploadService<P extends ProxyUploadParam> extends AbstractProxyTransferService<P> {

	/**
	 * 空实现.
	 */
	@Override
	public ResponseEntity<Resource> downloadToStream(String pathAndName) {
		return null;
	}

}