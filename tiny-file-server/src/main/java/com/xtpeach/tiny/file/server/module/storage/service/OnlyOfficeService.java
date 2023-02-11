package com.xtpeach.tiny.file.server.module.storage.service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.xtpeach.tiny.file.dto.OnlyOfficeCallbackDTO;
import com.xtpeach.tiny.file.enums.OnlyOfficeCallbackStatusEnum;
import com.xtpeach.tiny.file.server.module.storage.context.StorageSourceContext;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractBaseFileService;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractProxyTransferService;
import com.google.common.collect.Maps;
import lombok.extern.slf4j.Slf4j;
import org.joda.time.DateTime;
import org.springframework.stereotype.Service;
import org.thymeleaf.util.StringUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.beans.Beans;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

/**
 * onlyOffice 数据处理
 */
@Slf4j
@Service
public class OnlyOfficeService {

    /**
     * 正在编辑文件缓存
     */
    private static final Map<String, DateTime> editCacheMap = Maps.newConcurrentMap();

    @Resource
    private StorageSourceContext storageSourceContext;

    /**
     * onlyOffice数据处理
     *
     * @return
     */
    public OnlyOfficeCallbackDTO readDTOFromRequest(HttpServletRequest request, PrintWriter writer) {
        String body;

        try (Scanner scanner = new Scanner(request.getInputStream());) {
            scanner.useDelimiter("\\A");
            body = scanner.hasNext() ? scanner.next() : "";
        } catch (Exception ex) {
            writer.write("get request.getInputStream error:" + ex.getMessage());
            return null;
        }

        if (body.isEmpty()) {
            writer.write("empty request.getInputStream");
            return null;
        }

        JSONObject callBackJsonObj;

        try {
            Object obj = JSON.parse(body);
            callBackJsonObj = (JSONObject) obj;
        } catch (Exception ex) {
            writer.write("JSONParser.parse error:" + ex.getMessage());
            return null;
        }

        OnlyOfficeCallbackDTO onlyOfficeCallbackDTO = new OnlyOfficeCallbackDTO();
        onlyOfficeCallbackDTO.setStatus(((Integer) callBackJsonObj.get("status")).intValue());
        onlyOfficeCallbackDTO.setUrl((String) callBackJsonObj.get("url"));
        onlyOfficeCallbackDTO.setUsers((List<String>) callBackJsonObj.get("users"));
        onlyOfficeCallbackDTO.setKey((String) callBackJsonObj.get("key"));

        return onlyOfficeCallbackDTO;
    }

    /**
     * 获取最新文件数据
     *
     * @param onlyOfficeCallbackDTO
     * @return
     */
    public void saveNewest(OnlyOfficeCallbackDTO onlyOfficeCallbackDTO, String storageKey, String path, String fileName) throws IOException {
        int status = onlyOfficeCallbackDTO.getStatus();
        // 当编辑状态为准备保存或已保存
        if (OnlyOfficeCallbackStatusEnum.ofValue(status) == OnlyOfficeCallbackStatusEnum.READY_SAVING
                || OnlyOfficeCallbackStatusEnum.ofValue(status) == OnlyOfficeCallbackStatusEnum.SAVED) {
            String downloadUri = onlyOfficeCallbackDTO.getUrl();
            URL url = new URL(downloadUri);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            InputStream inputStream = connection.getInputStream();
            if (inputStream != null) {
                // 获取上传路径
                String filePath = path + "/" + StringUtils.substringBefore(fileName, ".")
                        + DateTime.now().toString("（yyyy-MM-dd HH:mm:ss）") + "." + StringUtils.substringAfter(fileName, ".");

                AbstractBaseFileService<?> storageServiceByKey
                        = storageSourceContext.getByStorageKey(storageKey);

                // 如果不是 ProxyTransferService, 则返回错误信息.
                if (Beans.isInstanceOf(storageServiceByKey, AbstractProxyTransferService.class)) {
                    // 进行上传.
                    AbstractProxyTransferService<?> proxyUploadService = (AbstractProxyTransferService<?>) storageServiceByKey;
                    proxyUploadService.uploadFile(filePath, inputStream);
                }

                // 断开获取最新文件数据连接
                connection.disconnect();
            }
        }
    }

    /**
     * 添加编辑中文件缓存
     *
     * @param filePath
     */
    public void addEditingOfficeFile(String filePath) {
        editCacheMap.put(filePath, DateTime.now());
    }

    /**
     * 检查文件是否在编辑中
     *
     * @param filePath
     * @return
     */
    public boolean editingOfficeCheck(String filePath) {
        if (editCacheMap.containsKey(filePath)
                // 等待10秒onlyOffice异步
                && editCacheMap.get(filePath).plusSeconds(10).isAfterNow()) {
            return true;
        } else {
            editCacheMap.remove(filePath);
            return false;
        }
    }

}
