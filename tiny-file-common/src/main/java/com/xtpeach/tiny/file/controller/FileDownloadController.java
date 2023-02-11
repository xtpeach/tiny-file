package com.xtpeach.tiny.file.controller;

import com.xtpeach.tiny.file.feign.TinyFileDownloadFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RequestMapping("/tiny-file/file/download")
@RestController
public class FileDownloadController {

    @Autowired
    private TinyFileDownloadFeign tinyFileDownloadFeign;

    @GetMapping("/{storageKey}/{path}/{fileName}")
    @ResponseBody
    public ResponseEntity<byte[]> download(
            @PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName) throws IOException {
        return tinyFileDownloadFeign.downLoad(storageKey, path, fileName);
    }

}
