
import ajaxService from "@/common/utils/ajaxService";

export default {
    /**
     * 角色管理-角色列表
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    list: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/role/list.json', {data: params});
    },
    // 获取账户列表角色关系
    getSelectInfo: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/Account/appInfo.json', {data: params});
   
    },
    // 获取角色详细信息
    getRoleDetail: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/role/info.json', {data: params}); 
    },
    // 停用角色
    stopRole: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/role/stop.json', {data: params}); 
    }
}