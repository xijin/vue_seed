/**
 *
 * 账号管理-账号列表
 * 
 * 20170628
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var result = {
        status: 200,
        data: {
            data: [],
            columnDefs: [],
            pageDto: {
                count: 30,
                pageSize: 10,
                pageNum: 1
            }
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
            "display": "角色",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "createTime",
            "display": "创建时间",
            "type": "dateTimeTrans",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "status",
            "display": "状态",
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
            "name": "天眼普通用户", // 角色
            "createTime": 16787889999, // 帐号开通时间
            "status": 0 // 状态
        };
        result.data.data.push(cell);
    }
    
    return result;
}