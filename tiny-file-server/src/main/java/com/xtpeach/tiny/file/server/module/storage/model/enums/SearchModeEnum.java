package com.xtpeach.tiny.file.server.module.storage.model.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 文件搜索模式枚举
 *
 * @author xtpeach
 */
@Getter
@AllArgsConstructor
public enum SearchModeEnum {

	/**
	 * 仅搜索缓存
	 */
	SEARCH_CACHE_MODE("SEARCH_CACHE"),

	/**
	 * 搜索全部
	 */
	SEARCH_ALL_MODE("SEARCH_ALL");

	@EnumValue
	@JsonValue
	private final String value;

}