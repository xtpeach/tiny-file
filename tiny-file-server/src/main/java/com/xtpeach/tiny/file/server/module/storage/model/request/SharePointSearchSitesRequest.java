package com.xtpeach.tiny.file.server.module.storage.model.request;

import com.xtpeach.tiny.file.server.core.validation.StringListValue;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import javax.validation.constraints.NotBlank;

/**
 * SharePoint 搜索网站列表请求
 *
 * @author xtpeach
 */
@Data
public class SharePointSearchSitesRequest {

	@StringListValue(message = "账号类型只能是 Standard（标准版、国际版）或 China（世纪互联）", vals = {"Standard", "China"})
	private String type;

	@ApiModelProperty(value = "访问令牌 (accessToken)", required = true, example = "EwBoxxxxxxxxxxxxxxxbAI=")
	@NotBlank(message = "访问令牌不能为空")
	private String accessToken;

}