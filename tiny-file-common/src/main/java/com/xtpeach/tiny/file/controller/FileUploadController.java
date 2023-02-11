package com.xtpeach.tiny.file.controller;

import com.xtpeach.tiny.file.feign.TinyFileUploadFeign;
import com.xtpeach.tiny.file.util.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RequestMapping("/tiny-file/file/upload")
@RestController
public class FileUploadController {

    /**
     * tiny-file
     */
    @Autowired
    private TinyFileUploadFeign tinyFileUploadFeign;

    @PostMapping("/{storageKey}/{path}")
    @ResponseBody
    public AjaxJson<?> upload(@PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @RequestParam("file") MultipartFile file) throws IOException {
        return AjaxJson.getSuccessData(tinyFileUploadFeign.upload(storageKey, path, file).getData());
    }

}
