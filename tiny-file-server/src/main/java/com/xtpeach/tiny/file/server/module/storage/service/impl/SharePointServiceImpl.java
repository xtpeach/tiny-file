package com.xtpeach.tiny.file.server.module.storage.service.impl;

import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractSharePointServiceBase;
import com.xtpeach.tiny.file.server.module.storage.model.param.SharePointParam;
import com.xtpeach.tiny.file.server.module.storage.model.enums.StorageTypeEnum;
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
public class SharePointServiceImpl extends AbstractSharePointServiceBase<SharePointParam> {

    @Value("${zfile.onedrive.clientId:09939809-c617-43c8-a220-a93c1513c5d4}")
    protected String clientId;

    @Value("${zfile.onedrive.redirectUri:https://zfile.jun6.net/onedrive/callback}")
    protected String redirectUri;

    @Value("${zfile.onedrive.clientSecret:_l:zI-_yrW75lV8M61K@z.I2K@B/On6Q}")
    protected String clientSecret;

    @Value("${zfile.onedrive.scope:offline_access User.Read Files.ReadWrite.All Sites.Read.All Sites.ReadWrite.All}")
    protected String scope;

    @Override
    public StorageTypeEnum getStorageTypeEnum() {
        return StorageTypeEnum.SHAREPOINT_DRIVE;
    }

    @Override
    public String getGraphEndPoint() {
        return "graph.microsoft.com";
    }

    @Override
    public String getAuthenticateEndPoint() {
        return "login.microsoftonline.com";
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