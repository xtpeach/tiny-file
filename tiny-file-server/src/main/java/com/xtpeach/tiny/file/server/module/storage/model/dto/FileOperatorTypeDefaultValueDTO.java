package com.xtpeach.tiny.file.server.module.storage.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * 文件操作类型默认结果
 *
 * @author xtpeach
 */
@Data
@AllArgsConstructor
public class FileOperatorTypeDefaultValueDTO {
	
	private boolean allowAdmin;
	
	private boolean allowAnonymous;
	
}