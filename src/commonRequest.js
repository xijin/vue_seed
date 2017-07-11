import ajaxService from "./common/utils/ajaxService"


export default {
    loginIn: function (params) {
        return ajaxService.send('/ac/getAuth.json', {data: params});
    },
    getSelectInfo: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/account/appInfo.json', {data: params});
    },
    // 搜索账号，自动补全
    queryAccounts: function (params) {
        var params = params || {};
        return ajaxService.send('/ac/queryAccounts.json', {data: params});
    },
    // 获取上级账号
    getSupAccounts: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/account/getSupAccounts.json', {data: params});
    }
    
}