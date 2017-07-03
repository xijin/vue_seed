
import ajaxService from "@/common/utils/ajaxService";

export default {
    /**
     * 权限管理-权限列表
     * @param  {[type]} params [description]
     * @return {[type]}        [description]
     */
    list: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/permission/list.json', {data: params});
    },
    // 获取权限详细信息
    getPermissionDetail: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/permission/info.json', {data: params}); 
    },
    // 停用权限
    stopPermission: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/permission/stop.json', {data: params}); 
    }
}