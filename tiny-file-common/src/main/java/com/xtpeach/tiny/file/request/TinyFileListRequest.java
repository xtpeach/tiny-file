package com.xtpeach.tiny.file.request;

import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotBlank;

public class TinyFileListRequest {

    @ApiModelProperty(value = "存储源 key", required = true, example = "local")
    @NotBlank(message = "存储源不能为空")
    private String storageKey;

    @ApiModelProperty(value = "请求路径", example = "/")
    private String path;

    @ApiModelProperty(value = "文件名称", example = "操作手册.doc")
    private String name;

    public String getStorageKey() {
        return storageKey;
    }

    public void setStorageKey(String storageKey) {
        this.storageKey = storageKey;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
