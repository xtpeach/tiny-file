package com.xtpeach.tiny.file.server.module.storage.model.param;

import com.xtpeach.tiny.file.server.module.storage.annotation.StorageParamItem;
import com.xtpeach.tiny.file.server.module.storage.model.param.ProxyDownloadParam;
import lombok.Getter;

/**
 * WebDav 初始化参数
 *
 * @author xtpeach
 */
@Getter
public class WebdavParam extends ProxyDownloadParam {

	@StorageParamItem(key = "url", name = "WebDAV 链接")
	private String url;

	@StorageParamItem(key = "username", name = "用户名", required = false)
	private String username;

	@StorageParamItem(key = "password", name = "密码", required = false)
	private String password;

}