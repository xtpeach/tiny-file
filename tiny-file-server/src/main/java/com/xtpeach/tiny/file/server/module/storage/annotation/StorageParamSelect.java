package com.xtpeach.tiny.file.server.module.storage.annotation;

import com.xtpeach.tiny.file.server.module.storage.model.bo.StorageSourceParamDef;
import com.xtpeach.tiny.file.server.module.storage.model.param.IStorageParam;
import com.xtpeach.tiny.file.server.module.storage.annotation.StorageParamItem;

import java.util.List;

/**
 * 存储源参数下拉值接口.
 *
 * @author xtpeach
 */
public interface StorageParamSelect {

	/**
	 * 获取存储源参数下拉选项列表.
	 *
	 * @param   storageParamItem
	 *          存储源下拉参数定义
	 *
	 * @param   targetParam
	 *          存储源参数
	 *
	 * @return  存储源参数下拉选项列表
	 */
	List<StorageSourceParamDef.Options> getOptions(StorageParamItem storageParamItem, IStorageParam targetParam);

}