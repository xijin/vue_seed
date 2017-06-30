/**
 *
 * 账号管理-账号列表
 * 
 * 20170630
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var util = require('../../util');
    var result = {
        status: 200,
        data: []
    };

    var apps = [];
    var appNames = ['天眼系统', '师资系统', 'ehr系统'];
    var roles = ['经理', '管理员', '专员'];

    for (var i = 0; i < 3; i++) {
        var currentApp = {
            id: i,
            name: appNames[i],
            roles: [
                {
                    tag: 'yunying_tianyan_jingli',
                    name: '经理',
                    hasPermissions: util.getPermissions()
                },
                {
                    tag: 'yunying_tianyan_admin',
                    name: '管理员',
                    hasPermissions: util.getPermissions()
                },
                {
                    tag: 'yunying_tianyan_zhanyuan',
                    name: '专员',
                    hasPermissions: util.getPermissions()
                }
            ]
        };

        apps.push(currentApp);

    }

    result.data = apps;

    return result;
}