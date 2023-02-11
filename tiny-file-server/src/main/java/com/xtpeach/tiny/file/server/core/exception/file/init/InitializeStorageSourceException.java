package com.xtpeach.tiny.file.server.core.exception.file.init;

import com.xtpeach.tiny.file.server.core.exception.StorageSourceException;
import com.xtpeach.tiny.file.server.core.util.CodeMsg;

/**
 * 存储源初始化异常
 *
 * @author xtpeach
 */
public class InitializeStorageSourceException extends StorageSourceException {
    
    public InitializeStorageSourceException(CodeMsg codeMsg, Integer storageId, String message) {
        super(codeMsg, storageId, message);
    }
    
    public InitializeStorageSourceException(CodeMsg codeMsg, Integer storageId, String message, Throwable cause) {
        super(codeMsg, storageId, message, cause);
    }
    
}