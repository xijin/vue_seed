/**
 *
 * 权限管理-账号列表
 * 
 * 20170628
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var result = {
        status: 200,
        data: {
            data: [],
            columnDefs: []
        },
        pageDto: {
            count: 30,
            pageSize: 10,
            pageNum: 1
        }
    };
    result.data.columnDefs =  [            //标题列信息
        {
            "name": "id",
            "display": "ID",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "appName",
            "display": "业务系统",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "name",
            "display": "权限名称",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "tag",
            "display": "tag",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "comment",
            "display": "备注",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "operate",
            "display": "操作",
            "type": "numSplit",
            "dealTemplate": "canOperate",
            "width": 250,
            "typeEnum": ""
        },
    ];
    for (var i = 0; i < Math.random() * 5; i ++) {
        var cell = {
            "id": 'xxx',// ID
            "appId": 6, // 业务系统
            "appName": "天眼系统", // 职位
            "tag": "yunying_tianyan_query_", // 角色
            "name": "查询权限", // 帐号
            "comment": 0 // 状态
        };
        result.data.data.push(cell);
    }
    
    return result;
}