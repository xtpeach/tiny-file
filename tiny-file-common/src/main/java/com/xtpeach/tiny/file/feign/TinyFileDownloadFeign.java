package com.xtpeach.tiny.file.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

/**
 * 下载文件 feign 接口
 */
@FeignClient(name = "tiny-file-server", path = "/tiny-file/file/download")
public interface TinyFileDownloadFeign {

    @GetMapping("/{storageKey}/{path}/{fileName}")
    @ResponseBody
    ResponseEntity<byte[]> downLoad(@PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName) throws IOException;

}
