/**
 * @file mock數據的工具
 * @author yanlingling@baijiahulian.com
 */
module.exports = {
    /**
     * 获取事业部权限
     */
    getBusinessUnit: function () {
        return {
                bizUnits: [
                    {
                        id: 1,
                        name: '跟谁学',
                        checked: Math.random() > 0.5,
                        changeable: Math.random() > 0.5,
                        maxLimited: true,
                        minLimited:  true,
                        tag: 'genshuixue'
                    },
                    {
                        id: 2,
                        name: '商学院',
                        checked: Math.random() > 0.5,
                        changeable: Math.random() > 0.5,
                        maxLimited: true,
                        minLimited:  true,
                        tag: 'shangxueyuan'
                    },
                    {
                        id: 3,
                        name: '天校',
                        checked: Math.random() > 0.5,
                        changeable: Math.random() > 0.5,
                        maxLimited: true,
                        minLimited:  true,
                        tag: 'tianxiao'
                    },
                    {
                        id: 4,
                        name: '平台',
                        checked: Math.random() > 0.5,
                        changeable: Math.random() > 0.5,
                        maxLimited: true,
                        minLimited:  true,
                        tag: 'pingtai'
                    },
                    {
                        id: 5,
                        name: '百家云',
                        checked: Math.random() > 0.5,
                        changeable: Math.random() > 0.5,
                        maxLimited: true,
                        minLimited:  true,
                        tag: 'baijiaCloud'
                    }
                ],
                maxCount: 3,
                minCount: 1
            };
    },
    /**
     * 获取地域单元
     *
     * @param {int} level 新建地域 
     * @return {[type]} [description]
     */
    getRegionCell: function (level) {
        var unit = ['国', '省', '市', '区'];
        return {
            id: Math.ceil(Math.random() * 1000000),
            name: 'XXX' + unit[level] + ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'].slice(1,  Math.ceil(Math.random() * 10)).join(),
            level: level,
            subs: []
        }
    },
    /**
     * 返回0到n之间的随机数
     * @param {number} n 随机数的上限
     * @returns {number} 随机数
     */
    getNum: function (n) {
        var num = Math.floor(Math.random() * 10);
        return num % (n + 1);
    },
    getAccountDto: function () {
        return {"productLineName":"分公司","productLineId":1,"permissionTags":["yunying_shizi_p_statistics_revenue_umengshequn_","yunying_shizi_p_monitor_","yunying_shizi_p_org_profile_","yunying_shizi_p_statistics_revenue_baijiabao_","yunying_shizi_p_baijia_crm_","yunying_shizi_p_crm_visitlist_","yunying_shizi_p_org_allotexpand_","yunying_shizi_p_statistics_supervise_","yunying_shizi_p_statistics_overview_","yunying_shizi_p_crm_clue_mine_","yunying_shizi_p_statistics_revenue_ovip_","yunying_shizi_p_org_desert_","yunying_shizi_p_crm_export_","yunying_shizi_p_statistics_revenue_cps_","yunying_shizi_p_teacher_desert_","yunying_shizi_p_statistics_revenue_onlinepromotion_","yunying_shizi_p_opportunity_kfdispatch_","yunying_shizi_p_tool_invitecode_","yunying_shizi_p_statistics_revenue_offlineactivity_","yunying_shizi_p_statistics_revenue_software_customised_","yunying_shizi_p_statistics_revenue_quickreceipt_","yunying_shizi_p_crm_customer_privateadd_","yunying_shizi_p_statistics_revenue_ad_","yunying_shizi_p_crm_customer_release_","yunying_shizi_p_statistics_revenue_profit_doubling_","yunying_shizi_p_statistics_revenue_offlinecps_","yunying_shizi_p_statistics_revenue_baijiacloud_","yunying_shizi_p_notify_","yunying_shizi_p_crm_customer_deliver_","yunying_shizi_p_statistics_revenue_strategic_system_","yunying_shizi_p_tool_union_subaccount_","yunying_shizi_p_tool_shorturl_","yunying_shizi_p_baijia_statistics_","yunying_shizi_p_teacher_profile_","yunying_shizi_p_crm_customer_","yunying_shizi_p_opportunity_tvip_","yunying_shizi_p_crm_customer_allocate_","yunying_shizi_p_statistics_revenue_shangxueyuan_","yunying_shizi_p_statistics_revenue_tvip_","yunying_shizi_p_statistics_revenue_tianxiao_","yunying_shizi_p_tool_exportonce_","yunying_shizi_p_statistics_revenue_distributioncps_","yunying_shizi_p_task_","yunying_shizi_p_tool_query_","yunying_shizi_p_baijia_shoukuan_","yunying_shizi_p_org_resuse_","yunying_shizi_p_course_","yunying_shizi_p_teacher_allotexpand_","yunying_shizi_p_crm_statistics_","yunying_shizi_p_crm_customer_abandon_","yunying_shizi_p_statistics_revenue_umeng_","yunying_shizi_p_baijia_order_","yunying_shizi_p_statistics_revenue_management_","yunying_shizi_p_statistics_revenue_vip_","yunying_shizi_p_crm_followUp_","yunying_shizi_p_teacher_resuse_","yunying_shizi_p_statistics_revenue_service_","yunying_shizi_p_crm_customer_distribute_","yunying_shizi_p_org_","yunying_shizi_p_teacher_","yunying_shizi_p_crm_customer_surrender_","yunying_shizi_p_statistics_subject_","yunying_shizi_p_statistics_revenue_all_","yunying_shizi_p_teacher_add_"],"id":5666,"currentRole":{"id":355,"name":"分公司拓展专员","createtime":1474286682000,"type":0,"nickName":"销售专员","appId":1,"tag":"yunying_shizi_normal_zhuanyuan_fengongsitixi_tuozhan_","parentAccountId":1156,"parentAccountRoleId":335,"updated":0,"status":1,"openRoleUid":6741,"parentOpenRoleUid":6738,"hasPermissions":[{"id":32,"name":"查询","tag":"yunying_shizi_p_tool_query_","comment":"工具箱-查询","type":null},{"id":33,"name":"邀请码","tag":"yunying_shizi_p_tool_invitecode_","comment":"工具箱-邀请码","type":null},{"id":34,"name":"一键转移","tag":"yunying_shizi_p_tool_exportonce_","comment":"工具箱-一键转移","type":null},{"id":35,"name":"生成短链接","tag":"yunying_shizi_p_tool_shorturl_","comment":"工具箱-生成短链接","type":null},{"id":42,"name":"业绩概况","tag":"yunying_shizi_p_statistics_overview_","comment":"统计-业绩概况","type":null},{"id":43,"name":"科目统计","tag":"yunying_shizi_p_statistics_subject_","comment":"统计-科目统计","type":null},{"id":46,"name":"机构列表","tag":"yunying_shizi_p_org_","comment":"机构-机构列表","type":null},{"id":47,"name":"老师列表","tag":"yunying_shizi_p_teacher_","comment":"老师-老师列表","type":null},{"id":50,"name":"监控","tag":"yunying_shizi_p_monitor_","comment":"监控","type":null},{"id":51,"name":"课程","tag":"yunying_shizi_p_course_","comment":"课程","type":null},{"id":53,"name":"数据监察","tag":"yunying_shizi_p_statistics_supervise_","comment":"统计-数据监察","type":null},{"id":54,"name":"通知","tag":"yunying_shizi_p_notify_","comment":"通知","type":null},{"id":56,"name":"我的线索","tag":"yunying_shizi_p_crm_clue_mine_","comment":"销售-我的线索","type":null},{"id":60,"name":"拜访列表","tag":"yunying_shizi_p_crm_visitlist_","comment":"销售-拜访列表","type":null},{"id":61,"name":"数据统计","tag":"yunying_shizi_p_crm_statistics_","comment":"销售-数据统计","type":null},{"id":62,"name":"添加老师","tag":"yunying_shizi_p_teacher_add_","comment":"老师-添加老师","type":null},{"id":64,"name":"分配拓展","tag":"yunying_shizi_p_teacher_allotexpand_","comment":"老师-分配拓展","type":null},{"id":68,"name":"弃用","tag":"yunying_shizi_p_teacher_desert_","comment":"老师-弃用","type":null},{"id":69,"name":"复原","tag":"yunying_shizi_p_teacher_resuse_","comment":"老师-复原","type":null},{"id":71,"name":"分配拓展","tag":"yunying_shizi_p_org_allotexpand_","comment":"机构-分配拓展","type":null},{"id":75,"name":"弃用","tag":"yunying_shizi_p_org_desert_","comment":"机构-弃用","type":null},{"id":76,"name":"复原","tag":"yunying_shizi_p_org_resuse_","comment":"机构-复原","type":null},{"id":81,"name":"联盟子账号","tag":"yunying_shizi_p_tool_union_subaccount_","comment":"工具箱-联盟子账号","type":null},{"id":83,"name":"任务","tag":"yunying_shizi_p_task_","comment":"任务","type":null},{"id":85,"name":"老师会员商机","tag":"yunying_shizi_p_opportunity_tvip_","comment":"商机-老师会员商机","type":null},{"id":87,"name":"客服推荐商机","tag":"yunying_shizi_p_opportunity_kfdispatch_","comment":"商机-客服推荐商机","type":null},{"id":89,"name":"总收入","tag":"yunying_shizi_p_statistics_revenue_all_","comment":"统计-收入统计-总收入","type":null},{"id":90,"name":"老师会员","tag":"yunying_shizi_p_statistics_revenue_tvip_","comment":"统计-收入统计-老师会员","type":null},{"id":91,"name":"机构会员","tag":"yunying_shizi_p_statistics_revenue_ovip_","comment":"统计-收入统计-机构会员","type":null},{"id":92,"name":"管理费","tag":"yunying_shizi_p_statistics_revenue_management_","comment":"统计-收入统计-管理费","type":null},{"id":93,"name":"广告费","tag":"yunying_shizi_p_statistics_revenue_ad_","comment":"统计-收入统计-广告费","type":null},{"id":94,"name":"线下活动","tag":"yunying_shizi_p_statistics_revenue_offlineactivity_","comment":"统计-收入统计-线下活动","type":null},{"id":95,"name":"线下增值服务","tag":"yunying_shizi_p_statistics_revenue_service_","comment":"统计-收入统计-线下增值服务","type":null},{"id":96,"name":"百加宝","tag":"yunying_shizi_p_statistics_revenue_baijiabao_","comment":"统计-收入统计-百加宝","type":null},{"id":97,"name":"天校","tag":"yunying_shizi_p_statistics_revenue_tianxiao_","comment":"统计-收入统计-天校","type":null},{"id":98,"name":"商学院","tag":"yunying_shizi_p_statistics_revenue_shangxueyuan_","comment":"统计-收入统计-商学院","type":null},{"id":99,"name":"线上CPS","tag":"yunying_shizi_p_statistics_revenue_cps_","comment":"统计-收入统计-线上CPS","type":null},{"id":102,"name":"编辑资料","tag":"yunying_shizi_p_teacher_profile_","comment":"老师-编辑资料","type":null},{"id":103,"name":"进入机构","tag":"yunying_shizi_p_org_profile_","comment":"机构-进入机构","type":null},{"id":105,"name":"线下CPS","tag":"yunying_shizi_p_statistics_revenue_offlinecps_","comment":"统计-收入统计-线下CPS","type":null},{"id":110,"name":"U盟分销","tag":"yunying_shizi_p_statistics_revenue_umeng_","comment":"统计-收入统计-U盟分销","type":null},{"id":111,"name":"线上推广服务","tag":"yunying_shizi_p_statistics_revenue_onlinepromotion_","comment":"统计-收入统计-线上推广服务","type":null},{"id":112,"name":"快速收款","tag":"yunying_shizi_p_statistics_revenue_quickreceipt_","comment":"统计-收入统计-快速收款","type":null},{"id":114,"name":"分销CPS","tag":"yunying_shizi_p_statistics_revenue_distributioncps_","comment":"统计-收入统计-分销CPS","type":null},{"id":118,"name":"百家云","tag":"yunying_shizi_p_statistics_revenue_baijiacloud_","comment":"统计-收入统计-百家云","type":null},{"id":120,"name":"VIP会员","tag":"yunying_shizi_p_statistics_revenue_vip_","comment":"统计-收入统计-VIP会员","type":null},{"id":131,"name":"软件定制","tag":"yunying_shizi_p_statistics_revenue_software_customised_","comment":"统计-收入统计-软件定制","type":null},{"id":132,"name":"客户列表","tag":"yunying_shizi_p_crm_customer_","comment":"CRM PC-客户列表","type":null},{"id":141,"name":"跟进列表","tag":"yunying_shizi_p_crm_followUp_","comment":"CRM PC-跟进列表","type":null},{"id":142,"name":"数据导出","tag":"yunying_shizi_p_crm_export_","comment":"CRM PC-数据导出","type":null},{"id":143,"name":"下发","tag":"yunying_shizi_p_crm_customer_distribute_","comment":"CRM PC-客户列表-下发客户","type":null},{"id":144,"name":"分配","tag":"yunying_shizi_p_crm_customer_allocate_","comment":"CRM PC-客户列表-分配客户","type":null},{"id":145,"name":"转交","tag":"yunying_shizi_p_crm_customer_deliver_","comment":"CRM PC-客户列表-转交客户","type":null},{"id":146,"name":"开放","tag":"yunying_shizi_p_crm_customer_release_","comment":"CRM PC-客户列表-开放客户","type":null},{"id":147,"name":"废弃","tag":"yunying_shizi_p_crm_customer_abandon_","comment":"CRM PC-客户列表-废弃客户","type":null},{"id":148,"name":"退回","tag":"yunying_shizi_p_crm_customer_surrender_","comment":"CRM PC-客户列表-退回客户","type":null},{"id":153,"name":"百家CRM入口","tag":"yunying_shizi_p_baijia_crm_","comment":"百家CRM-CRM","type":null},{"id":154,"name":"百家统计入口","tag":"yunying_shizi_p_baijia_statistics_","comment":"百家CRM-统计","type":null},{"id":155,"name":"百家收款入口","tag":"yunying_shizi_p_baijia_shoukuan_","comment":"百家CRM-收款","type":null},{"id":156,"name":"百家订单入口","tag":"yunying_shizi_p_baijia_order_","comment":"百家CRM-订单","type":null},{"id":158,"name":"利润倍增","tag":"yunying_shizi_p_statistics_revenue_profit_doubling_","comment":"统计-收入统计-利润倍增","type":null},{"id":159,"name":"战略系统","tag":"yunying_shizi_p_statistics_revenue_strategic_system_","comment":"统计-收入统计-战略系统","type":null},{"id":161,"name":"U盟社群","tag":"yunying_shizi_p_statistics_revenue_umengshequn_","comment":"统计-收入统计-U盟社群","type":null},{"id":166,"name":"领取","tag":"yunying_shizi_p_crm_customer_privateadd_","comment":"CRM PC-客户列表-领取客户","type":null}]},"loginAccount":null,"mobile":"18054289421","department":"分公司-深圳分公司-平台事业部","hasRoles":[{"id":355,"name":"分公司拓展专员","createtime":1474286682000,"type":0,"nickName":"销售专员","appId":1,"tag":"yunying_shizi_normal_zhuanyuan_fengongsitixi_tuozhan_","parentAccountId":1156,"parentAccountRoleId":335,"updated":0,"status":0,"openRoleUid":6741,"parentOpenRoleUid":6738,"hasPermissions":[{"id":32,"name":"查询","tag":"yunying_shizi_p_tool_query_","comment":"工具箱-查询","type":null},{"id":33,"name":"邀请码","tag":"yunying_shizi_p_tool_invitecode_","comment":"工具箱-邀请码","type":null},{"id":34,"name":"一键转移","tag":"yunying_shizi_p_tool_exportonce_","comment":"工具箱-一键转移","type":null},{"id":35,"name":"生成短链接","tag":"yunying_shizi_p_tool_shorturl_","comment":"工具箱-生成短链接","type":null},{"id":42,"name":"业绩概况","tag":"yunying_shizi_p_statistics_overview_","comment":"统计-业绩概况","type":null},{"id":43,"name":"科目统计","tag":"yunying_shizi_p_statistics_subject_","comment":"统计-科目统计","type":null},{"id":46,"name":"机构列表","tag":"yunying_shizi_p_org_","comment":"机构-机构列表","type":null},{"id":47,"name":"老师列表","tag":"yunying_shizi_p_teacher_","comment":"老师-老师列表","type":null},{"id":50,"name":"监控","tag":"yunying_shizi_p_monitor_","comment":"监控","type":null},{"id":51,"name":"课程","tag":"yunying_shizi_p_course_","comment":"课程","type":null},{"id":53,"name":"数据监察","tag":"yunying_shizi_p_statistics_supervise_","comment":"统计-数据监察","type":null},{"id":54,"name":"通知","tag":"yunying_shizi_p_notify_","comment":"通知","type":null},{"id":56,"name":"我的线索","tag":"yunying_shizi_p_crm_clue_mine_","comment":"销售-我的线索","type":null},{"id":60,"name":"拜访列表","tag":"yunying_shizi_p_crm_visitlist_","comment":"销售-拜访列表","type":null},{"id":61,"name":"数据统计","tag":"yunying_shizi_p_crm_statistics_","comment":"销售-数据统计","type":null},{"id":62,"name":"添加老师","tag":"yunying_shizi_p_teacher_add_","comment":"老师-添加老师","type":null},{"id":64,"name":"分配拓展","tag":"yunying_shizi_p_teacher_allotexpand_","comment":"老师-分配拓展","type":null},{"id":68,"name":"弃用","tag":"yunying_shizi_p_teacher_desert_","comment":"老师-弃用","type":null},{"id":69,"name":"复原","tag":"yunying_shizi_p_teacher_resuse_","comment":"老师-复原","type":null},{"id":71,"name":"分配拓展","tag":"yunying_shizi_p_org_allotexpand_","comment":"机构-分配拓展","type":null},{"id":75,"name":"弃用","tag":"yunying_shizi_p_org_desert_","comment":"机构-弃用","type":null},{"id":76,"name":"复原","tag":"yunying_shizi_p_org_resuse_","comment":"机构-复原","type":null},{"id":81,"name":"联盟子账号","tag":"yunying_shizi_p_tool_union_subaccount_","comment":"工具箱-联盟子账号","type":null},{"id":83,"name":"任务","tag":"yunying_shizi_p_task_","comment":"任务","type":null},{"id":85,"name":"老师会员商机","tag":"yunying_shizi_p_opportunity_tvip_","comment":"商机-老师会员商机","type":null},{"id":87,"name":"客服推荐商机","tag":"yunying_shizi_p_opportunity_kfdispatch_","comment":"商机-客服推荐商机","type":null},{"id":89,"name":"总收入","tag":"yunying_shizi_p_statistics_revenue_all_","comment":"统计-收入统计-总收入","type":null},{"id":90,"name":"老师会员","tag":"yunying_shizi_p_statistics_revenue_tvip_","comment":"统计-收入统计-老师会员","type":null},{"id":91,"name":"机构会员","tag":"yunying_shizi_p_statistics_revenue_ovip_","comment":"统计-收入统计-机构会员","type":null},{"id":92,"name":"管理费","tag":"yunying_shizi_p_statistics_revenue_management_","comment":"统计-收入统计-管理费","type":null},{"id":93,"name":"广告费","tag":"yunying_shizi_p_statistics_revenue_ad_","comment":"统计-收入统计-广告费","type":null},{"id":94,"name":"线下活动","tag":"yunying_shizi_p_statistics_revenue_offlineactivity_","comment":"统计-收入统计-线下活动","type":null},{"id":95,"name":"线下增值服务","tag":"yunying_shizi_p_statistics_revenue_service_","comment":"统计-收入统计-线下增值服务","type":null},{"id":96,"name":"百加宝","tag":"yunying_shizi_p_statistics_revenue_baijiabao_","comment":"统计-收入统计-百加宝","type":null},{"id":97,"name":"天校","tag":"yunying_shizi_p_statistics_revenue_tianxiao_","comment":"统计-收入统计-天校","type":null},{"id":98,"name":"商学院","tag":"yunying_shizi_p_statistics_revenue_shangxueyuan_","comment":"统计-收入统计-商学院","type":null},{"id":99,"name":"线上CPS","tag":"yunying_shizi_p_statistics_revenue_cps_","comment":"统计-收入统计-线上CPS","type":null},{"id":102,"name":"编辑资料","tag":"yunying_shizi_p_teacher_profile_","comment":"老师-编辑资料","type":null},{"id":103,"name":"进入机构","tag":"yunying_shizi_p_org_profile_","comment":"机构-进入机构","type":null},{"id":105,"name":"线下CPS","tag":"yunying_shizi_p_statistics_revenue_offlinecps_","comment":"统计-收入统计-线下CPS","type":null},{"id":110,"name":"U盟分销","tag":"yunying_shizi_p_statistics_revenue_umeng_","comment":"统计-收入统计-U盟分销","type":null},{"id":111,"name":"线上推广服务","tag":"yunying_shizi_p_statistics_revenue_onlinepromotion_","comment":"统计-收入统计-线上推广服务","type":null},{"id":112,"name":"快速收款","tag":"yunying_shizi_p_statistics_revenue_quickreceipt_","comment":"统计-收入统计-快速收款","type":null},{"id":114,"name":"分销CPS","tag":"yunying_shizi_p_statistics_revenue_distributioncps_","comment":"统计-收入统计-分销CPS","type":null},{"id":118,"name":"百家云","tag":"yunying_shizi_p_statistics_revenue_baijiacloud_","comment":"统计-收入统计-百家云","type":null},{"id":120,"name":"VIP会员","tag":"yunying_shizi_p_statistics_revenue_vip_","comment":"统计-收入统计-VIP会员","type":null},{"id":131,"name":"软件定制","tag":"yunying_shizi_p_statistics_revenue_software_customised_","comment":"统计-收入统计-软件定制","type":null},{"id":132,"name":"客户列表","tag":"yunying_shizi_p_crm_customer_","comment":"CRM PC-客户列表","type":null},{"id":141,"name":"跟进列表","tag":"yunying_shizi_p_crm_followUp_","comment":"CRM PC-跟进列表","type":null},{"id":142,"name":"数据导出","tag":"yunying_shizi_p_crm_export_","comment":"CRM PC-数据导出","type":null},{"id":143,"name":"下发","tag":"yunying_shizi_p_crm_customer_distribute_","comment":"CRM PC-客户列表-下发客户","type":null},{"id":144,"name":"分配","tag":"yunying_shizi_p_crm_customer_allocate_","comment":"CRM PC-客户列表-分配客户","type":null},{"id":145,"name":"转交","tag":"yunying_shizi_p_crm_customer_deliver_","comment":"CRM PC-客户列表-转交客户","type":null},{"id":146,"name":"开放","tag":"yunying_shizi_p_crm_customer_release_","comment":"CRM PC-客户列表-开放客户","type":null},{"id":147,"name":"废弃","tag":"yunying_shizi_p_crm_customer_abandon_","comment":"CRM PC-客户列表-废弃客户","type":null},{"id":148,"name":"退回","tag":"yunying_shizi_p_crm_customer_surrender_","comment":"CRM PC-客户列表-退回客户","type":null},{"id":153,"name":"百家CRM入口","tag":"yunying_shizi_p_baijia_crm_","comment":"百家CRM-CRM","type":null},{"id":154,"name":"百家统计入口","tag":"yunying_shizi_p_baijia_statistics_","comment":"百家CRM-统计","type":null},{"id":155,"name":"百家收款入口","tag":"yunying_shizi_p_baijia_shoukuan_","comment":"百家CRM-收款","type":null},{"id":156,"name":"百家订单入口","tag":"yunying_shizi_p_baijia_order_","comment":"百家CRM-订单","type":null},{"id":158,"name":"利润倍增","tag":"yunying_shizi_p_statistics_revenue_profit_doubling_","comment":"统计-收入统计-利润倍增","type":null},{"id":159,"name":"战略系统","tag":"yunying_shizi_p_statistics_revenue_strategic_system_","comment":"统计-收入统计-战略系统","type":null},{"id":161,"name":"U盟社群","tag":"yunying_shizi_p_statistics_revenue_umengshequn_","comment":"统计-收入统计-U盟社群","type":null},{"id":166,"name":"领取","tag":"yunying_shizi_p_crm_customer_privateadd_","comment":"CRM PC-客户列表-领取客户","type":null}]}],"title":"高级客户经理","mail":null,"avatar":"https://ehr.baijiahulian.com/GET/file/file.json?file=441bd822-5d61-43e1-b891-a1a9642a1187.jpg","managerId":1156,"company":"分公司-深圳分公司","mailGroups":null,"allowedApps":null,"type":0,"manager":"罗双生","displayName":"陆媚","status":0,"name":"lumei"};
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
    /**
     * 生成临时(特殊)账号tag
     * @param {string} param.type
     * @param {string} param.systemType
     */
    getTempRoleTag: function (param) {
        return 'yunying_shizi_temp_zhuanyuan_fengongsitixi_tuozhan_';
    },
    /**
     * 生成管理员账号tag
     * @param {string} param.type
     * @param {string} param.systemType
     */
    getAdminRoleTag: function (param) {
        return 'yunying_shizi_admin';
    },
    /**
     * 生成查看账号tag
     * @param {string} param.type
     * @param {string} param.systemType
     */
    getReadRoleTag: function (param) {
        return 'yunying_shizi_view_';
    },
    getNotifyTypes: function () {
        var types = [];
        for (var i = 1; i < 26; i++) {
            types.push(i);
        }
        return types;
    },
    getPermissionTags: function () {
        var objs = this.getPermissions();
        var result = [];
        objs.forEach(function (obj) {
            result.push(obj.tag);
        });

        return result;
    },
    getPermissions: function () {
        return [
            {
                "id": 1,
                "name": '客户－客户列表',
                "tag": "yunying_shizi_p_crm_customer_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 1,
                "name": "下发",
                "tag": "yunying_shizi_p_crm_customer_distribute_",
                "comment": "客户-下发",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "分配",
                "tag": "yunying_shizi_p_crm_customer_allocate_",
                "comment": "客户-分配",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "转交",
                "tag": "yunying_shizi_p_crm_customer_deliver_",
                "comment": "客户-转交",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "开放",
                "tag": "yunying_shizi_p_crm_customer_release_",
                "comment": "客户-开放",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "放弃",
                "tag": "yunying_shizi_p_crm_customer_abandon_",
                "comment": "客户-放弃",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "退回",
                "tag": "yunying_shizi_p_crm_customer_surrender_",
                "comment": "客户-退回",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "领取",
                "tag": "yunying_shizi_p_crm_customer_privateadd_",
                "comment": "客户-领取",
                "type": Math.random() > 0.5 ? 0 : 1
              },
             {
                "id": 1,
                "name": "删除",
                "tag": "yunying_shizi_p_crm_owntrash_delete_",
                "comment": "个人回收站-删除",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "恢复",
                "tag": "yunying_shizi_p_crm_owntrash_recover_",
                "comment": "个人回收站-恢复",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "删除",
                "tag": "yunying_shizi_p_crm_systrash_delete_",
                "comment": "系统回收站-删除",
                "type": Math.random() > 0.5 ? 0 : 1
              },
              {
                "id": 1,
                "name": "恢复",
                "tag": "yunying_shizi_p_crm_systrash_recover_",
                "comment": "系统回收站-恢复",
                "type": Math.random() > 0.5 ? 0 : 1
              },
               
            {
                "id": 1,
                "name": '客户-跟进列表',
                "tag": "yunying_shizi_p_crm_followUp_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 1,
                "name": '客户-跟进统计',
                "tag": "yunying_shizi_p_crm_followUpStat_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 1,
                "name": '客户-个人回收站',
                "tag": "yunying_shizi_p_crm_owntrash_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 1,
                "name": '客户-系统回收站',
                "tag": "yunying_shizi_p_crm_systrash_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 2,
                "name": '查询',
                "tag": "yunying_shizi_p_tool_query_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 3,
                "name": '邀请码',
                "tag": "yunying_shizi_p_tool_invitecode_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 4,
                "name": '一键转移',
                "tag": "yunying_shizi_p_tool_exportonce_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 5,
                "name": '生成短连接',
                "tag": "yunying_shizi_p_tool_shorturl_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 6,
                "name": '添加特殊账号',
                "tag": "yunying_shizi_p_tool_account_addtemp_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 6,
                "name": '进入机构',
                "tag": "yunying_shizi_p_org_profile_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 7,
                "name": '查看特殊账号',
                "tag": "yunying_shizi_p_tool_account_readtemp_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 8,
                "name": '添加普通账号',
                "tag": "yunying_shizi_p_tool_account_add_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 9,
                "name": '查看普通账号',
                "tag": "yunying_shizi_p_tool_account_read_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 10,
                "name": '添加系统查看账号',
                "tag": "yunying_shizi_p_tool_account_addview_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 11,
                "name": '查看系统查看账号',
                "tag": "yunying_shizi_p_tool_account_readview_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 12,
                "name": '标签管理',
                "tag": "yunying_shizi_p_tool_tag_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 13,
                "name": '地域管理',
                "tag": "yunying_shizi_p_tool_region_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 14,
                "name": '服务时间回填',
                "tag": "yunying_shizi_p_tool_servicetime_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 25,
                "name": '通知',
                "tag": "yunying_shizi_p_notify_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 13,
                "name": '业绩统计',
                "tag": "yunying_shizi_p_statistics_overview_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 14,
                "name": '科目统计',
                "tag": "yunying_shizi_p_statistics_subject_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 15,
                "name": '城市统计',
                "tag": "yunying_shizi_p_statistics_city_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 24,
                "name": '数据监察',
                "tag": "yunying_shizi_p_statistics_supervise_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 16,
                "name": '3810数据导出',
                "tag": "yunying_shizi_p_statistics_exportweike_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 17,
                "name": '代理商数据导出',
                "tag": "yunying_shizi_p_statistics_exportagent_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 17,
                "name": '收入统计',
                "tag": "yunying_shizi_p_statistics_revenue_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 116,
                "name": "全国排名",
                "tag": "yunying_shizi_p_statistics_totalrank_",
                "comment": "统计-全国排名",
                "type": null
            },
            {
                "id": 17,
                "name": '会员统计',
                "tag": "yunying_shizi_p_statistics_vip_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            // {
            //     "id": 19,
            //     "name": '添加老师',
            //     "tag": "yunying_shizi_p_teacher_add_",
            //     // 0是默认，1是非默认
            //     type: Math.random() > 0.5 ? 0 : 1
            // },
            {
                "id": 19,
                "name": '分配运营',
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '分配拓展',
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '退回拓展',
                "tag": "yunying_shizi_p_teacher_returnexpand_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '快捷分配',
                "tag": "yunying_shizi_p_teacher_quickallot_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '转出',
                "tag": "yunying_shizi_p_teacher_transfer_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '弃用',
                "tag": "yunying_shizi_p_teacher_desert_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '复原',
                "tag": "yunying_shizi_p_teacher_resuse_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '分配运营',
                "tag": "yunying_shizi_p_org_allotoperate_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '分配拓展',
                "tag": "yunying_shizi_p_org_allotexpand_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '退回拓展',
                "tag": "yunying_shizi_p_org_returnexpand_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '快捷分配',
                "tag": "yunying_shizi_p_org_quickallot_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '转出',
                "tag": "yunying_shizi_p_org_transfer_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '弃用',
                "tag": "yunying_shizi_p_org_desert_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 19,
                "name": '复原',
                "tag": "yunying_shizi_p_org_resuse_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 20,
                "name": '添加账号',
                "tag": "yunying_shizi_p_sub_add_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 21,
                "name": '深度管理',
                "tag": "yunying_shizi_p_tool_deepmanager_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 21,
                "name": '商机配置',
                "tag": "yunying_shizi_p_tool_opportunity_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 22,
                "name": '监控',
                "tag": "yunying_shizi_p_monitor_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 23,
                "name": '课程',
                "tag": "yunying_shizi_p_course_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 23,
                "name": '商机设置',
                "tag": "yunying_shizi_p_tool_opportunity_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 23,
                "name": '老师会员商机查看',
                "tag": "yunying_shizi_p_opportunity_tvip_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 23,
                "name": '任务',
                "tag": "yunying_shizi_p_task_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 23,
                "name": '客服商机',
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            },
            {
                "id": 23,
                "name": '产品线配置',
                "tag": "yunying_shizi_p_tool_productline_",
                // 0是默认，1是非默认
                type: Math.random() > 0.5 ? 0 : 1
            }
        ];
    },
    getPermissionTree: function () {
        return [
            {
                "id": 1,
                "name": "数据导出",
                "tag": "yunying_shizi_p_statistics_",
                "type": 0,
                subs: [
                    {
                        "id": 1,
                        "name": "业绩概况",
                        "tag": "yunying_shizi_p_statistics_overview_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "科目统计",
                        "tag": "yunying_shizi_p_statistics_subject_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "城市统计",
                        "tag": "yunying_shizi_p_statistics_city_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "收入统计",
                        "tag": "yunying_shizi_p_statistics_revenue_",
                        "type": 0,
                        subs: [
                            {
                                "id": 1,
                                "name": "总收入",
                                "tag": "yunying_shizi_p_statistics_revenue_all_",
                                "type": 0,
                                subs: null
                            },
                            {
                                "id": 2,
                                "name": "老师会员",
                                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                                "type": 0,
                                subs: null
                            },
                            {
                                "id": 3,
                                "name": "机构会员",
                                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                                "type": 0,
                                subs: null
                            },
                            {
                                "id": 4,
                                "name": "管理费用",
                                "tag": "yunying_shizi_p_statistics_revenue_management_",
                                "type": 0,
                                subs: null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "3810数据导出",
                        "tag": "yunying_shizi_p_statistics_exportweike_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "代理商数据导出",
                        "tag": "yunying_shizi_p_statistics_exportagent_",
                        "type": 0,
                        subs: null
                    }
                ]
            },
            {
                "id": 1,
                "name": "老师",
                "tag": "yunying_shizi_p_teacher_",
                "type": 0,
                subs: [
                    {
                        "id": 1,
                        "name": "添加老师",
                        "tag": "yunying_shizi_p_teacher_add_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "分配运营",
                        "tag": "yunying_shizi_p_teacher_allotoperate_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "分配扩展",
                        "tag": "yunying_shizi_p_teacher_allotexpand_",
                        "type": 0,
                        subs: null
                    }
                ]
            }
        ];
    },
    getDefaultExtPermissionTree: function () {
        return [
            {
                "id": 1,
                "name": "数据导出",
                "tag": "yunying_shizi_p_statistics_",
                "type": 0,
                subs: [
                    {
                        "id": 1,
                        "name": "业绩概况",
                        "tag": "yunying_shizi_p_statistics_overview_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "科目统计",
                        "tag": "yunying_shizi_p_statistics_subject_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "城市统计",
                        "tag": "yunying_shizi_p_statistics_city_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "收入统计",
                        "tag": "yunying_shizi_p_statistics_revenue_",
                        "type": 0,
                        subs: [
                            {
                                "id": 1,
                                "name": "总收入",
                                "tag": "yunying_shizi_p_statistics_revenue_all_",
                                "type": 0,
                                subs: null
                            },
                            {
                                "id": 2,
                                "name": "老师会员",
                                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                                "type": 0,
                                subs: null
                            },
                            {
                                "id": 3,
                                "name": "机构会员",
                                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                                "type": 0,
                                subs: null
                            },
                            {
                                "id": 4,
                                "name": "管理费用",
                                "tag": "yunying_shizi_p_statistics_revenue_management_",
                                "type": 0,
                                subs: null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "3810数据导出",
                        "tag": "yunying_shizi_p_statistics_exportweike_",
                        "type": 0,
                        subs: null
                    },
                    {
                        "id": 1,
                        "name": "代理商数据导出",
                        "tag": "yunying_shizi_p_statistics_exportagent_",
                        "type": 0,
                        subs: null
                    }
                ]
            }
        ];
    },
    getExtPermissionTree: function () {
        var i = 0;
        return [
            {
                "extId":3058,
                "manager":{
                "id":34,
                "name":"suwei",
                "displayName":"苏伟1",
                "mobile":"18001208807",
                "department":"百家互联-总部-监审部",
                "manager":"陈向东",
                "company":"百家互联-总部",
                "type":0,
                "managerId":62,
                "title":"助理副总裁",
                "avatar":"https://ehr.baijiahulian.com/GET/file/file.json?file=4d2709a2-03b9-4a12-9e20-be6274a239f2.jpg",
                "allowedApps":[
                {
                "id":1,
                "name":"师资系统",
                "domain":"shizi.ctest.baijiahulian.com",
                "description":null
                },
                {
                "id":6,
                "name":"天眼系统",
                "domain":"tianyan.genshuixue.com",
                "description":null
                }
                ],
                "hasRoles":[
                {
                "id":9,
                "name":"系统管理员",
                "createtime":1422502072000,
                "type":1,
                "nickName":"系统管理员",
                "appId":0,
                "tag":"yunying_shizi_admin",
                "parentAccountId":0,
                "parentAccountRoleId":0,
                "updated":0,
                "status":0,
                "openRoleUid":561,
                "parentOpenRoleUid":0,
                "hasPermissions":[
                {
                "id":32,
                "name":"查询",
                "tag":"yunying_shizi_p_tool_query_",
                "comment":"工具箱-查询",
                "type":null
                },
                {
                "id":35,
                "name":"生成短链接",
                "tag":"yunying_shizi_p_tool_shorturl_",
                "comment":"工具箱-生成短链接",
                "type":null
                },
                {
                "id":36,
                "name":"账号管理-查看特殊账号",
                "tag":"yunying_shizi_p_tool_account_readtemp_",
                "comment":"工具箱-账号管理-查看特殊账号",
                "type":null
                },
                {
                "id":37,
                "name":"账号管理-添加普通账号",
                "tag":"yunying_shizi_p_tool_account_add_",
                "comment":"工具箱-账号管理-添加普通账号",
                "type":null
                },
                {
                "id":38,
                "name":"账号管理-查看普通账号",
                "tag":"yunying_shizi_p_tool_account_read_",
                "comment":"工具箱-账号管理-查看普通账号",
                "type":null
                },
                {
                "id":39,
                "name":"账号管理-添加系统查看账号",
                "tag":"yunying_shizi_p_tool_account_addview_",
                "comment":"工具箱-账号管理-添加系统查看账号",
                "type":null
                },
                {
                "id":40,
                "name":"账号管理-查看系统查看账号",
                "tag":"yunying_shizi_p_tool_account_readview_",
                "comment":"工具箱-账号管理-查看系统查看账号",
                "type":null
                },
                {
                "id":84,
                "name":"商机配置",
                "tag":"yunying_shizi_p_tool_opportunity_",
                "comment":"工具箱-商机配置",
                "type":null
                },
                {
                "id":88,
                "name":"产品线管理",
                "tag":"yunying_shizi_p_tool_productline_",
                "comment":"工具箱-产品线管理",
                "type":null
                }
                ]
                },
                ],
                "currentRole":{
                "id":300,
                "name":"师资总部",
                "createtime":1422459497000,
                "type":0,
                "nickName":"总部(zongbu)",
                "appId":1,
                "tag":"yunying_shizi_normal_zongbu_fengongsitixi_",
                "parentAccountId":0,
                "parentAccountRoleId":0,
                "updated":0,
                "status":0,
                "openRoleUid":43,
                "parentOpenRoleUid":0,
                "hasPermissions":[
                {
                "id":9,
                "name":"3810数据导出",
                "tag":"yunying_shizi_p_statistics_exportweike_",
                "comment":"统计-3810数据导出",
                "type":null
                },
                {
                "id":32,
                "name":"查询",
                "tag":"yunying_shizi_p_tool_query_",
                "comment":"工具箱-查询",
                "type":null
                },
                {
                "id":35,
                "name":"生成短链接",
                "tag":"yunying_shizi_p_tool_shorturl_",
                "comment":"工具箱-生成短链接",
                "type":null
                },
                {
                "id":36,
                "name":"账号管理-查看特殊账号",
                "tag":"yunying_shizi_p_tool_account_readtemp_",
                "comment":"工具箱-账号管理-查看特殊账号",
                "type":null
                },
                {
                "id":37,
                "name":"账号管理-添加普通账号",
                "tag":"yunying_shizi_p_tool_account_add_",
                "comment":"工具箱-账号管理-添加普通账号",
                "type":null
                },
                {
                "id":38,
                "name":"账号管理-查看普通账号",
                "tag":"yunying_shizi_p_tool_account_read_",
                "comment":"工具箱-账号管理-查看普通账号",
                "type":null
                },
                {
                "id":39,
                "name":"账号管理-添加系统查看账号",
                "tag":"yunying_shizi_p_tool_account_addview_",
                "comment":"工具箱-账号管理-添加系统查看账号",
                "type":null
                },
                {
                "id":40,
                "name":"账号管理-查看系统查看账号",
                "tag":"yunying_shizi_p_tool_account_readview_",
                "comment":"工具箱-账号管理-查看系统查看账号",
                "type":null
                },
                {
                "id":44,
                "name":"城市统计",
                "tag":"yunying_shizi_p_statistics_city_",
                "comment":"统计-城市统计",
                "type":null
                },
                {
                "id":46,
                "name":"机构列表",
                "tag":"yunying_shizi_p_org_",
                "comment":"机构-机构列表",
                "type":null
                },
                {
                "id":47,
                "name":"老师列表",
                "tag":"yunying_shizi_p_teacher_",
                "comment":"老师-老师列表",
                "type":null
                },
                {
                "id":50,
                "name":"监控",
                "tag":"yunying_shizi_p_monitor_",
                "comment":"监控",
                "type":null
                },
                {
                "id":51,
                "name":"课程",
                "tag":"yunying_shizi_p_course_",
                "comment":"课程",
                "type":null
                },
                {
                "id":53,
                "name":"数据监察",
                "tag":"yunying_shizi_p_statistics_supervise_",
                "comment":"统计-数据监察",
                "type":null
                },
                {
                "id":61,
                "name":"数据导出",
                "tag":"yunying_shizi_p_crm_statistics_",
                "comment":"客户-数据导出",
                "type":null
                },
                {
                "id":87,
                "name":"客服推荐商机",
                "tag":"yunying_shizi_p_opportunity_kfdispatch_",
                "comment":"商机-客服推荐商机",
                "type":null
                },
                {
                "id":89,
                "name":"总收入",
                "tag":"yunying_shizi_p_statistics_revenue_all_",
                "comment":"统计-收入统计-总收入",
                "type":null
                },
                {
                "id":90,
                "name":"老师会员",
                "tag":"yunying_shizi_p_statistics_revenue_tvip_",
                "comment":"统计-收入统计-老师会员",
                "type":null
                },
                {
                "id":91,
                "name":"机构会员",
                "tag":"yunying_shizi_p_statistics_revenue_ovip_",
                "comment":"统计-收入统计-机构会员",
                "type":null
                },
                {
                "id":92,
                "name":"管理费",
                "tag":"yunying_shizi_p_statistics_revenue_management_",
                "comment":"统计-收入统计-管理费",
                "type":null
                },
                {
                "id":93,
                "name":"广告费",
                "tag":"yunying_shizi_p_statistics_revenue_ad_",
                "comment":"统计-收入统计-广告费",
                "type":null
                },
                {
                "id":94,
                "name":"线下活动",
                "tag":"yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment":"统计-收入统计-线下活动",
                "type":null
                },
                {
                "id":95,
                "name":"线下增值服务",
                "tag":"yunying_shizi_p_statistics_revenue_service_",
                "comment":"统计-收入统计-线下增值服务",
                "type":null
                },
                {
                "id":96,
                "name":"百加宝",
                "tag":"yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment":"统计-收入统计-百加宝",
                "type":null
                },
                {
                "id":97,
                "name":"天校",
                "tag":"yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment":"统计-收入统计-天校",
                "type":null
                },
                {
                "id":98,
                "name":"商学院",
                "tag":"yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment":"统计-收入统计-商学院",
                "type":null
                },
                {
                "id":99,
                "name":"cps",
                "tag":"yunying_shizi_p_statistics_revenue_cps_",
                "comment":"统计-收入统计-CPS",
                "type":null
                },
                {
                "id":100,
                "name":"线上增值服务",
                "tag":"yunying_shizi_p_statistics_revenue_onlineservice_",
                "comment":"统计-收入统计-线上增值服务",
                "type":null
                },
                {
                "id":101,
                "name":"手续费",
                "tag":"yunying_shizi_p_statistics_revenue_poundage_",
                "comment":"统计-收入统计-手续费",
                "type":null
                },
                {
                "id":102,
                "name":"编辑资料",
                "tag":"yunying_shizi_p_teacher_profile_",
                "comment":"老师-编辑资料",
                "type":null
                },
                {
                "id":103,
                "name":"进入机构",
                "tag":"yunying_shizi_p_org_profile_",
                "comment":"机构-进入机构",
                "type":null
                },
                {
                "id":105,
                "name":"线下CPS",
                "tag":"yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment":"统计-收入统计-线下CPS",
                "type":null
                }
                ]
                }
                },
                "id":99,
                "tag":"yunying_shizi_p_statistics_revenue_cps_",
                "type":1,
                "name":"cps",
                "comment":"统计-收入统计-CPS"
            },
            {

      "extId": 3059,
      "manager": {
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
        "avatar": "https://ehr.baijiahulian.com/GET/file/file.json?file=80158b3b-6045-441c-90d0-5c0fc9d82961.jpg",
        "allowedApps": [
          {
            "id": 1,
            "name": "师资系统",
            "domain": "shizi.ctest.baijiahulian.com",
            "description": null
          },
          {
            "id": 2,
            "name": "审核系统",
            "domain": "shenhe.genshuixue.com",
            "description": null
          },
          {
            "id": 3,
            "name": "客服系统",
            "domain": "kefu.genshuixue.com",
            "description": null
          },
          {
            "id": 5,
            "name": "财务系统",
            "domain": "caiwu.genshuixue.com",
            "description": null
          },
          {
            "id": 6,
            "name": "天眼系统",
            "domain": "tianyan.genshuixue.com",
            "description": null
          },
          {
            "id": 7,
            "name": "运营宝系统",
            "domain": "yy.genshuixue.com",
            "description": null
          },
          {
            "id": 10,
            "name": "活动系统",
            "domain": "huodong.genshuixue.com",
            "description": null
          }
        ],
        "hasRoles": [
          {
            "id": 9,
            "name": "系统管理员",
            "createtime": 1422460872000,
            "type": 1,
            "nickName": "系统管理员",
            "appId": 0,
            "tag": "yunying_shizi_admin",
            "parentAccountId": 0,
            "parentAccountRoleId": 0,
            "updated": 0,
            "status": 0,
            "openRoleUid": 558,
            "parentOpenRoleUid": 0,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 36,
                "name": "账号管理-查看特殊账号",
                "tag": "yunying_shizi_p_tool_account_readtemp_",
                "comment": "工具箱-账号管理-查看特殊账号",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 84,
                "name": "商机配置",
                "tag": "yunying_shizi_p_tool_opportunity_",
                "comment": "工具箱-商机配置",
                "type": null
              },
              {
                "id": 88,
                "name": "产品线管理",
                "tag": "yunying_shizi_p_tool_productline_",
                "comment": "工具箱-产品线管理",
                "type": null
              }
            ]
          },
          {
            "id": 11,
            "name": "客服系统管理员",
            "createtime": null,
            "type": 1,
            "nickName": "",
            "appId": 0,
            "tag": "yunying_kefu_admin",
            "parentAccountId": 0,
            "parentAccountRoleId": 0,
            "updated": 0,
            "status": 0,
            "openRoleUid": 932,
            "parentOpenRoleUid": 0,
            "hasPermissions": []
          },
          {
            "id": 323,
            "name": "总部运营经理",
            "createtime": 1429701812000,
            "type": 0,
            "nickName": "【总部】丹丹总部运营经理(759)",
            "appId": 1,
            "tag": "yunying_shizi_normal_jingli_gaoxiao_",
            "parentAccountId": 7,
            "parentAccountRoleId": 363,
            "updated": 0,
            "status": 0,
            "openRoleUid": 759,
            "parentOpenRoleUid": 1206,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 41,
                "name": "标签管理",
                "tag": "yunying_shizi_p_tool_tag_",
                "comment": "工具箱-标签管理",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_customer_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_followUp_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 57,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_export_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 58,
                "name": "下发",
                "tag": "yunying_shizi_p_crm_customer_distribute_",
                "comment": "客户-下发",
                "type": null
              },
              {
                "id": 59,
                "name": "分配",
                "tag": "yunying_shizi_p_crm_customer_allocate_",
                "comment": "客户-分配",
                "type": null
              },
              {
                "id": 60,
                "name": "转交",
                "tag": "yunying_shizi_p_crm_customer_deliver_",
                "comment": "客户-转交",
                "type": null
              },
              {
                "id": 61,
                "name": "开放",
                "tag": "yunying_shizi_p_crm_customer_release_",
                "comment": "客户-开放",
                "type": null
              },
              {
                "id": 106,
                "name": "放弃",
                "tag": "yunying_shizi_p_crm_customer_abandon_",
                "comment": "客户-放弃",
                "type": null
              },
              {
                "id": 107,
                "name": "退回",
                "tag": "yunying_shizi_p_crm_customer_surrender_",
                "comment": "客户-退回",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 82,
                "name": "联盟账号",
                "tag": "yunying_shizi_p_tool_union_account_",
                "comment": "工具箱-联盟账号",
                "type": null
              },
              {
                "id": 84,
                "name": "商机配置",
                "tag": "yunying_shizi_p_tool_opportunity_",
                "comment": "工具箱-商机配置",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 323,
            "name": "总部运营经理",
            "createtime": 1458873484000,
            "type": 0,
            "nickName": "【百家】云图经理1-3(6200)",
            "appId": 1,
            "tag": "yunying_shizi_normal_jingli_gaoxiao_",
            "parentAccountId": 1985,
            "parentAccountRoleId": 363,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6200,
            "parentOpenRoleUid": 6199,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 41,
                "name": "标签管理",
                "tag": "yunying_shizi_p_tool_tag_",
                "comment": "工具箱-标签管理",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 58,
                "name": "待领用",
                "tag": "yunying_shizi_p_crm_clue_tobeused_",
                "comment": "客户-待领用",
                "type": null
              },
              {
                "id": 59,
                "name": "待入库",
                "tag": "yunying_shizi_p_crm_clue_toberecycled_",
                "comment": "客户-待入库",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 82,
                "name": "联盟账号",
                "tag": "yunying_shizi_p_tool_union_account_",
                "comment": "工具箱-联盟账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 84,
                "name": "商机配置",
                "tag": "yunying_shizi_p_tool_opportunity_",
                "comment": "工具箱-商机配置",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 325,
            "name": "分公司经理",
            "createtime": 1436187206000,
            "type": 0,
            "nickName": "【分公司】云南·昆明经理（1099）",
            "appId": 1,
            "tag": "yunying_shizi_normal_jingli_fengongsitixi_tuozhan_",
            "parentAccountId": 7,
            "parentAccountRoleId": 365,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1099,
            "parentOpenRoleUid": 1207,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 27,
                "name": "账号管理-添加特殊账号",
                "tag": "yunying_shizi_p_tool_account_addtemp_",
                "comment": "工具箱-账号管理-添加特殊账号",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 36,
                "name": "账号管理-查看特殊账号",
                "tag": "yunying_shizi_p_tool_account_readtemp_",
                "comment": "工具箱-账号管理-查看特殊账号",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 41,
                "name": "标签管理",
                "tag": "yunying_shizi_p_tool_tag_",
                "comment": "工具箱-标签管理",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 44,
                "name": "城市统计",
                "tag": "yunying_shizi_p_statistics_city_",
                "comment": "统计-城市统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 49,
                "name": "深度管理",
                "tag": "yunying_shizi_p_tool_deepmanager_",
                "comment": "工具箱-深度管理",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 58,
                "name": "待领用",
                "tag": "yunying_shizi_p_crm_clue_tobeused_",
                "comment": "客户-待领用",
                "type": null
              },
              {
                "id": 59,
                "name": "待入库",
                "tag": "yunying_shizi_p_crm_clue_toberecycled_",
                "comment": "客户-待入库",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 65,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_teacher_returnexpand_",
                "comment": "老师-退回拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 72,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_org_returnexpand_",
                "comment": "机构-退回拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 82,
                "name": "联盟账号",
                "tag": "yunying_shizi_p_tool_union_account_",
                "comment": "工具箱-联盟账号",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 100,
                "name": "线上增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_onlineservice_",
                "comment": "统计-收入统计-线上增值服务",
                "type": null
              },
              {
                "id": 101,
                "name": "手续费",
                "tag": "yunying_shizi_p_statistics_revenue_poundage_",
                "comment": "统计-收入统计-手续费",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 325,
            "name": "分公司经理",
            "createtime": 1448091105000,
            "type": 0,
            "nickName": "【分公司】经理（广西-贺州）（4651）",
            "appId": 1,
            "tag": "yunying_shizi_normal_jingli_fengongsitixi_tuozhan_",
            "parentAccountId": 2826,
            "parentAccountRoleId": 365,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4651,
            "parentOpenRoleUid": 4646,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 41,
                "name": "标签管理",
                "tag": "yunying_shizi_p_tool_tag_",
                "comment": "工具箱-标签管理",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 44,
                "name": "城市统计",
                "tag": "yunying_shizi_p_statistics_city_",
                "comment": "统计-城市统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 58,
                "name": "待领用",
                "tag": "yunying_shizi_p_crm_clue_tobeused_",
                "comment": "客户-待领用",
                "type": null
              },
              {
                "id": 59,
                "name": "待入库",
                "tag": "yunying_shizi_p_crm_clue_toberecycled_",
                "comment": "客户-待入库",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 65,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_teacher_returnexpand_",
                "comment": "老师-退回拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 72,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_org_returnexpand_",
                "comment": "机构-退回拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 82,
                "name": "联盟账号",
                "tag": "yunying_shizi_p_tool_union_account_",
                "comment": "工具箱-联盟账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 84,
                "name": "商机配置",
                "tag": "yunying_shizi_p_tool_opportunity_",
                "comment": "工具箱-商机配置",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 325,
            "name": "分公司经理",
            "createtime": 1450339101000,
            "type": 0,
            "nickName": "【新】江西九江分公司经理",
            "appId": 1,
            "tag": "yunying_shizi_normal_jingli_fengongsitixi_tuozhan_",
            "parentAccountId": 1985,
            "parentAccountRoleId": 365,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4828,
            "parentOpenRoleUid": 4827,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 41,
                "name": "标签管理",
                "tag": "yunying_shizi_p_tool_tag_",
                "comment": "工具箱-标签管理",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 44,
                "name": "城市统计",
                "tag": "yunying_shizi_p_statistics_city_",
                "comment": "统计-城市统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 58,
                "name": "待领用",
                "tag": "yunying_shizi_p_crm_clue_tobeused_",
                "comment": "客户-待领用",
                "type": null
              },
              {
                "id": 59,
                "name": "待入库",
                "tag": "yunying_shizi_p_crm_clue_toberecycled_",
                "comment": "客户-待入库",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 72,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_org_returnexpand_",
                "comment": "机构-退回拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 82,
                "name": "联盟账号",
                "tag": "yunying_shizi_p_tool_union_account_",
                "comment": "工具箱-联盟账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 84,
                "name": "商机配置",
                "tag": "yunying_shizi_p_tool_opportunity_",
                "comment": "工具箱-商机配置",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 326,
            "name": "渠道经理",
            "createtime": 1436593670000,
            "type": 0,
            "nickName": "【渠道】经理（重庆）(1190)",
            "appId": 1,
            "tag": "yunying_shizi_normal_jingli_qudaotixi_",
            "parentAccountId": 7,
            "parentAccountRoleId": 366,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1190,
            "parentOpenRoleUid": 1204,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 41,
                "name": "标签管理",
                "tag": "yunying_shizi_p_tool_tag_",
                "comment": "工具箱-标签管理",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 44,
                "name": "城市统计",
                "tag": "yunying_shizi_p_statistics_city_",
                "comment": "统计-城市统计",
                "type": null
              },
              {
                "id": 45,
                "name": "代理商数据导出",
                "tag": "yunying_shizi_p_statistics_exportagent_",
                "comment": "统计-代理商数据导出",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 58,
                "name": "待领用",
                "tag": "yunying_shizi_p_crm_clue_tobeused_",
                "comment": "客户-待领用",
                "type": null
              },
              {
                "id": 59,
                "name": "待入库",
                "tag": "yunying_shizi_p_crm_clue_toberecycled_",
                "comment": "客户-待入库",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 82,
                "name": "联盟账号",
                "tag": "yunying_shizi_p_tool_union_account_",
                "comment": "工具箱-联盟账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 84,
                "name": "商机配置",
                "tag": "yunying_shizi_p_tool_opportunity_",
                "comment": "工具箱-商机配置",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 333,
            "name": "总部运营主管",
            "createtime": 1429707233000,
            "type": 0,
            "nickName": "【高校】主管-丹丹测试~（760）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_gaoxiao_",
            "parentAccountId": 7,
            "parentAccountRoleId": 323,
            "updated": 0,
            "status": 0,
            "openRoleUid": 760,
            "parentOpenRoleUid": 759,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 333,
            "name": "总部运营主管",
            "createtime": 1457058397000,
            "type": 0,
            "nickName": "【总部】总部运营主管1(6100)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_gaoxiao_",
            "parentAccountId": 1985,
            "parentAccountRoleId": 323,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6100,
            "parentOpenRoleUid": 204,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 335,
            "name": "分公司拓展主管",
            "createtime": 1436252099000,
            "type": 0,
            "nickName": "【分公司】云南·昆明主管1(1119)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_tuozhan_",
            "parentAccountId": 7,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1119,
            "parentOpenRoleUid": 1099,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 335,
            "name": "分公司拓展主管",
            "createtime": 1438849228000,
            "type": 0,
            "nickName": "【分公司】香港主管(1267)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_tuozhan_",
            "parentAccountId": 2214,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1267,
            "parentOpenRoleUid": 1100,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 335,
            "name": "分公司拓展主管",
            "createtime": 1448634201000,
            "type": 0,
            "nickName": "【分公司】主管1（广西-贺州）(4756)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_tuozhan_",
            "parentAccountId": 7,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4756,
            "parentOpenRoleUid": 4651,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 336,
            "name": "渠道主管",
            "createtime": 1448436144000,
            "type": 0,
            "nickName": "【渠道】主管（重庆）(4720)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_qudaotixi_",
            "parentAccountId": 7,
            "parentAccountRoleId": 326,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4720,
            "parentOpenRoleUid": 1190,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 336,
            "name": "渠道主管",
            "createtime": 1464264478000,
            "type": 0,
            "nickName": "【渠道】主管（重庆）(2)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_qudaotixi_",
            "parentAccountId": 7,
            "parentAccountRoleId": 326,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6427,
            "parentOpenRoleUid": 1190,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 336,
            "name": "渠道主管",
            "createtime": 1464264510000,
            "type": 0,
            "nickName": "【渠道】主管（重庆）(3)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_qudaotixi_",
            "parentAccountId": 7,
            "parentAccountRoleId": 326,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6428,
            "parentOpenRoleUid": 1190,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 55,
                "name": "客户列表",
                "tag": "yunying_shizi_p_crm_clue_all_",
                "comment": "客户-客户列表",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 57,
                "name": "下属线索",
                "tag": "yunying_shizi_p_crm_clue_sub_",
                "comment": "客户-下属线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 337,
            "name": "客服主管",
            "createtime": 1436433503000,
            "type": 0,
            "nickName": "【客服】客服主管(1180)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_kefutixi_",
            "parentAccountId": 1985,
            "parentAccountRoleId": 327,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1180,
            "parentOpenRoleUid": 1081,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              }
            ]
          },
          {
            "id": 343,
            "name": "总部运营专员",
            "createtime": 1430984246000,
            "type": 0,
            "nickName": "【高校】专员-丹丹测试~(914)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_gaoxiao_",
            "parentAccountId": 7,
            "parentAccountRoleId": 333,
            "updated": 0,
            "status": 0,
            "openRoleUid": 914,
            "parentOpenRoleUid": 760,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 343,
            "name": "总部运营专员",
            "createtime": 1462428525000,
            "type": 0,
            "nickName": "百家商学院专员",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_gaoxiao_",
            "parentAccountId": 1985,
            "parentAccountRoleId": 333,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6398,
            "parentOpenRoleUid": 6193,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 355,
            "name": "分公司拓展专员",
            "createtime": 1436252133000,
            "type": 0,
            "nickName": "【分公司】云南·昆明主管1的专员1(1120)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_fengongsitixi_tuozhan_",
            "parentAccountId": 7,
            "parentAccountRoleId": 335,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1120,
            "parentOpenRoleUid": 1119,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 355,
            "name": "分公司拓展专员",
            "createtime": 1439013921000,
            "type": 0,
            "nickName": "【分公司】云南·昆明主管2的专员（1271）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_fengongsitixi_tuozhan_",
            "parentAccountId": 765,
            "parentAccountRoleId": 335,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1271,
            "parentOpenRoleUid": 1129,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 355,
            "name": "分公司拓展专员",
            "createtime": 1463625263000,
            "type": 0,
            "nickName": "【新】分公司主管1的专员（广西-贺州）(6409)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_fengongsitixi_tuozhan_",
            "parentAccountId": 7,
            "parentAccountRoleId": 335,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6409,
            "parentOpenRoleUid": 4756,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 355,
            "name": "分公司拓展专员",
            "createtime": 1466502008000,
            "type": 0,
            "nickName": "【分公司】香港专员1",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_fengongsitixi_tuozhan_",
            "parentAccountId": 7,
            "parentAccountRoleId": 335,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6455,
            "parentOpenRoleUid": 1267,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              }
            ]
          },
          {
            "id": 356,
            "name": "渠道专员",
            "createtime": 1436509982000,
            "type": 0,
            "nickName": "【渠道】专员（山东·青岛）-赵丹丹（1182）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_qudaotixi_",
            "parentAccountId": 1010,
            "parentAccountRoleId": 336,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1182,
            "parentOpenRoleUid": 1181,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 67,
                "name": "转出",
                "tag": "yunying_shizi_p_teacher_transfer_",
                "comment": "老师-转出",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 74,
                "name": "转出",
                "tag": "yunying_shizi_p_org_transfer_",
                "comment": "机构-转出",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 356,
            "name": "渠道专员",
            "createtime": 1450410218000,
            "type": 0,
            "nickName": "【渠道】专员（重庆）（4837）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_qudaotixi_",
            "parentAccountId": 7,
            "parentAccountRoleId": 336,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4837,
            "parentOpenRoleUid": 4720,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 356,
            "name": "渠道专员",
            "createtime": 1460700713000,
            "type": 0,
            "nickName": "【渠道】专员（6280）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_qudaotixi_",
            "parentAccountId": 1875,
            "parentAccountRoleId": 336,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6280,
            "parentOpenRoleUid": 4864,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 356,
            "name": "渠道专员",
            "createtime": 1464265214000,
            "type": 0,
            "nickName": "【渠道】专员（重庆）（3）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_qudaotixi_",
            "parentAccountId": 7,
            "parentAccountRoleId": 336,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6429,
            "parentOpenRoleUid": 4720,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 356,
            "name": "渠道专员",
            "createtime": 1464265241000,
            "type": 0,
            "nickName": "【渠道】专员（重庆）（4）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_qudaotixi_",
            "parentAccountId": 7,
            "parentAccountRoleId": 336,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6430,
            "parentOpenRoleUid": 4720,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 33,
                "name": "邀请码",
                "tag": "yunying_shizi_p_tool_invitecode_",
                "comment": "工具箱-邀请码",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 56,
                "name": "我的线索",
                "tag": "yunying_shizi_p_crm_clue_mine_",
                "comment": "客户-我的线索",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 62,
                "name": "添加老师",
                "tag": "yunying_shizi_p_teacher_add_",
                "comment": "老师-添加老师",
                "type": null
              },
              {
                "id": 64,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_teacher_allotexpand_",
                "comment": "老师-分配拓展",
                "type": null
              },
              {
                "id": 68,
                "name": "弃用",
                "tag": "yunying_shizi_p_teacher_desert_",
                "comment": "老师-弃用",
                "type": null
              },
              {
                "id": 69,
                "name": "复原",
                "tag": "yunying_shizi_p_teacher_resuse_",
                "comment": "老师-复原",
                "type": null
              },
              {
                "id": 71,
                "name": "分配拓展",
                "tag": "yunying_shizi_p_org_allotexpand_",
                "comment": "机构-分配拓展",
                "type": null
              },
              {
                "id": 75,
                "name": "弃用",
                "tag": "yunying_shizi_p_org_desert_",
                "comment": "机构-弃用",
                "type": null
              },
              {
                "id": 76,
                "name": "复原",
                "tag": "yunying_shizi_p_org_resuse_",
                "comment": "机构-复原",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 363,
            "name": "总部运营大区经理",
            "createtime": 1437557594000,
            "type": 0,
            "nickName": "【总部】总部运营大区经理（1206）",
            "appId": 1,
            "tag": "yunying_shizi_normal_daqujingli_gaoxiao_",
            "parentAccountId": 1985,
            "parentAccountRoleId": 313,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1206,
            "parentOpenRoleUid": 46,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 365,
            "name": "分公司大区经理",
            "createtime": 1437557594000,
            "type": 0,
            "nickName": "【分公司】大区经理（香港等）（1203）",
            "appId": 1,
            "tag": "yunying_shizi_normal_daqujingli_fengongsitixi_",
            "parentAccountId": 762,
            "parentAccountRoleId": 315,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1203,
            "parentOpenRoleUid": 1071,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 44,
                "name": "城市统计",
                "tag": "yunying_shizi_p_statistics_city_",
                "comment": "统计-城市统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 49,
                "name": "深度管理",
                "tag": "yunying_shizi_p_tool_deepmanager_",
                "comment": "工具箱-深度管理",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 365,
            "name": "分公司大区经理",
            "createtime": 1437566426000,
            "type": 0,
            "nickName": "【分公司】大区经理（云南·昆明）（1207）",
            "appId": 1,
            "tag": "yunying_shizi_normal_daqujingli_fengongsitixi_",
            "parentAccountId": 762,
            "parentAccountRoleId": 315,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1207,
            "parentOpenRoleUid": 1071,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 49,
                "name": "深度管理",
                "tag": "yunying_shizi_p_tool_deepmanager_",
                "comment": "工具箱-深度管理",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 365,
            "name": "分公司大区经理",
            "createtime": 1451286892000,
            "type": 0,
            "nickName": "分公司大区经理",
            "appId": 1,
            "tag": "yunying_shizi_normal_daqujingli_fengongsitixi_",
            "parentAccountId": 762,
            "parentAccountRoleId": 315,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4856,
            "parentOpenRoleUid": 1071,
            "hasPermissions": [
              {
                "id": 9,
                "name": "3810数据导出",
                "tag": "yunying_shizi_p_statistics_exportweike_",
                "comment": "统计-3810数据导出",
                "type": null
              },
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 44,
                "name": "城市统计",
                "tag": "yunying_shizi_p_statistics_city_",
                "comment": "统计-城市统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 49,
                "name": "深度管理",
                "tag": "yunying_shizi_p_tool_deepmanager_",
                "comment": "工具箱-深度管理",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 366,
            "name": "渠道大区经理",
            "createtime": 1437557594000,
            "type": 0,
            "nickName": "【渠道】大区经理（澳门）（1204）",
            "appId": 1,
            "tag": "yunying_shizi_normal_daqujingli_qudaotixi_",
            "parentAccountId": 1020,
            "parentAccountRoleId": 316,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1204,
            "parentOpenRoleUid": 1072,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 44,
                "name": "城市统计",
                "tag": "yunying_shizi_p_statistics_city_",
                "comment": "统计-城市统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 49,
                "name": "深度管理",
                "tag": "yunying_shizi_p_tool_deepmanager_",
                "comment": "工具箱-深度管理",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 60,
                "name": "跟进列表",
                "tag": "yunying_shizi_p_crm_visitlist_",
                "comment": "客户-跟进列表",
                "type": null
              },
              {
                "id": 61,
                "name": "数据导出",
                "tag": "yunying_shizi_p_crm_statistics_",
                "comment": "客户-数据导出",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 367,
            "name": "客服大区经理",
            "createtime": 1437557594000,
            "type": 0,
            "nickName": "【客服】客服大区经理（1205）",
            "appId": 1,
            "tag": "yunying_shizi_normal_daqujingli_kefutixi_",
            "parentAccountId": 3,
            "parentAccountRoleId": 317,
            "updated": 0,
            "status": 0,
            "openRoleUid": 1205,
            "parentOpenRoleUid": 1073,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 39,
                "name": "账号管理-添加系统查看账号",
                "tag": "yunying_shizi_p_tool_account_addview_",
                "comment": "工具箱-账号管理-添加系统查看账号",
                "type": null
              },
              {
                "id": 40,
                "name": "账号管理-查看系统查看账号",
                "tag": "yunying_shizi_p_tool_account_readview_",
                "comment": "工具箱-账号管理-查看系统查看账号",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 49,
                "name": "深度管理",
                "tag": "yunying_shizi_p_tool_deepmanager_",
                "comment": "工具箱-深度管理",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 408,
            "name": "分公司运营主管",
            "createtime": 1448088202000,
            "type": 0,
            "nickName": "【分公司】云南·昆明【运营主管1】（4647）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_yunying_",
            "parentAccountId": 7,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4647,
            "parentOpenRoleUid": 1099,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 65,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_teacher_returnexpand_",
                "comment": "老师-退回拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 72,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_org_returnexpand_",
                "comment": "机构-退回拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 408,
            "name": "分公司运营主管",
            "createtime": 1448641941000,
            "type": 0,
            "nickName": "【分公司】广西-贺州【运营主管】（4762）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_yunying_",
            "parentAccountId": 7,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4762,
            "parentOpenRoleUid": 4651,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 65,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_teacher_returnexpand_",
                "comment": "老师-退回拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 72,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_org_returnexpand_",
                "comment": "机构-退回拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 408,
            "name": "分公司运营主管",
            "createtime": 1462512134000,
            "type": 0,
            "nickName": "运营",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_yunying_",
            "parentAccountId": 39,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6404,
            "parentOpenRoleUid": 1082,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 65,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_teacher_returnexpand_",
                "comment": "老师-退回拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 72,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_org_returnexpand_",
                "comment": "机构-退回拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 408,
            "name": "分公司运营主管",
            "createtime": 1463800968000,
            "type": 0,
            "nickName": "【分公司】广西-贺州【运营主管2】（6417）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_yunying_",
            "parentAccountId": 7,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6417,
            "parentOpenRoleUid": 4651,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 53,
                "name": "数据监察",
                "tag": "yunying_shizi_p_statistics_supervise_",
                "comment": "统计-数据监察",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 65,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_teacher_returnexpand_",
                "comment": "老师-退回拓展",
                "type": null
              },
              {
                "id": 66,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_teacher_quickallot_",
                "comment": "老师-快捷分配",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 72,
                "name": "退回拓展",
                "tag": "yunying_shizi_p_org_returnexpand_",
                "comment": "机构-退回拓展",
                "type": null
              },
              {
                "id": 73,
                "name": "快捷分配",
                "tag": "yunying_shizi_p_org_quickallot_",
                "comment": "机构-快捷分配",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 409,
            "name": "分公司运营专员",
            "createtime": 1448091798000,
            "type": 0,
            "nickName": "【分公司】云南·昆明【运营专员】（4653）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_fengongsitixi_yunying_",
            "parentAccountId": 7,
            "parentAccountRoleId": 408,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4653,
            "parentOpenRoleUid": 4647,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 34,
                "name": "一键转移",
                "tag": "yunying_shizi_p_tool_exportonce_",
                "comment": "工具箱-一键转移",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 42,
                "name": "业绩概况",
                "tag": "yunying_shizi_p_statistics_overview_",
                "comment": "统计-业绩概况",
                "type": null
              },
              {
                "id": 43,
                "name": "科目统计",
                "tag": "yunying_shizi_p_statistics_subject_",
                "comment": "统计-科目统计",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 54,
                "name": "通知",
                "tag": "yunying_shizi_p_notify_",
                "comment": "通知",
                "type": null
              },
              {
                "id": 63,
                "name": "分配运营",
                "tag": "yunying_shizi_p_teacher_allotoperate_",
                "comment": "老师-分配运营",
                "type": null
              },
              {
                "id": 70,
                "name": "分配运营",
                "tag": "yunying_shizi_p_org_allotoperate_",
                "comment": "机构-分配运营",
                "type": null
              },
              {
                "id": 81,
                "name": "联盟子账号",
                "tag": "yunying_shizi_p_tool_union_subaccount_",
                "comment": "工具箱-联盟子账号",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 89,
                "name": "总收入",
                "tag": "yunying_shizi_p_statistics_revenue_all_",
                "comment": "统计-收入统计-总收入",
                "type": null
              },
              {
                "id": 90,
                "name": "老师会员",
                "tag": "yunying_shizi_p_statistics_revenue_tvip_",
                "comment": "统计-收入统计-老师会员",
                "type": null
              },
              {
                "id": 91,
                "name": "机构会员",
                "tag": "yunying_shizi_p_statistics_revenue_ovip_",
                "comment": "统计-收入统计-机构会员",
                "type": null
              },
              {
                "id": 92,
                "name": "管理费",
                "tag": "yunying_shizi_p_statistics_revenue_management_",
                "comment": "统计-收入统计-管理费",
                "type": null
              },
              {
                "id": 93,
                "name": "广告费",
                "tag": "yunying_shizi_p_statistics_revenue_ad_",
                "comment": "统计-收入统计-广告费",
                "type": null
              },
              {
                "id": 94,
                "name": "线下活动",
                "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
                "comment": "统计-收入统计-线下活动",
                "type": null
              },
              {
                "id": 95,
                "name": "线下增值服务",
                "tag": "yunying_shizi_p_statistics_revenue_service_",
                "comment": "统计-收入统计-线下增值服务",
                "type": null
              },
              {
                "id": 96,
                "name": "百加宝",
                "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
                "comment": "统计-收入统计-百加宝",
                "type": null
              },
              {
                "id": 97,
                "name": "天校",
                "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
                "comment": "统计-收入统计-天校",
                "type": null
              },
              {
                "id": 98,
                "name": "商学院",
                "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
                "comment": "统计-收入统计-商学院",
                "type": null
              },
              {
                "id": 99,
                "name": "cps",
                "tag": "yunying_shizi_p_statistics_revenue_cps_",
                "comment": "统计-收入统计-CPS",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              },
              {
                "id": 105,
                "name": "线下CPS",
                "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
                "comment": "统计-收入统计-线下CPS",
                "type": null
              }
            ]
          },
          {
            "id": 410,
            "name": "分公司市场主管",
            "createtime": 1448091618000,
            "type": 0,
            "nickName": "【分公司】云南·昆明【市场主管1】（4652）",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_shichang_",
            "parentAccountId": 7,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4652,
            "parentOpenRoleUid": 1099,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              }
            ]
          },
          {
            "id": 410,
            "name": "分公司市场主管",
            "createtime": 1448641968000,
            "type": 0,
            "nickName": "【分公司】广西-贺州【市场主管】(4763)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuguan_fengongsitixi_shichang_",
            "parentAccountId": 7,
            "parentAccountRoleId": 325,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4763,
            "parentOpenRoleUid": 4651,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 37,
                "name": "账号管理-添加普通账号",
                "tag": "yunying_shizi_p_tool_account_add_",
                "comment": "工具箱-账号管理-添加普通账号",
                "type": null
              },
              {
                "id": 38,
                "name": "账号管理-查看普通账号",
                "tag": "yunying_shizi_p_tool_account_read_",
                "comment": "工具箱-账号管理-查看普通账号",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              }
            ]
          },
          {
            "id": 411,
            "name": "分公司市场专员",
            "createtime": 1448091872000,
            "type": 0,
            "nickName": "【分公司】云南·昆明【市专员1】(4654)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_fengongsitixi_shichang_",
            "parentAccountId": 7,
            "parentAccountRoleId": 410,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4654,
            "parentOpenRoleUid": 4652,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              }
            ]
          },
          {
            "id": 411,
            "name": "分公司市场专员",
            "createtime": 1463638400000,
            "type": 0,
            "nickName": "【分公司】广西-贺州【市场专员】(6411)",
            "appId": 1,
            "tag": "yunying_shizi_normal_zhuanyuan_fengongsitixi_shichang_",
            "parentAccountId": 7,
            "parentAccountRoleId": 410,
            "updated": 0,
            "status": 0,
            "openRoleUid": 6411,
            "parentOpenRoleUid": 4763,
            "hasPermissions": [
              {
                "id": 32,
                "name": "查询",
                "tag": "yunying_shizi_p_tool_query_",
                "comment": "工具箱-查询",
                "type": null
              },
              {
                "id": 35,
                "name": "生成短链接",
                "tag": "yunying_shizi_p_tool_shorturl_",
                "comment": "工具箱-生成短链接",
                "type": null
              },
              {
                "id": 46,
                "name": "机构列表",
                "tag": "yunying_shizi_p_org_",
                "comment": "机构-机构列表",
                "type": null
              },
              {
                "id": 47,
                "name": "老师列表",
                "tag": "yunying_shizi_p_teacher_",
                "comment": "老师-老师列表",
                "type": null
              },
              {
                "id": 50,
                "name": "监控",
                "tag": "yunying_shizi_p_monitor_",
                "comment": "监控",
                "type": null
              },
              {
                "id": 51,
                "name": "课程",
                "tag": "yunying_shizi_p_course_",
                "comment": "课程",
                "type": null
              },
              {
                "id": 83,
                "name": "任务",
                "tag": "yunying_shizi_p_task_",
                "comment": "任务",
                "type": null
              },
              {
                "id": 85,
                "name": "老师会员商机",
                "tag": "yunying_shizi_p_opportunity_tvip_",
                "comment": "商机-老师会员商机",
                "type": null
              },
              {
                "id": 87,
                "name": "客服推荐商机",
                "tag": "yunying_shizi_p_opportunity_kfdispatch_",
                "comment": "商机-客服推荐商机",
                "type": null
              },
              {
                "id": 102,
                "name": "编辑资料",
                "tag": "yunying_shizi_p_teacher_profile_",
                "comment": "老师-编辑资料",
                "type": null
              },
              {
                "id": 103,
                "name": "进入机构",
                "tag": "yunying_shizi_p_org_profile_",
                "comment": "机构-进入机构",
                "type": null
              }
            ]
          },
          {
            "id": 412,
            "name": "系统查看账户",
            "createtime": 1448619478000,
            "type": 2,
            "nickName": "系统查看账号（4749）",
            "appId": 1,
            "tag": "yunying_shizi_view_",
            "parentAccountId": 0,
            "parentAccountRoleId": 0,
            "updated": 0,
            "status": 0,
            "openRoleUid": 4749,
            "parentOpenRoleUid": 0,
            "hasPermissions": [
              {
                "id": 49,
                "name": "深度管理",
                "tag": "yunying_shizi_p_tool_deepmanager_",
                "comment": "工具箱-深度管理",
                "type": null
              }
            ]
          }
        ],
        "currentRole": {
          "id": 365,
          "name": "分公司大区经理",
          "createtime": 1437557594000,
          "type": 0,
          "nickName": "【分公司】大区经理（香港等）（1203）",
          "appId": 1,
          "tag": "yunying_shizi_normal_daqujingli_fengongsitixi_",
          "parentAccountId": 762,
          "parentAccountRoleId": 315,
          "updated": 0,
          "status": 0,
          "openRoleUid": 1203,
          "parentOpenRoleUid": 1071,
          "hasPermissions": [
            {
              "id": 9,
              "name": "3810数据导出",
              "tag": "yunying_shizi_p_statistics_exportweike_",
              "comment": "统计-3810数据导出",
              "type": null
            },
            {
              "id": 32,
              "name": "查询",
              "tag": "yunying_shizi_p_tool_query_",
              "comment": "工具箱-查询",
              "type": null
            },
            {
              "id": 37,
              "name": "账号管理-添加普通账号",
              "tag": "yunying_shizi_p_tool_account_add_",
              "comment": "工具箱-账号管理-添加普通账号",
              "type": null
            },
            {
              "id": 38,
              "name": "账号管理-查看普通账号",
              "tag": "yunying_shizi_p_tool_account_read_",
              "comment": "工具箱-账号管理-查看普通账号",
              "type": null
            },
            {
              "id": 40,
              "name": "账号管理-查看系统查看账号",
              "tag": "yunying_shizi_p_tool_account_readview_",
              "comment": "工具箱-账号管理-查看系统查看账号",
              "type": null
            },
            {
              "id": 44,
              "name": "城市统计",
              "tag": "yunying_shizi_p_statistics_city_",
              "comment": "统计-城市统计",
              "type": null
            },
            {
              "id": 46,
              "name": "机构列表",
              "tag": "yunying_shizi_p_org_",
              "comment": "机构-机构列表",
              "type": null
            },
            {
              "id": 47,
              "name": "老师列表",
              "tag": "yunying_shizi_p_teacher_",
              "comment": "老师-老师列表",
              "type": null
            },
            {
              "id": 49,
              "name": "深度管理",
              "tag": "yunying_shizi_p_tool_deepmanager_",
              "comment": "工具箱-深度管理",
              "type": null
            },
            {
              "id": 50,
              "name": "监控",
              "tag": "yunying_shizi_p_monitor_",
              "comment": "监控",
              "type": null
            },
            {
              "id": 51,
              "name": "课程",
              "tag": "yunying_shizi_p_course_",
              "comment": "课程",
              "type": null
            },
            {
              "id": 60,
              "name": "跟进列表",
              "tag": "yunying_shizi_p_crm_visitlist_",
              "comment": "客户-跟进列表",
              "type": null
            },
            {
              "id": 61,
              "name": "数据导出",
              "tag": "yunying_shizi_p_crm_statistics_",
              "comment": "客户-数据导出",
              "type": null
            },
            {
              "id": 87,
              "name": "客服推荐商机",
              "tag": "yunying_shizi_p_opportunity_kfdispatch_",
              "comment": "商机-客服推荐商机",
              "type": null
            },
            {
              "id": 89,
              "name": "总收入",
              "tag": "yunying_shizi_p_statistics_revenue_all_",
              "comment": "统计-收入统计-总收入",
              "type": null
            },
            {
              "id": 90,
              "name": "老师会员",
              "tag": "yunying_shizi_p_statistics_revenue_tvip_",
              "comment": "统计-收入统计-老师会员",
              "type": null
            },
            {
              "id": 91,
              "name": "机构会员",
              "tag": "yunying_shizi_p_statistics_revenue_ovip_",
              "comment": "统计-收入统计-机构会员",
              "type": null
            },
            {
              "id": 92,
              "name": "管理费",
              "tag": "yunying_shizi_p_statistics_revenue_management_",
              "comment": "统计-收入统计-管理费",
              "type": null
            },
            {
              "id": 93,
              "name": "广告费",
              "tag": "yunying_shizi_p_statistics_revenue_ad_",
              "comment": "统计-收入统计-广告费",
              "type": null
            },
            {
              "id": 94,
              "name": "线下活动",
              "tag": "yunying_shizi_p_statistics_revenue_offlineactivity_",
              "comment": "统计-收入统计-线下活动",
              "type": null
            },
            {
              "id": 95,
              "name": "线下增值服务",
              "tag": "yunying_shizi_p_statistics_revenue_service_",
              "comment": "统计-收入统计-线下增值服务",
              "type": null
            },
            {
              "id": 96,
              "name": "百加宝",
              "tag": "yunying_shizi_p_statistics_revenue_baijiabao_",
              "comment": "统计-收入统计-百加宝",
              "type": null
            },
            {
              "id": 97,
              "name": "天校",
              "tag": "yunying_shizi_p_statistics_revenue_tianxiao_",
              "comment": "统计-收入统计-天校",
              "type": null
            },
            {
              "id": 98,
              "name": "商学院",
              "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
              "comment": "统计-收入统计-商学院",
              "type": null
            },
            {
              "id": 99,
              "name": "cps",
              "tag": "yunying_shizi_p_statistics_revenue_cps_",
              "comment": "统计-收入统计-CPS",
              "type": null
            },
            {
              "id": 102,
              "name": "编辑资料",
              "tag": "yunying_shizi_p_teacher_profile_",
              "comment": "老师-编辑资料",
              "type": null
            },
            {
              "id": 103,
              "name": "进入机构",
              "tag": "yunying_shizi_p_org_profile_",
              "comment": "机构-进入机构",
              "type": null
            },
            {
              "id": 105,
              "name": "线下CPS",
              "tag": "yunying_shizi_p_statistics_revenue_offlinecps_",
              "comment": "统计-收入统计-线下CPS",
              "type": null
            }
          ]
        }
      },
      "id": 98,
      "tag": "yunying_shizi_p_statistics_revenue_shangxueyuan_",
      "type": 1,
      "name": "商学院",
      "comment": "统计-收入统计-商学院"
            }
        ];
    },
    getExtPermissions: function () {
        var result = [];
        var tags = [
            'yunying_shizi_p_statistics_revenue_all_',
            'yunying_shizi_p_statistics_revenue_tvip_',
            'yunying_shizi_p_statistics_revenue_ovip_',
            'yunying_shizi_p_statistics_revenue_management_'
        ];
        var tagNames = [
            '总收入',
            '老师会员',
            '机构会员',
            '管理费'
        ];
        for (var i = 0; i < 4; i++) {
            result.push({
                "extId": 1 + i,
                "id": 22 + i,
                "tag": tags[i],
                "name": tagNames[i],
                "manager": {
                    "id": 7 + i,
                    "name": "DD",
                    "displayName": "赵" + i,
                    "mobile": "100000000",
                    "department": "总公司-产品测试部",
                    "manager": "李思思",
                    "company": "总公司",
                    "type": 0,
                    "managerId": 27,
                    "title": "魔法师",
                    "allowedApps": null,
                    "hasRoles": [
                        {
                            "id": 325,
                            "name": "分舵舵主",
                            "nickName": "牛鼻多住",
                            "appId": 1,
                            "tag": "yunying_shizi_jingli_fengongsitixi_",
                            "parentAccountId": 7,
                            "parentAccountRoleId": 111,
                            "updated": 0,
                            "status": 0,
                            "openRoleUid": 1100,
                            "parentOpenRoleUid": 222,
                            "hasPermissions": null
                        }
                    ],
                    "currentRole": {
                        "id": 325,
                        "name": "分公司经理",
                        "nickName": "牛鼻多住",
                        "appId": 1,
                        "tag": "yunying_shizi_jingli_fengongsitixi_",
                        "parentAccountId": 7,
                        "parentAccountRoleId": 111,
                        "updated": 0,
                        "status": 0,
                        "openRoleUid": 1100,
                        "parentOpenRoleUid": 222,
                        "hasPermissions": null
                    }
                }
            });
        }

        return result;
    }
}