export default {

    getSuggestionValue: function (result) {
        if (!result) {
            return ;
        }
        return ''
            + result.displayName 
            + ',部门：' 
            + result.department 
            + result.description;
    },
    /**
    * 获取suggestion选择用户的信息
     * @param  {Object} selectedObj 用户信息
     * @return {[type]}             [description]
     */
    
    getSuggestionUserInfo: function(selectedObj) {
        var show = '';
        var displayName = selectedObj.displayName; // 姓名
        var currentRole = selectedObj.currentRole || {};
        var nickName = currentRole.nickName; // 职位
        var name = currentRole.name; // 角色
        show = displayName + ',角色:' + name + ',职位:' + nickName;
        return show;
    }
}