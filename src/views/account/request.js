
import ajaxService from "@/common/utils/ajaxService";

export default {
    /**
     * 账号管理-账号列表
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    list: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/account/list.json', {data: params});
    },
    // 获取账户详细信息
    getAccountDetail: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/account/info.json', {data: params}); 
    },
    // 停用账号
    stopAccount: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/account/stop.json', {data: params}); 
    }
}