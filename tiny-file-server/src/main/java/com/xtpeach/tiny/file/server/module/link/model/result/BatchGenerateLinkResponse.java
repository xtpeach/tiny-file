package com.xtpeach.tiny.file.server.module.link.model.result;

import io.swagger.annotations.ApiModel;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author xtpeach
 */
@Data
@ApiModel(description = "批量生成直链结果类")
@AllArgsConstructor
public class BatchGenerateLinkResponse {
	
	private String shortLink;
	
	private String pathLink;
	
}