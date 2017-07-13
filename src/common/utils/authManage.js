import commonConfig from '@/common/config/common.js';

var MODULE_MAP = commonConfig.MODULE_MAP;

export default {
    showAccount: function (userInfo) {
        return hasPermission(MODULE_MAP.account, userInfo.permission);
    },
    showRole: function (userInfo) {
        return hasPermission(MODULE_MAP.role, userInfo.permission);
    },
    showPermission: function (userInfo) {
        return hasPermission(MODULE_MAP.permission, userInfo.permission);
    },
    showLog: function (userInfo) {
        return hasPermission(MODULE_MAP.log, userInfo.permission);
    }
}

function hasPermission(tag, permission) {
    var flag = false;

    (permission || []).filter(function (val) {
        if (val.tag === tag) {
            flag = true;
        }
    });

    return flag; 
}