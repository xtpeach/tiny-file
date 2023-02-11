package com.xtpeach.tiny.file.server.module.storage.service.impl;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.xtpeach.tiny.file.server.module.storage.model.enums.StorageTypeEnum;
import com.xtpeach.tiny.file.server.module.storage.model.param.HuaweiParam;
import com.xtpeach.tiny.file.server.module.storage.service.base.AbstractS3BaseFileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

/**
 * @author xtpeach
 */
@Service
@Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
@Slf4j
public class HuaweiServiceImpl extends AbstractS3BaseFileService<HuaweiParam> {

    @Override
    public void init() {
        BasicAWSCredentials credentials = new BasicAWSCredentials(param.getAccessKey(), param.getSecretKey());
        s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withEndpointConfiguration(new AwsClientBuilder.EndpointConfiguration(param.getEndPoint(), "obs")).build();

        setUploadCors();
    }

    @Override
    public StorageTypeEnum getStorageTypeEnum() {
        return StorageTypeEnum.HUAWEI;
    }

}