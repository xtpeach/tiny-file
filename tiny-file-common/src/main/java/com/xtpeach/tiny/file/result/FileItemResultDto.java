package com.xtpeach.tiny.file.result;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModelProperty;

import java.util.Date;

public class FileItemResultDto {

    @ApiModelProperty(value = "文件名", example = "a.mp4")
    private String name;

    @ApiModelProperty(value = "时间", example = "2020-01-01 15:22")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm", timezone = "GMT+8")
    private Date time;

    @ApiModelProperty(value = "大小", example = "1024")
    private Long size;

    @ApiModelProperty(value = "目录标志位", example = "false")
    private Boolean directoryFlag;

    @ApiModelProperty(value = "所在路径", example = "/home/")
    private String path;

    @ApiModelProperty(value = "下载地址", example = "http://www.example.com/a.mp4")
    private String url;

    public FileItemResultDto() {
    }

    public FileItemResultDto(String name, Date time, Long size, Boolean directoryFlag, String path, String url) {
        this.name = name;
        this.time = time;
        this.size = size;
        this.directoryFlag = directoryFlag;
        this.path = path;
        this.url = url;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public Long getSize() {
        return size;
    }

    public void setSize(Long size) {
        this.size = size;
    }

    public Boolean getDirectoryFlag() {
        return directoryFlag;
    }

    public void setDirectoryFlag(Boolean directoryFlag) {
        this.directoryFlag = directoryFlag;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

}
