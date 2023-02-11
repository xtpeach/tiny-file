package com.xtpeach.tiny.file.server.module.storage.service.impl;

import com.xtpeach.tiny.file.server.module.storage.model.param.OneDriveChinaParam;
import com.xtpeach.tiny.file.server.module.storage.model.enums.StorageTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractOneDriveServiceBase;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

/**
 * @author xtpeach
 */
@Service
@Slf4j
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class OneDriveChinaServiceImpl extends AbstractOneDriveServiceBase<OneDriveChinaParam> {

    @Value("${zfile.onedrive-china.clientId:4a72d927-1907-488d-9eb2-1b465c53c1c5}")
    private String clientId;

    @Value("${zfile.onedrive-china.redirectUri:https://zfile.jun6.net/onedrive/china-callback}")
    private String redirectUri;

    @Value("${zfile.onedrive-china.clientSecret:Y9CEA=82da5n-y_]KAWAgLH3?R9xf7Uw}")
    private String clientSecret;

    @Value("${zfile.onedrive-china.scope:offline_access User.Read Files.ReadWrite.All Sites.Read.All Sites.ReadWrite.All}")
    private String scope;

    @Override
    public StorageTypeEnum getStorageTypeEnum() {
        return StorageTypeEnum.ONE_DRIVE_CHINA;
    }

    @Override
    public String getGraphEndPoint() {
        return "microsoftgraph.chinacloudapi.cn";
    }

    @Override
    public String getAuthenticateEndPoint() {
        return "login.partner.microsoftonline.cn";
    }
    
    @Override
    public String getClientId() {
        if (param == null || param.getClientId() == null) {
            return clientId;
        }
        return param.getClientId();
    }
    
    @Override
    public String getRedirectUri() {
        if (param == null || param.getRedirectUri() == null) {
            return redirectUri;
        }
        return param.getRedirectUri();
    }
    
    @Override
    public String getClientSecret() {
        if (param == null || param.getClientSecret() == null) {
            return clientSecret;
        }
        return param.getClientSecret();
    }
    
    @Override
    public String getScope() {
        return scope;
    }

}