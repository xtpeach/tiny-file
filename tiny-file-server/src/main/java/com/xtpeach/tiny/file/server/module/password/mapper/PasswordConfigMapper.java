package com.xtpeach.tiny.file.server.module.password.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.xtpeach.tiny.file.server.module.password.model.entity.PasswordConfig;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 存储源密码配置表 Mapper 接口
 *
 * @author xtpeach
 */
@Mapper
public interface PasswordConfigMapper extends BaseMapper<PasswordConfig> {

    /**
     * 根据存储源 ID 获取密码规则配置
     *
     * @param   storageId
     *          存储源 ID
     *
     * @return  存储源密码规则配置列表
     */
    List<PasswordConfig> findByStorageId(@Param("storageId") Integer storageId);


    /**
     * 根据存储源 ID 删除要密码规则配置
     *
     * @param   storageId
     *          存储源 ID
     *
     * @return  删除记录数
     */
    int deleteByStorageId(@Param("storageId") Integer storageId);

}