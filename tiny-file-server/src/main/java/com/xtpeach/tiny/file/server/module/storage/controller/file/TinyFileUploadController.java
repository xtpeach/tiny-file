package com.xtpeach.tiny.file.server.module.storage.controller.file;

import com.alibaba.fastjson.JSON;
import com.xtpeach.tiny.file.dto.FileUploadResponseDTO;
import com.xtpeach.tiny.file.util.AjaxJson;
import com.xtpeach.tiny.file.server.module.storage.context.StorageSourceContext;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractBaseFileService;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractProxyTransferService;
import com.github.xiaoymin.knife4j.annotations.ApiSort;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.ObjectUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import java.beans.Beans;
import java.io.IOException;

/**
 * 对外统一文件上传接口
 * （获取上传文件并操作文件，把两个操作合并）
 *
 * @author xtpeach
 */
@Api(tags = "对外统一文件上传接口")
@ApiSort(1)
@Slf4j
@RequestMapping("/tiny-file/file/upload")
@RestController
public class TinyFileUploadController {

    @Resource
    private StorageSourceContext storageSourceContext;

    @PostMapping("/{storageKey}/{path}")
    @ResponseBody
    public AjaxJson<?> upload(@PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @RequestParam("file") MultipartFile file) throws IOException {
        if (ObjectUtils.isEmpty(file)) {
            throw new RuntimeException("空文件不能为空");
        }

        // 获取上传路径
        String filePath = path + "/" + file.getOriginalFilename();

        AbstractBaseFileService<?> storageServiceByKey
                = storageSourceContext.getByStorageKey(storageKey);

        // 如果不是 ProxyTransferService, 则返回错误信息.
        if (!Beans.isInstanceOf(storageServiceByKey, AbstractProxyTransferService.class)) {
            return AjaxJson.getError("存储类型异常，不支持上传.");
        }

        // 进行上传.
        AbstractProxyTransferService<?> proxyUploadService = (AbstractProxyTransferService<?>) storageServiceByKey;
        proxyUploadService.uploadFile(filePath, file.getInputStream());

        FileUploadResponseDTO fileUploadResponseDto = new FileUploadResponseDTO();
        fileUploadResponseDto.setFileName(file.getOriginalFilename());
        fileUploadResponseDto.setDownloadUrl("/tiny-file/file/download/" + storageKey + "/" + filePath);

        return AjaxJson.getSuccessData(JSON.toJSONString(fileUploadResponseDto));
    }

}
