package com.xtpeach.tiny.file.server.module.storage.model.bo;

import lombok.Data;

/**
 * 又拍云上传参数 model
 *
 * @author xtpeach
 */
@Data
public class UploadSignParam {

	/**
	 * 上传路径
	 */
	private String path;

	/**
	 * 文件大小
	 */
	private Long size;

	/**
	 * 文件名
	 */
	private String name;

}