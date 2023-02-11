package com.xtpeach.tiny.file.server.module.log.model.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

/**
 * 下载 referer 排行 dto 类
 * @author xtpeach
 */
@Data
public class DownloadTopRefererDTO {

	@ApiModelProperty(value = "referer", notes = "来源网站")
	private String referer;

	@ApiModelProperty(value = "下载次数")
	private Integer count;

}