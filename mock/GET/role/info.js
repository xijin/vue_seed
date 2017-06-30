/**
 *
 * 账号管理-账号详情
 * 
 * 20170630
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {

    var util = require('../../util');
    var result = {
        status: 200,
        data: {}
    };

    var currentRole = {
        id: "xxx",
        name: "天眼普通用户",
        appId: 6,
        tag: "yunying_tianyan_jingli",
        status: 0,
        hasPermissions: util.getPermissions()
    };

    result.data = currentRole;

    return result;
}