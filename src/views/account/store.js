import config from './config';
export default {
    state: {
        item: null
    },
    mutations: {

    },
    actions: {
        // 编辑账号
        [config.ACCOUNT_EDIT] (state, event) {
            state.item = event.item;

        },
        // 停用账号
        [config.ACCOUNT_STOP] (state, event) {
            state.item = event.item;
        }
    }
}