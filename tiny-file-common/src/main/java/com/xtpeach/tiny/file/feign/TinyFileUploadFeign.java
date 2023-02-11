package com.xtpeach.tiny.file.feign;

import com.xtpeach.tiny.file.util.AjaxJson;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

/**
 * 上传文件 feign 接口
 */
@FeignClient(name = "tiny-file-server", path = "/tiny-file/file/upload")
public interface TinyFileUploadFeign {

    @PostMapping(value = "/{storageKey}/{path}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @ResponseBody
    AjaxJson<?> upload(@PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @RequestPart("file") MultipartFile file) throws IOException;

}
