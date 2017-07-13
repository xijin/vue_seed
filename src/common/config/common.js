const pageDto = {
    pageNum: 1,
    pageSize: 20
};

const DATE_STR = {
    DATE: 'YYYY-MM-DD'
};

// 账号，权限状态
const STATUS = {
    '0': '启用',
    '1': '禁用'
};

const MODULE_MAP = {
    account: 'yunying_usercenter_p_accountManage',
    role: 'yunying_usercenter_p_roleManage',
    permission: 'yunying_usercenter_p_permissionManage',
    log: 'yunying_usercenter_p_logEvent'
};

export default {
    pageDto: pageDto,
    DATE_STR: DATE_STR,
    STATUS: STATUS,
    MODULE_MAP: MODULE_MAP
};

