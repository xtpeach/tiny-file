package com.xtpeach.tiny.file.enums;

import java.util.stream.Stream;

/**
 * onlyOffice status
 */
public enum OnlyOfficeCallbackStatusEnum {

    NOT_FOUND(0),
    BEING_EDITED(1),
    READY_SAVING(2),
    SAVING_ERROR(3),
    NO_CHANGES(4),
    SAVED(6),
    FORCE_SAVING_ERROR(7);

    int value;

    OnlyOfficeCallbackStatusEnum(int value) {
        this.value = value;
    }

    public static OnlyOfficeCallbackStatusEnum ofValue(int value) {
        return Stream.of(values()).filter(type -> type.getValue() == value).findFirst().orElse(NOT_FOUND);
    }

    public int getValue() {
        return value;
    }
}
