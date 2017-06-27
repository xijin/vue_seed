/**
 * @file  用户登录信息
 * @author zhanwentao(zhanwentao8878@gmail.com) 
 */


export default {

    install (Vue) {
        /**
         * 登录信息
         * @param  {[type]} data [description]
         * @return {[type]}      [description]
         */
        Vue.prototype.transferUserInfo = function (data) {
            var result;
            if (data.accountDto) {
                result = data.accountDto;
            } else {
                result = data;
            }
            result.originType = data.type;
            var curRole = data.currentRole || (data.accountDto && data.accountDto.currentRole);
            result.permission = curRole.hasPermissions;
            result.curRole = curRole;
            result.loginAccount = data.loginAccount;
            result.openRoleUid = curRole.openRoleUid;
            Vue.prototype.userInfo = result;
        }
    }
}