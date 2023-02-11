package com.xtpeach.tiny.file.server.module.storage.chain.command;

import com.xtpeach.tiny.file.server.core.util.FileComparator;
import com.xtpeach.tiny.file.server.module.storage.model.request.base.FileListRequest;
import com.xtpeach.tiny.file.server.module.storage.model.result.FileItemResult;
import com.xtpeach.tiny.file.server.module.storage.chain.FileContext;
import org.apache.commons.chain.Command;
import org.apache.commons.chain.Context;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * 文件排序责任链 command 命令
 *      根据请求类中的排序参数，进行文件排序.
 *
 * @author xtpeach
 */
@Service
public class FileSortCommand implements Command {

	/**
	 * 按照请求的排序字段和方向进行文件排序.
	 *
	 * @param   context
	 *          文件处理责任链上下文
	 *
	 * @return  是否停止执行责任链, true: 停止执行责任链, false: 继续执行责任链
	 */
	@Override
	public boolean execute(Context context) throws Exception {
		FileContext fileContext = (FileContext) context;

		List<FileItemResult> fileItemList = fileContext.getFileItemList();
		FileListRequest fileListRequest = fileContext.getFileListRequest();

		if (fileListRequest.getOrderBy() == null || fileListRequest.getOrderDirection() == null) {
			return false;
		}

		// 创建副本, 防止排序和过滤对原数据产生影响
		List<FileItemResult> copyList = new ArrayList<>(fileItemList);

		// 按照自然排序
		copyList.sort(new FileComparator(fileListRequest.getOrderBy(), fileListRequest.getOrderDirection()));
		fileContext.setFileItemList(copyList);
		return false;
	}

}