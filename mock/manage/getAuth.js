exports.index = function () {
    var util = require('../util');
    return {
        "status": 200,
        "data": {
            "id": 7,
            "name": "zhaodandan",
            "displayName": "赵丹丹",
            "mobile": "18519196020",
            "department": "百家互联-总部-基础平台部-产品测试",
            "manager": "成丽娟", 
            "company": "百家互联-总部",
            "type": 0,
            "managerId": 27,
            "title": "测试工程师",
            "mail": null,
            "status": 0,
            "allowedApps": null,
            "hasRoles": [
                {
                    "id": 345,
                    "name": "天眼专员",
                    "createtime": 1439522950000,
                    "type": 0,
                    "nickName": "",
                    "appId": 6,
                    "tag": "yunying_tianyan_zhuanyuan",
                    "parentAccountId": 0,
                    "parentAccountRoleId": 0,
                    "updated": 0,
                    "status": 0,
                    "openRoleUid": 1477,
                    "parentOpenRoleUid": 0,
                    "hasPermissions": util.getPermissions()
                },
                {
                    "id": 403,
                    "name": "天眼普通用户",
                    "createtime": 1439522950000,
                    "type": 0,
                    "nickName": "",
                    "appId": 6,
                    "tag": "yunying_tianyan_user",
                    "parentAccountId": 0,
                    "parentAccountRoleId": 0,
                    "updated": 0,
                    "status": 0,
                    "openRoleUid": 1491,
                    "parentOpenRoleUid": 0,
                    "hasPermissions": util.getPermissions()
                },
                {
                    "id": 428,
                    "name": "天眼查询专员",
                    "createtime": 1497249608000,
                    "type": 0,
                    "nickName": "",
                    "appId": 6,
                    "tag": "yunying_tianyan_query_zhuanyuan",
                    "parentAccountId": 0,
                    "parentAccountRoleId": 0,
                    "updated": 0,
                    "status": 0,
                    "openRoleUid": 7278,
                    "parentOpenRoleUid": 0,
                    "hasPermissions": util.getPermissions()
                },
                {
                    "id": 433,
                    "name": "天眼管理员",
                    "createtime": 1497249608000,
                    "type": 0,
                    "nickName": "",
                    "appId": 6,
                    "tag": "yunying_tianyan_admin",
                    "parentAccountId": 0,
                    "parentAccountRoleId": 0,
                    "updated": 0,
                    "status": 0,
                    "openRoleUid": 7283,
                    "parentOpenRoleUid": 0,
                    "hasPermissions":util.getPermissions()
                }
            ],
            "mailGroups": null,
            "currentRole": {
                "id": 345,
                "name": "天眼专员",
                "createtime": 1439522950000,
                "type": 0,
                "nickName": "",
                "appId": 6,
                "tag": "yunying_tianyan_zhuanyuan",
                "parentAccountId": 0,
                "parentAccountRoleId": 0,
                "updated": 0,
                "status": 0,
                "openRoleUid": 1477,
                "parentOpenRoleUid": 0,
                "hasPermissions": util.getPermissions(),
                "loginAccount": null
            }
        },
        "error": null,
        "pageDto": null
    };
    return  {
        status: 200,
        data: []
    };
}