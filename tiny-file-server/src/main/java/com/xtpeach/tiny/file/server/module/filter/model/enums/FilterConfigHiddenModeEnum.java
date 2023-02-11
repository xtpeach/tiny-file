package com.xtpeach.tiny.file.server.module.filter.model.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 文件夹隐藏模式枚举
 *
 * @author xtpeach
 */
@Getter
@AllArgsConstructor
public enum FilterConfigHiddenModeEnum {

	/**
	 * 仅隐藏
	 */
	HIDDEN("hidden"),

	/**
	 * 隐藏并不可访问 (针对目录)
	 */
	INACCESSIBLE("inaccessible"),

	/**
	 * 隐藏并不可访问 (针对文件)
	 */
	DISABLE_DOWNLOAD("disable_download");

	@EnumValue
	@JsonValue
	private final String value;

}