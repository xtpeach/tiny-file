package com.xtpeach.tiny.file.server.module.storage.annotation.impl;

import com.xtpeach.tiny.file.server.module.storage.annotation.StorageParamItem;
import com.xtpeach.tiny.file.server.module.storage.annotation.StorageParamSelect;
import com.xtpeach.tiny.file.server.module.storage.model.param.IStorageParam;
import com.xtpeach.tiny.file.server.module.storage.model.bo.StorageSourceParamDef;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

/**
 * 编码格式动态参数.
 *
 * @author xtpeach
 */
public class EncodingStorageParamSelect implements StorageParamSelect {

	@Override
	public List<StorageSourceParamDef.Options> getOptions(StorageParamItem storageParamItem, IStorageParam targetParam) {
		List<StorageSourceParamDef.Options> options = new ArrayList<>();

		for (String name : Charset.availableCharsets().keySet()) {
			StorageSourceParamDef.Options option = new StorageSourceParamDef.Options(name);
			options.add(option);
		}
		return options;
	}

}