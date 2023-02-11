package com.xtpeach.tiny.file.server.core.exception;

import com.xtpeach.tiny.file.server.core.exception.ZFileRuntimeException;

/**
 * 无效的直链异常
 *
 * @author xtpeach
 */
public class InvalidShortLinkException extends ZFileRuntimeException {

	public InvalidShortLinkException(String message) {
		super(message);
	}

}