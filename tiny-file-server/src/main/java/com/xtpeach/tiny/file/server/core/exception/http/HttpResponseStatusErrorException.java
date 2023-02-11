package com.xtpeach.tiny.file.server.core.exception.http;

/**
 * Http 请求状态码异常 （返回状态码为 5xx 抛出此异常）
 * @author xtpeach
 */
public class HttpResponseStatusErrorException extends RuntimeException {
	
	public HttpResponseStatusErrorException(String message) {
		super(message);
	}
}