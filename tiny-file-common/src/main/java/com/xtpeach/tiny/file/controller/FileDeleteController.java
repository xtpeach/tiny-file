package com.xtpeach.tiny.file.controller;

import com.xtpeach.tiny.file.feign.TinyFileDeleteFeign;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RequestMapping("/tiny-file/file/delete")
@RestController
public class FileDeleteController {

    @Autowired
    private TinyFileDeleteFeign tinyFileDeleteFeign;

    @GetMapping("/{storageKey}/{path}/{fileName}")
    @ResponseBody
    public Boolean delete(
            @PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName) {
        return tinyFileDeleteFeign.delete(storageKey, path, fileName);
    }


}
