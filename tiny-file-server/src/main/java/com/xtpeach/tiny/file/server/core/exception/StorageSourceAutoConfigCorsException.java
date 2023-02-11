package com.xtpeach.tiny.file.server.core.exception;

import com.xtpeach.tiny.file.server.module.storage.model.param.IStorageParam;
import lombok.Getter;

/**
 * 存储源自动设置 cors 异常
 *
 * @author xtpeach
 */
@Getter
public class StorageSourceAutoConfigCorsException extends RuntimeException {

	private final IStorageParam iStorageParam;

	public StorageSourceAutoConfigCorsException(String message, Throwable cause, IStorageParam iStorageParam) {
		super(message, cause);
		this.iStorageParam = iStorageParam;
	}

}