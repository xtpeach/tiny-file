package com.xtpeach.tiny.file.server.core.exception;

import com.xtpeach.tiny.file.server.core.exception.ZFileRuntimeException;

/**
 * 非法使用下载链接异常.
 *
 * @author xtpeach
 */
public class IllegalDownloadLinkException extends ZFileRuntimeException {

	public IllegalDownloadLinkException(String message) {
		super(message);
	}

}