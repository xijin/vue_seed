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
        openRoleUid: "xxx",
        parentAccountId: "xxx",
        parentAccountRoleId: "xxx",
        parentOpenRoleUid: "xxx",
        createTime: new Date().getTime(),
        hasPermissions: util.getPermissions()
    };

    result.data = {
        id: 'xxx',// ID
        appId: 6, // 业务系统
        title: "产品经理", // 职位
        department: "xxx", // ehr岗位信息
        username: "dudu", // 帐号
        displayName: "李阳", // 姓名
        manager: "xxx", // 汇报上级
        createTime: new Date().getTime(), // 帐号开通时间
        status: 0, // 状态
        currentRole: currentRole
    }

    return result;
}