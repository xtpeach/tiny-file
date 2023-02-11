package com.xtpeach.tiny.file.server.module.link.convert;

import com.xtpeach.tiny.file.server.module.link.model.entity.ShortLink;
import com.xtpeach.tiny.file.server.module.link.model.request.ShortLinkResult;
import com.xtpeach.tiny.file.server.module.storage.model.entity.StorageSource;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

/**
 * 直链实体类器
 *
 * @author xtpeach
 */
@Component
@Mapper(componentModel = "spring")
public interface ShortLinkConvert {

	@Mapping(source = "shortLink.id", target = "id")
	@Mapping(source = "storageSource.name", target = "storageName")
	@Mapping(source = "storageSource.type", target = "storageType")
    ShortLinkResult entityToResultList(ShortLink shortLink, StorageSource storageSource);

}