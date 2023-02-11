package com.xtpeach.tiny.file.controller;

import com.xtpeach.tiny.file.feign.TinyFileListFeign;
import com.xtpeach.tiny.file.request.TinyFileListRequest;
import com.xtpeach.tiny.file.result.FileItemResultDto;
import com.xtpeach.tiny.file.util.AjaxJson;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/tiny-file/file")
@RestController
public class FileListController {

    /**
     * tiny-file
     */
    @Autowired
    private TinyFileListFeign tinyFileListFeign;

    @ApiOperation(value = "获取文件列表", notes = "获取某个存储源下, 指定路径的文件&文件夹列表")
    @PostMapping("/list")
    public AjaxJson<List<FileItemResultDto>> list(@Valid @RequestBody TinyFileListRequest tinyFileListRequest) throws Exception {
        return AjaxJson.getSuccessData(tinyFileListFeign.list(tinyFileListRequest).getData());
    }

}
