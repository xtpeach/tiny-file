package com.xtpeach.tiny.file.server.module.storage.model.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 存储源参数类型枚举
 *
 * @author xtpeach
 */
@Getter
@AllArgsConstructor
public enum StorageParamTypeEnum {

	/**
	 * 输入框
	 */
	INPUT("input"),

	/**
	 * 下拉框
	 */
	SELECT("select"),

	/**
	 * 开关
	 */
	SWITCH("switch");

	@EnumValue
	@JsonValue
	private final String value;

}