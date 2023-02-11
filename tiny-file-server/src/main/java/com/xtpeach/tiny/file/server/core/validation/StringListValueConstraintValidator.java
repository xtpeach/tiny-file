package com.xtpeach.tiny.file.server.core.validation;

import cn.hutool.core.util.StrUtil;
import com.xtpeach.tiny.file.server.core.validation.StringListValue;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * 字符串列表值校验器
 *
 * @author xtpeach
 */
public class StringListValueConstraintValidator implements ConstraintValidator<StringListValue, String> {

	private final Set<String> set = new HashSet<>();

	/**
	 * 初始化方法
	 *
	 * @param   constraintAnnotation
	 *          校验注解对象
	 */
	@Override
	public void initialize(StringListValue constraintAnnotation) {
		String[] vals = constraintAnnotation.vals();
		set.addAll(Arrays.asList(vals));

	}


	/**
	 * 判断是否校验成功
	 *
	 * @param   value
	 *          需要校验的值
	 *
	 * @param   context
	 *          校验上下文
	 *
	 * @return  是否校验成功
	 */
	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		if (StrUtil.isEmpty(value)) {
			return true;
		}
		return set.contains(value);
	}

}