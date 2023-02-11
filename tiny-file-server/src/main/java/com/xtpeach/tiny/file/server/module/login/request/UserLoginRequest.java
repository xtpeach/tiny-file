package com.xtpeach.tiny.file.server.module.login.request;import io.swagger.annotations.ApiModel;import io.swagger.annotations.ApiModelProperty;import lombok.Data;import javax.validation.constraints.NotBlank;/** * 用户登录请求参数参数 * * @author xtpeach */@Data@ApiModel(description = "用户登录请求参数类")public class UserLoginRequest {    @ApiModelProperty(value = "用户名", required = true, example = "admin")    @NotBlank(message = "用户名不能为空")    private String username;    @ApiModelProperty(value = "密码", required = true, example = "123456")    @NotBlank(message = "密码不能为空")    private String password;    @ApiModelProperty(value = "验证码", example = "123456")    private String verifyCode;    @ApiModelProperty(value = "验证码 UUID", notes = "用于图形验证码确认每个验证码图片请求的唯一值.", example = "c140a792-4ca2-4dac-8d4c-35750b78524f")    private String verifyCodeUUID;}