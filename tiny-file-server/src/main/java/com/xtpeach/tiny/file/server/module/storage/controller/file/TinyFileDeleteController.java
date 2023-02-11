package com.xtpeach.tiny.file.server.module.storage.controller.file;

import com.xtpeach.tiny.file.server.core.exception.StorageSourceNotSupportProxyUploadException;
import com.xtpeach.tiny.file.server.module.storage.context.StorageSourceContext;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractBaseFileService;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractProxyTransferService;
import com.github.xiaoymin.knife4j.annotations.ApiSort;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.beans.Beans;

/**
 * 对外统一文件删除接口
 *
 * @author xtpeach
 */
@Api(tags = "对外统一文件删除接口")
@ApiSort(1)
@Slf4j
@RequestMapping("/tiny-file/file/delete")
@RestController
public class TinyFileDeleteController {

    @Resource
    private StorageSourceContext storageSourceContext;

    @GetMapping("/{storageKey}/{path}/{fileName}")
    @ResponseBody
    public Boolean download(
            @PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName) {
        AbstractBaseFileService<?> storageServiceByKey
                = storageSourceContext.getByStorageKey(storageKey);

        // 如果不是 ProxyTransferService, 则返回错误信息.
        if (!Beans.isInstanceOf(storageServiceByKey, AbstractProxyTransferService.class)) {
            throw new StorageSourceNotSupportProxyUploadException("存储类型异常，不支持删除.");
        }

        // 进行上传.
        AbstractProxyTransferService<?> proxyDeleteService
                = (AbstractProxyTransferService<?>) storageServiceByKey;

        return proxyDeleteService.deleteFile(path, fileName);
    }

}
