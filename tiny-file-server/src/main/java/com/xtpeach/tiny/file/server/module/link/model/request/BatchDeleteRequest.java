package com.xtpeach.tiny.file.server.module.link.model.request;

import lombok.Data;

import java.util.List;

/**
 * @author xtpeach
 */
@Data
public class BatchDeleteRequest {
	
	private List<Integer> ids;
	
}