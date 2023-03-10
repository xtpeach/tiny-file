package com.xtpeach.tiny.file.server.module.storage.service;

import cn.hutool.core.convert.Convert;
import cn.hutool.core.util.ReflectUtil;
import cn.hutool.core.util.StrUtil;
import com.xtpeach.tiny.file.server.core.exception.StorageSourceException;
import com.xtpeach.tiny.file.server.core.util.CodeMsg;
import com.xtpeach.tiny.file.server.module.password.model.dto.VerifyResultDTO;
import com.xtpeach.tiny.file.server.module.password.service.PasswordConfigService;
import com.xtpeach.tiny.file.server.module.readme.model.entity.ReadmeConfig;
import com.xtpeach.tiny.file.server.module.storage.context.StorageSourceContext;
import com.xtpeach.tiny.file.server.module.storage.convert.StorageSourceConvert;
import com.xtpeach.tiny.file.server.module.storage.mapper.StorageSourceMapper;
import com.xtpeach.tiny.file.server.module.storage.model.dto.StorageSourceAllParamDTO;
import com.xtpeach.tiny.file.server.module.storage.model.dto.StorageSourceDTO;
import com.xtpeach.tiny.file.server.module.storage.model.entity.StorageSource;
import com.xtpeach.tiny.file.server.module.storage.model.entity.StorageSourceConfig;
import com.xtpeach.tiny.file.server.module.storage.model.enums.StorageTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.request.admin.UpdateStorageSortRequest;
import com.xtpeach.tiny.file.server.module.storage.model.request.base.FileListConfigRequest;
import com.xtpeach.tiny.file.server.module.storage.model.request.base.SaveStorageSourceRequest;
import com.xtpeach.tiny.file.server.module.storage.model.result.StorageSourceConfigResult;
import com.xtpeach.tiny.file.server.core.exception.file.InvalidStorageSourceException;
import com.xtpeach.tiny.file.server.module.filter.service.FilterConfigService;
import com.xtpeach.tiny.file.server.module.link.service.ShortLinkService;
import com.xtpeach.tiny.file.server.module.log.service.DownloadLogService;
import com.xtpeach.tiny.file.server.module.readme.service.ReadmeConfigService;
import com.xtpeach.tiny.file.server.module.storage.service.StorageSourceConfigService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.cache.annotation.Caching;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

/**
 * ????????????????????? Service
 *
 * @author xtpeach
 */
@Slf4j
@Service
@CacheConfig(cacheNames = "storageSource")
public class StorageSourceService {

    @Resource
    private StorageSourceMapper storageSourceMapper;
    
    @Resource
    private StorageSourceService storageSourceService;
    
    @Resource
    private StorageSourceContext storageSourceContext;
    
    @Resource
    private StorageSourceConvert storageSourceConvert;
    
    @Resource
    private StorageSourceConfigService storageSourceConfigService;
    
    @Resource
    private FilterConfigService filterConfigService;
    
    @Resource
    private PasswordConfigService passwordConfigService;
    
    @Resource
    private ReadmeConfigService readmeConfigService;
    
    @Resource
    private ShortLinkService shortLinkService;
    
    @Resource
    private DownloadLogService downloadLogService;


    /**
     * ???????????????????????????
     *
     * @return ???????????????
     */
    public List<StorageSource> findAllOrderByOrderNum() {
        return storageSourceMapper.findAllOrderByOrderNum();
    }


    /**
     * ???????????????????????????????????????????????????????????????????????????
     *
     * @return ???????????????????????????
     */
    public List<StorageSource> findAllEnableOrderByOrderNum() {
        return storageSourceMapper.findListByEnableOrderByOrderNum();
    }
    
    
    /**
     * ???????????????????????????
     *
     * @param   id
     *          ????????? ID
     *
     * @return  ???????????????
     */
    @Cacheable(key = "#id", unless = "#result == null")
    public StorageSource findById(Integer id) {
        return storageSourceMapper.selectById(id);
    }
    
    
    /**
     * ??????????????? key ???????????????
     *
     * @param   storageKey
     *          ????????? key
     *
     * @throws  InvalidStorageSourceException   ?????????????????????, ????????????.
     *
     * @return  ???????????????
     */
    @Cacheable(key = "#storageKey", unless = "#result == null")
    public StorageSource findByStorageKey(String storageKey) {
        return storageSourceMapper.findByStorageKey(storageKey);
    }
    
    
    /**
     * ??????????????? key ??????????????? id
     *
     * @param   storageKey
     *          ????????? key
     *
     * @return  ???????????????
     */
    public Integer findIdByKey(String storageKey) {
        return Optional.ofNullable(storageSourceService.findByStorageKey(storageKey)).map(StorageSource::getId).orElse(null);
    }
    
    
    /**
     * ??????????????? id ??????????????? key
     *
     * @param   id
     *          ????????? id
     *
     * @return  ????????? key
     */
    public String findStorageKeyById(Integer id){
        return Optional.ofNullable(storageSourceService.findById(id)).map(StorageSource::getKey).orElse(null);
    }
    
    
    /**
     * ?????? id ??????????????????????????????.
     *
     * @param   id
     *          ????????? ID
     *
     * @return  ????????????????????????.
     */
    public StorageTypeEnum findStorageTypeById(Integer id) {
        return Optional.ofNullable(storageSourceService.findById(id)).map(StorageSource::getType).orElse(null);
    }
    
    
    /**
     * ????????????????????? DTO ??????, ????????????????????????????????????.
     *
     * @param   id
     *          ????????? ID
     *
     * @return  ????????? DTO
     */
    @Cacheable(key = "'dto-' + #id", unless = "#result == null")
    public StorageSourceDTO findDTOById(Integer id) {
        // ???????????????????????????????????? StorageSourceAllParam ???.
        StorageSourceAllParamDTO storageSourceAllParam = new StorageSourceAllParamDTO();
        storageSourceConfigService.selectStorageConfigByStorageId(id)
                .forEach(storageSourceConfig ->
                        ReflectUtil.setFieldValue(storageSourceAllParam, storageSourceConfig.getName(), storageSourceConfig.getValue())
                );
        
        // ?????????????????????????????? dto ????????????
        StorageSource storageSource = findById(id);
        return storageSourceConvert.entityToDTO(storageSource, storageSourceAllParam);
    }
    
    
    /**
     * ??????????????? key ??????????????? (???????????????)
     *
     * @param   storageKey
     *          ????????? key
     *
     * @return  ???????????????
     */
    public boolean existByStorageKey(String storageKey) {
        return storageSourceService.findByStorageKey(storageKey) != null;
    }
    
    
    /**
     * ???????????????????????????, ??????????????????????????????
     *
     * @param   id
     *          ????????? ID
     */
    @Transactional(rollbackFor = Exception.class)
    @Caching(evict = {
            @CacheEvict(key = "#id"),
            @CacheEvict(key = "'dto-' + #id"),
            @CacheEvict(key = "#result.key", condition = "#result != null")
    })
    public StorageSource deleteById(Integer id) {
        log.info("?????? id ??? {} ????????????", id);
        StorageSource storageSource = findById(id);
        
        if (storageSource == null) {
            String msg = StrUtil.format("??????????????????????????? id ??? {} ?????????????????????", id);
            throw new StorageSourceException(CodeMsg.STORAGE_SOURCE_NOT_FOUND, id, msg);
        }
        
        String storageKey = storageSource.getKey();
    
        int deleteEntitySize = storageSourceMapper.deleteById(id);
        int deleteConfigSize = storageSourceConfigService.deleteByStorageId(id);
    
        int clearPasswordSize = passwordConfigService.deleteByStorageId(id);
        int clearFilterSize = filterConfigService.deleteByStorageId(id);
        int clearReadmeSize = readmeConfigService.deleteByStorageId(id);
    
        int clearShortLinkSize = shortLinkService.deleteByStorageId(id);
        int clearDownloadLogSize = downloadLogService.deleteByStorageKey(storageKey);
    
        storageSourceContext.destroy(id);
        log.info("????????????????????? {} ??????, ??????????????????????????????????????????????????? {} ????????????????????? {} ??????" +
                "???????????? {} ?????????????????? {} ?????????????????? {} ???????????? {} ???????????????????????? {} ??????",
                id, deleteEntitySize, deleteConfigSize,
                clearPasswordSize, clearFilterSize, clearReadmeSize, clearShortLinkSize, clearDownloadLogSize);
        return storageSource;
    }

    
    /**
     * ?????????????????????
     *
     * @param   updateStorageSortRequestList
     *          ???????????????????????? id ??????????????????
     */
    @Transactional(rollbackFor = Exception.class)
    @CacheEvict(allEntries = true)
    public void updateStorageSort(List<UpdateStorageSortRequest> updateStorageSortRequestList) {
        for (int i = 0; i < updateStorageSortRequestList.size(); i++) {
            UpdateStorageSortRequest item = updateStorageSortRequestList.get(i);
            if (!Objects.equals(i, item.getOrderNum())) {
                log.info("??????????????? {} ???????????? {}", item.getId(), i);
                storageSourceMapper.updateSetOrderNumById(i, item.getId());
            }
        }
    }
    
    
    @Caching(evict = {
            @CacheEvict(key = "#entity.id"),
            @CacheEvict(key = "#entity.key"),
            @CacheEvict(key = "'dto-' + #entity.id")
    })
    public void updateById(StorageSource entity) {
        storageSourceMapper.updateById(entity);
    }
    
    
    /**
     * ??????????????????????????????????????????????????????
     *
     * @param   saveStorageSourceRequest
     *          ????????? DTO ??????
     */
    @Transactional(rollbackFor = Exception.class)
    public Integer saveStorageSource(SaveStorageSourceRequest saveStorageSourceRequest) {
        log.info("?????????????????????, id: {}, name: {}, key: {}, type: {}",
                saveStorageSourceRequest.getId(), saveStorageSourceRequest.getName(),
                saveStorageSourceRequest.getKey(), saveStorageSourceRequest.getType().getDescription());
        
        // ?????????????????? entity ??????
        StorageSource storageSource = storageSourceConvert.saveRequestToEntity(saveStorageSourceRequest);
        
        // ????????????????????????
        StorageSource dbSaveResult = storageSourceService.saveOrUpdate(storageSource);
    
        log.info("?????????????????????, id: {}, name: {}, key: {}, type: {}",
                dbSaveResult.getId(), dbSaveResult.getName(),
                dbSaveResult.getKey(), dbSaveResult.getType().getDescription());
        
        // ????????? ID
        Integer storageId = dbSaveResult.getId();
        
        // ?????????????????????
        List<StorageSourceConfig> storageSourceConfigList =
                storageSourceConfigService.toStorageSourceConfigList(storageId,
                                                                    dbSaveResult.getType(),
                                                                    saveStorageSourceRequest.getStorageSourceAllParam());
        storageSourceConfigService.saveBatch(storageId, storageSourceConfigList);
        log.info("??????????????????????????????????????????????????????????????????, id: {}, name: {}, config size: {}",
                dbSaveResult.getId(), dbSaveResult.getName(), storageSourceConfigList.size());
    
        // ??????????????????????????????
        storageSourceContext.init(storageSource);
        log.info("????????????????????????????????????, id: {}, name: {}, config size: {}",
                dbSaveResult.getId(), dbSaveResult.getName(), storageSourceConfigList.size());
        
        return storageId;
    }
    
    
    /**
     * ????????????????????????????????????????????? id ??????????????????????????????????????????????????? key?????????????????????????????? id ????????? key ????????????
     *
     * @param   storageSource
     *          ???????????????
     *
     * @return  ???????????????
     */
    @Caching(evict = {
            @CacheEvict(key = "#result.id"),
            @CacheEvict(key = "'dto-' + #result.id"),
            @CacheEvict(key = "#result.key")
    })
    public StorageSource saveOrUpdate(StorageSource storageSource) {
        // ???????????????????????????
        if (storageSource.getId() == null) {
            storageSourceMapper.insert(storageSource);
        } else {
            storageSourceMapper.updateById(storageSource);
        }
        
        // ???????????????????????? key, ???????????? id ????????? key
        if (StrUtil.isEmpty(storageSource.getKey()) && !StrUtil.equals(storageSource.getId().toString(), storageSource.getKey())) {
            storageSource.setKey(Convert.toStr(storageSource.getId()));
            storageSourceMapper.updateById(storageSource);
        }
        return storageSource;
    }
    
    
    public StorageSourceConfigResult getStorageConfigSource(FileListConfigRequest fileListConfigRequest) {
        String storageKey = fileListConfigRequest.getStorageKey();
        String path = fileListConfigRequest.getPath();
        
        // ???????????????????????????.
        StorageSource storageSource = storageSourceService.findByStorageKey(storageKey);
        if (storageSource == null) {
            throw new InvalidStorageSourceException("??????????????? key ??????????????????, key: " + storageKey);
        }
        
        // ??????????????? key ??????????????? id
        Integer storageId = storageSource.getId();
    
        VerifyResultDTO verifyPassword = passwordConfigService.verifyPassword(storageId, path, fileListConfigRequest.getPassword());
    
        ReadmeConfig readmeByPath = null;
        if (verifyPassword.isPassed()) {
            // ????????????????????????????????? readme ??????
            readmeByPath = readmeConfigService.getByStorageAndPath(storageId, path, storageSource.getCompatibilityReadme());
        } else {
            log.info("??????????????????????????????????????? readme ??????, storageId: {}, path: {}, password: {}", storageId, path, fileListConfigRequest.getPassword());
        }
    
        // ????????????????????????????????? readme ??????
        return storageSourceConvert.entityToConfigResult(storageSource, readmeByPath);
    }
    
    
}