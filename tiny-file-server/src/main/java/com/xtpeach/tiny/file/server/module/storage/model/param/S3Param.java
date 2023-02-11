package com.xtpeach.tiny.file.server.module.storage.model.param;

import com.xtpeach.tiny.file.server.module.storage.annotation.StorageParamItem;
import com.xtpeach.tiny.file.server.module.storage.annotation.StorageParamSelectOption;
import com.xtpeach.tiny.file.server.module.storage.model.enums.StorageParamTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.param.S3BaseParam;
import lombok.Getter;

/**
 * S3 初始化参数
 *
 * @author xtpeach
 */
@Getter
public class S3Param extends S3BaseParam {

	@StorageParamItem(name = "EndPoint", order = 3)
	private String endPoint;

	@StorageParamItem(name = "地域", order = 3)
	private String region;

	@StorageParamItem(name = "域名风格", type = StorageParamTypeEnum.SELECT,
			options = { @StorageParamSelectOption(value = "path-style", label = "路径风格"),
						@StorageParamSelectOption(value = "bucket-virtual-hosting", label = "虚拟主机风格") },
			linkName = "查看 S3 API 说明文档", link = "https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/userguide/VirtualHosting.html#path-style-access")
	private String pathStyle;

}