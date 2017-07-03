import config from './config';
export default {
    state: {
        role: null
    },
    mutations: {

    },
    actions: {
        // 编辑账号
        [config.ROLE_EDIT] ({state}, event) {
            state.role = event.role;

        },
        // 停用账号
        [config.ROLE_STOP] ({state}, event) {
            state.role = event.role;
        },
        // 创建账号
        [config.ROLE_CREAT] ({state}, event) {
            state.role = event.role;
        }
    }
}