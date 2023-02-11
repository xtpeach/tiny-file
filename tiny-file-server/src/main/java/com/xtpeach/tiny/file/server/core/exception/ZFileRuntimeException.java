package com.xtpeach.tiny.file.server.core.exception;

/**
 * @author xtpeach
 */
public class ZFileRuntimeException extends RuntimeException {
	
	public ZFileRuntimeException(String message) {
		super(message);
	}
	
	public ZFileRuntimeException(String message, Throwable cause) {
		super(message, cause);
	}
}