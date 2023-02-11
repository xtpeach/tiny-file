package com.xtpeach.tiny.file.dto;

/**
 * 文件上传响应数据传输
 */
public class FileUploadResponseDTO {

    /**
     * 文件名称
     */
    private String fileName;

    /**
     * 下载地址
     */
    private String downloadUrl;

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getDownloadUrl() {
        return downloadUrl;
    }

    public void setDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
    }

    @Override
    public String toString() {
        return "FileUploadResponseDto{" +
                "fileName='" + fileName + '\'' +
                ", downloadUrl='" + downloadUrl + '\'' +
                '}';
    }
}
