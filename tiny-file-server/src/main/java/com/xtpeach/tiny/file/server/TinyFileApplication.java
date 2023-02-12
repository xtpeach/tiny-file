package com.xtpeach.tiny.file.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.EnableAspectJAutoProxy;


/**
 * @author xtpeach
 */
@SpringBootApplication
@EnableAspectJAutoProxy(exposeProxy = true, proxyTargetClass = true)
@ServletComponentScan(basePackages = {
        "com.xtpeach.tiny.file.server.core.filter",
        "com.xtpeach.tiny.file.server.module.storage.filter"
})
@ComponentScan(basePackages = {
        "com.xtpeach.tiny.file.server.*"
})
public class TinyFileApplication {

    public static void main(String[] args) {
        SpringApplication.run(TinyFileApplication.class, args);
    }

}