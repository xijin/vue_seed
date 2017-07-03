import config from './config';
export default {
    state: {
        permission: null
    },
    mutations: {

    },
    actions: {
        // 编辑权限
        [config.PERMISSION_EDIT] ({state}, event) {
            
            state.permission = event.item;

        },
        // 停用权限
        [config.PERMISSION_STOP] ({state}, event) {
            state.permission = event.item;
        },
        // 创建权限
        [config.PERMISSION_CREAT] ({state}, event) {
            state.permission = event.item;
        }
    }
}