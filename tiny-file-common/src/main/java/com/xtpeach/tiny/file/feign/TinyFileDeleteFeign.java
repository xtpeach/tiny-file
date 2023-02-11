package com.xtpeach.tiny.file.feign;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 删除文件 feign 接口
 */
@FeignClient(name = "tiny-file-server", path = "/tiny-file/file/delete")
public interface TinyFileDeleteFeign {

    @GetMapping("/{storageKey}/{path}/{fileName}")
    @ResponseBody
    Boolean delete(
            @PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName);

}
