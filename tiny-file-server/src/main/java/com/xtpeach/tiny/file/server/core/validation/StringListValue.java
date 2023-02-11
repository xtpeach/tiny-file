package com.xtpeach.tiny.file.server.core.validation;

import com.xtpeach.tiny.file.server.core.validation.StringListValueConstraintValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.Target;

import static java.lang.annotation.RetentionPolicy.RUNTIME;

/**
 * 字符串列表值校验注解
 *
 * @author xtpeach
 */
@Documented
@Constraint(validatedBy = { StringListValueConstraintValidator.class })
@Target({ ElementType.METHOD, ElementType.FIELD, ElementType.ANNOTATION_TYPE })
@Retention(RUNTIME)
public @interface StringListValue {

    String message() default "";

    Class<?>[] groups() default { };

    Class<? extends Payload>[] payload() default { };

    String[] vals() default { };

}