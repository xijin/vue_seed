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


    result.data = {
        id: 'xxx',// ID
        appId: 6, // 业务系统id
        appNam: "查询", // 业务系统
        name: "dudu", // 权限名称
        tag: "yunying_tianyan_query_", // tag
        comment: "我是500字备注", // 状态

    }

    return result;
}