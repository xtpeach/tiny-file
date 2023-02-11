package com.xtpeach.tiny.file.server.core.init;

import cn.hutool.core.bean.BeanUtil;
import cn.hutool.crypto.SecureUtil;
import com.xtpeach.tiny.file.server.core.util.IpUtil;
import com.xtpeach.tiny.file.server.module.config.model.dto.SystemConfigDTO;
import com.xtpeach.tiny.file.server.module.config.model.request.InstallSystemRequest;
import com.xtpeach.tiny.file.server.module.config.service.SystemConfigService;
import com.xtpeach.tiny.file.server.module.storage.model.dto.StorageSourceAllParamDTO;
import com.xtpeach.tiny.file.server.module.storage.model.enums.SearchModeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.enums.StorageTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.request.base.SaveStorageSourceRequest;
import com.xtpeach.tiny.file.server.module.storage.service.StorageSourceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class InitTinyFileRunner implements CommandLineRunner {

    /**
     * log
     */
    private Logger logger = LoggerFactory.getLogger(InitTinyFileRunner.class);

    /**
     * 默认存储源别名
     */
    private String DEFAULT_STORAGE_KEY = "default";

    /**
     * [变量设置]登录用户名
     */
    @Value("${tiny.file.username:admin}")
    private String username;

    /**
     * [变量设置]登录密码
     */
    @Value("${tiny.file.password:admin1#3}")
    private String password;

    /**
     * [变量设置]服务端口
     */
    @Value("${server.port:8080}")
    private Integer port;

    /**
     * [变量设置]服务名称
     */
    @Value("${spring.application.name:tiny-file-server}")
    private String appName;

    /**
     * [service]创建存储 Controller
     */
    @Resource
    private StorageSourceService storageSourceService;

    /**
     * [service]模块设置
     */
    @Resource
    private SystemConfigService systemConfigService;

    /**
     * 执行初始化方法 run
     *
     * @param args
     * @throws Exception
     */
    @Override
    public void run(String... args) throws Exception {
        // 设置站点基本信息
        InstallSystemRequest installSystemRequest = new InstallSystemRequest();
        String ip_port_address = IpUtil.getIpPort(IpUtil.getIp(), port);
        String address = "http://{ip_port}".replace("{ip_port}", ip_port_address);
        installSystemRequest.setSiteName(appName);
        installSystemRequest.setUsername(username);
        installSystemRequest.setPassword(password);
        installSystemRequest.setDomain(address);
        if (systemConfigService.getSystemIsInstalled()) {
            logger.info("站点初始化已完成");
            return ;
        }

        installSystemRequest.setPassword(SecureUtil.md5(installSystemRequest.getPassword()));
        SystemConfigDTO systemConfigDTO = new SystemConfigDTO();
        BeanUtil.copyProperties(installSystemRequest, systemConfigDTO);
        systemConfigDTO.setInstalled(true);
        // 修改 onlyOffice 地址
        systemConfigDTO.setOnlyOfficeUrl("http://" + IpUtil.getIp());
        systemConfigService.updateSystemConfig(systemConfigDTO);

        // 创建默认存储 default
        boolean exitFlag = storageSourceService.existByStorageKey(DEFAULT_STORAGE_KEY);
        if (!exitFlag) {
            // 设置存储源信息
            SaveStorageSourceRequest saveStorageSourceRequest = new SaveStorageSourceRequest();
            saveStorageSourceRequest.setName("默认");
            saveStorageSourceRequest.setKey(DEFAULT_STORAGE_KEY);
            saveStorageSourceRequest.setType(StorageTypeEnum.LOCAL);
            saveStorageSourceRequest.setRemark("默认存储源");
            saveStorageSourceRequest.setDefaultSwitchToImgMode(false);
            saveStorageSourceRequest.setEnable(true);
            saveStorageSourceRequest.setEnableFileOperator(true);
            saveStorageSourceRequest.setEnableFileAnnoOperator(true);
            saveStorageSourceRequest.setSearchEnable(false);
            saveStorageSourceRequest.setSearchIgnoreCase(false);
            saveStorageSourceRequest.setSearchMode(SearchModeEnum.SEARCH_CACHE_MODE);
            saveStorageSourceRequest.setEnableCache(false);
            saveStorageSourceRequest.setAutoRefreshCache(false);
            StorageSourceAllParamDTO storageSourceAllParamDTO = new StorageSourceAllParamDTO();
            storageSourceAllParamDTO.setIsPrivate(false);
            storageSourceAllParamDTO.setFilePath("/home/files");
            storageSourceAllParamDTO.setAutoConfigCors(false);
            storageSourceAllParamDTO.setTokenTime(1800);
            saveStorageSourceRequest.setStorageSourceAllParam(storageSourceAllParamDTO);
            storageSourceService.saveStorageSource(saveStorageSourceRequest);
        }

    }

}
