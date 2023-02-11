package com.xtpeach.tiny.file.server.module.storage.service.base;

import com.xtpeach.tiny.file.server.module.storage.model.param.SharePointParam;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractMicrosoftDriveService;

/**
 * @author xtpeach
 */
public abstract class AbstractSharePointServiceBase<P extends SharePointParam> extends AbstractMicrosoftDriveService<SharePointParam> {

    @Override
    public void init() {
        refreshAccessToken();
    }

    @Override
    public String getType() {
        return "sites/" + param.getSiteId();
    }

    @Override
    public String getDownloadUrl(String pathAndName) {
        return getFileItem(pathAndName).getUrl();
    }

}