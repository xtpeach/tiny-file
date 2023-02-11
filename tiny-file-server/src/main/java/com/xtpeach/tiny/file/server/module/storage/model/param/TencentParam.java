package com.xtpeach.tiny.file.server.module.storage.model.param;

import com.xtpeach.tiny.file.server.module.storage.annotation.StorageParamItem;
import lombok.Getter;

/**
 * 腾讯云初始化参数
 *
 * @author xtpeach
 */
@Getter
public class TencentParam extends S3BaseParam {

	@StorageParamItem(key = "secretId", name = "SecretId", order = 1)
	private String accessKey;

}