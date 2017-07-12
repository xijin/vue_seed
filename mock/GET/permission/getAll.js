/**
 *
 * 权限管理-获取某运营系统所有权限
 * 
 * 20170630
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var util = require('../../util');
    var result = {
        status: 200,
        data: {
            list: util.getPermissions(),
            appName: '天眼系统'
        }
    };

    return result;
}