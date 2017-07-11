
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
    // 获取角色详细信息
    getRoleDetail: function (params) {
        var params = params || {};
        return ajaxService.send('/GET/role/info.json', {data: params}); 
    },
    // 停用角色
    stopRole: function (params) {
        var params = params || {};
        return ajaxService.send('/MOD/role/stop.json', {data: params}); 
    },
    // 添加或者编辑角色
    updateRole: function (params) {
        var params = params || {};
        return ajaxService.send('/MOD/role/info.json', {data: params}); 
    }
}