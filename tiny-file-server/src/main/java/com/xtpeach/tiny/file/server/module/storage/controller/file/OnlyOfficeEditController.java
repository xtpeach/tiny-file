package com.xtpeach.tiny.file.server.module.storage.controller.file;

import com.xtpeach.tiny.file.dto.OnlyOfficeCallbackDTO;
import com.xtpeach.tiny.file.server.module.storage.service.OnlyOfficeService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * onlyOffice 文件编辑接口
 * （提供 onlyOffice 文件编辑回调接口）
 *
 * @author xtpeach
 */
@Api(tags = "onlyOffice 文件编辑接口")
@Slf4j
@RequestMapping("/api/onlyOffice/edit")
@RestController
public class OnlyOfficeEditController {

    /**
     * onlyOffice 处理
     */
    @Resource
    private OnlyOfficeService onlyOfficeService;

    /**
     * 文件编辑
     *
     * @param request
     * @param response
     * @param storageKey
     * @param path
     * @param fileName
     * @throws IOException
     */
    @PostMapping("/{storageKey}/{path}/{fileName}")
    @ApiOperation(value = "onlyOffice 文件编辑接口", notes = "提供 onlyOffice 在线编辑之后的回调接口")
    public void edit(HttpServletRequest request, HttpServletResponse response
            , @PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName) throws IOException {
        // 响应写对象
        PrintWriter writer = response.getWriter();

        // 读取 onlyOffice 服务调用参数
        OnlyOfficeCallbackDTO onlyOfficeCallbackDTO = onlyOfficeService.readDTOFromRequest(request, writer);

        // 保存最新文件数据（编辑关闭之后异步保存）
        onlyOfficeService.saveNewest(onlyOfficeCallbackDTO, storageKey, path, fileName);

        // 默认返回 {"error":0} 通知 onlyOffice 服务编辑成功
        writer.write("{\"error\":0}");
    }

    /**
     * （*暂时没有实际效果*）
     * 文件编辑缓存（在onlyOffice预览关闭之后可能会产生编辑，缓存编辑文件的路径）
     *
     * @param storageKey
     * @param path
     * @param fileName
     */
    @PostMapping("/cache/{storageKey}/{path}/{fileName}")
    @ApiOperation(value = "onlyOffice 文件编辑接口", notes = "提供 onlyOffice 在线编辑之后的回调接口")
    public void cache(@PathVariable("storageKey") String storageKey
            , @PathVariable("path") String path
            , @PathVariable("fileName") String fileName) {
        // 拼接上传路径
        String filePath = storageKey + ":" + path + "/" + fileName;
        onlyOfficeService.addEditingOfficeFile(filePath);
    }

}
