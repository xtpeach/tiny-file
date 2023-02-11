package com.xtpeach.tiny.file.feign;

import com.xtpeach.tiny.file.request.TinyFileListRequest;
import com.xtpeach.tiny.file.result.FileItemResultDto;
import com.xtpeach.tiny.file.util.AjaxJson;
import io.swagger.annotations.ApiOperation;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;

/**
 * 下载文件 feign 接口
 */
@FeignClient(name = "tiny-file-server", path = "/tiny-file/file")
public interface TinyFileListFeign {

    @ApiOperation(value = "获取文件列表", notes = "获取某个存储源下, 指定路径的文件&文件夹列表")
    @PostMapping("/list")
    AjaxJson<List<FileItemResultDto>> list(@Valid @RequestBody TinyFileListRequest tinyFileListRequest) throws Exception;

}
