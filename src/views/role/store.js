import config from './config';
export default {
    state: {
        item: null
    },
    mutations: {

    },
    actions: {
        // 编辑账号
        [config.ROLE_EDIT] ({state}, event) {
            
            state.item = event.item;

        },
        // 停用账号
        [config.ROLE_STOP] ({state}, event) {
            state.item = event.item;
        },
        // 创建账号
        [config.ROLE_CREAT] ({state}, event) {
            state.item = event.item;
        }
    }
}