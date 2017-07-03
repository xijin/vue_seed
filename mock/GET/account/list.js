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
            "name": "appId",
            "display": "业务系统",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "title",
            "display": "职位",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "role",
            "display": "角色",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "username",
            "display": "帐号",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "displayName",
            "display": "姓名",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "manager",
            "display": "汇报上级",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "createTime",
            "display": "帐号开通时间",
            "type": "dateTimeTrans",
            "dealTemplate": null,
            "width": '120',
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
            "title": "产品经理", // 职位
            "role": "天眼普通用户", // 角色
            "username": "dudu", // 帐号
            "displayName": "李阳", // 姓名
            "manager": "xxx", // 汇报上级
            "createTime": 16787889999, // 帐号开通时间
            "status": 0 // 状态
        };
        result.data.data.push(cell);
    }
    
    return result;
}