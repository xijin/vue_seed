/**
 *
 * 权限管理-日志列表
 * 
 * 20170703
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
            "name": "createTime",
            "display": "操作时间",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "operationName",
            "display": "操作人",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "operationTagName",
            "display": "操作对象",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        },
        {
            "name": "comment",
            "display": "操作说明",
            "type": "transEmpty",
            "dealTemplate": null,
            "width": null,
            "typeEnum": ""
        }
    ];
    for (var i = 0; i < Math.random() * 5; i ++) {
        var cell = {
            "id": 'xxx',// ID
            "appId": 6, // 业务系统
            "appName": "天眼系统", // 职位
            "createTime": new Date().getTime(),
            "operationId": 3132111,
            operationName: "周祖君",
            operationTagName: "账号管理",
            operationTag: '操作对象tag',
            "comment": "备注说明" // 状态
        };
        result.data.data.push(cell);
    }
    
    return result;
}