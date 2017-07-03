/**
 * @file mock數據的工具
 * @author zhanwentao@baijiahulian.com
 */
module.exports = {
    /**
     * 返回0到n之间的随机数
     * @param {number} n 随机数的上限
     * @returns {number} 随机数
     */
    getNum: function (n) {
        var num = Math.floor(Math.random() * 10);
        return num % (n + 1);
    },
    /**
     * 生成tag
     * @param {string} param.type
     * @param {string} param.systemType
     */
    createRole: function (param) {
        var type;
        var systemType;
        if (param) {
            type = param.type;
            systemType = param.systemType;
        }

        var allType = ['zongjian', 'jingli', 'zhuguan', 'zhuanyuan'];
        var allSystemType = ['fengongsitixi', 'kefu', 'jigou', 'gaoxiao', 'jigoukefu'];
        var typeName = {
            zongjian: '总监',
            jingli: '经理',
            zhuguan: '主管',
            zhuanyuan: '专员'
        };
        var systemTypeName = {
            fengongsi: '分公司',
            fengongsitixi: '分公司体系',
            kefu: '客服',
            kefutixi: '客服体系',
            qudaotixi: '渠道体系',
            jigou: '机构',
            gaoxiao: '高校',
            jigoukefu: '机构客服'
        };
        if (typeof type === 'undefined') {
            type = allType[this.getNum(3)];
        }
        if (typeof systemType === 'undefined') {
            systemType = allSystemType[this.getNum(7)];
        }
        return {
            tag: 'yunying_shizi_normal_' + type + '_' + systemType,
            name: systemTypeName[systemType] + typeName[type]
        };
    },
    appendPageDto: function (data) {
        data.pageDto = {
            count: 10,
            pageNum: 1,
            pageSize: 20,
            sort: null
        };
    },
    getPermissions: function () {
        return [
            {
                "id": 1,
                "name": '账号管理',
                "tag": "yunying_usercenter_p_accountManage",
                // 0是默认，1是非默认
                comment: 'xxxx'
            },
            {
                "id": 2,
                "name": '角色管理',
                "tag": "yunying_usercenter_p_roleManage",
                // 0是默认，1是非默认
                comment: 'xxxx'
            },
            {
                "id": 3,
                "name": '权限管理',
                "tag": "yunying_usercenter_p_permissionManage",
                // 0是默认，1是非默认
                comment: 'xxxx'
            },
            {
                "id": 4,
                "name": '操作日志',
                "tag": "yunying_usercenter_p_logEvent",
                // 0是默认，1是非默认
                comment: 'xxxx'
            },
            {
                "id": 5,
                "name": '业务系统',
                "tag": "yunying_usercenter_p_app",
                // 0是默认，1是非默认
                comment: 'xxxx'
            }
        ];
    }
}