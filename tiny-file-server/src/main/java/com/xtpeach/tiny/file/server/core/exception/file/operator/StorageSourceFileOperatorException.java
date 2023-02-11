package com.xtpeach.tiny.file.server.core.exception.file.operator;

import com.xtpeach.tiny.file.server.core.exception.StorageSourceException;
import com.xtpeach.tiny.file.server.core.util.CodeMsg;
import lombok.Getter;

/**
 * 存储源文件操作异常
 * @author xtpeach
 */
@Getter
public class StorageSourceFileOperatorException extends StorageSourceException {
	
	public StorageSourceFileOperatorException(CodeMsg codeMsg, Integer storageId, String message, Throwable cause) {
		super(codeMsg, storageId, message, cause);
	}
	
}