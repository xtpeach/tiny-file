package com.xtpeach.tiny.file.server.module.storage.controller.file;

import com.xtpeach.tiny.file.request.TinyFileListRequest;
import com.xtpeach.tiny.file.result.FileItemResultDto;
import com.xtpeach.tiny.file.server.core.exception.file.InvalidStorageSourceException;
import com.xtpeach.tiny.file.server.module.storage.context.StorageSourceContext;
import com.xtpeach.tiny.file.server.module.storage.model.result.FileItemResult;
import com.xtpeach.tiny.file.server.module.storage.service.StorageSourceService;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractBaseFileService;
import com.xtpeach.tiny.file.util.AjaxJson;
import com.github.xiaoymin.knife4j.annotations.ApiSort;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@Api(tags = "对外统一文件接口")
@ApiSort(1)
@Slf4j
@RequestMapping("/tiny-file/file")
@RestController
public class TinyFileListController {

    @Resource
    private StorageSourceContext storageSourceContext;

    @Resource
    private StorageSourceService storageSourceService;

    @ApiOperation(value = "获取文件列表", notes = "获取某个存储源下, 指定路径的文件&文件夹列表")
    @PostMapping("/list")
    public AjaxJson<List<FileItemResultDto>> list(@Valid @RequestBody TinyFileListRequest tinyFileListRequest) throws Exception {
        String storageKey = tinyFileListRequest.getStorageKey();
        String path = tinyFileListRequest.getPath();
        if (!StringUtils.startsWith(path, "/")) {
            path = "/" + path;
            tinyFileListRequest.setPath(path);
        }
        Integer storageId = storageSourceService.findIdByKey(storageKey);
        if (storageId == null) {
            throw new InvalidStorageSourceException("通过存储源 key 未找到存储源, key: " + storageKey);
        }

        // 获取文件列表
        AbstractBaseFileService<?> fileService = storageSourceContext.getByStorageId(storageId);
        List<FileItemResult> fileItemList = fileService.fileList(tinyFileListRequest.getPath());

        return AjaxJson.getSuccessData(fileItemList.stream().map(fileItemResult -> new FileItemResultDto(
                fileItemResult.getName(),
                fileItemResult.getTime(),
                fileItemResult.getSize(),
                fileItemResult.getType().getValue().equalsIgnoreCase("FILE") ? false : true,
                fileItemResult.getPath(),
                "/tiny-file/file/download/" + storageKey + fileItemResult.getPath() + "/" + fileItemResult.getName())).collect(Collectors.toList()));
    }

}
