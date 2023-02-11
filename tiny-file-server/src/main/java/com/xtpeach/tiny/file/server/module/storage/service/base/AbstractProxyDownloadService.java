package com.xtpeach.tiny.file.server.module.storage.service.base;

import com.xtpeach.tiny.file.server.module.storage.model.param.ProxyDownloadParam;

import java.io.InputStream;

/**
 * 代理下载 Service, 如果只需要代理下载, 则可实现此抽象类.

 * @author xtpeach
 */
public abstract class AbstractProxyDownloadService<P extends ProxyDownloadParam> extends AbstractProxyTransferService<P> {

	/**
	 * 空实现.
	 */
	@Override
	public void uploadFile(String pathAndName, InputStream inputStream) {
	}

}