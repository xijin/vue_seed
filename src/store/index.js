/**
 * @fileOverview charity-cms-store
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import actions from './action';
import mutations from './mutations';
import vuex from 'vuex';
import Vue from 'vue'; 

Vue.use(vuex);

import Account from '../views/account/store';
import Role from '../views/role/store';
import Permission from '../views/permission/store';
import UserInfo from '../views/store';

export default new vuex.Store({
    state: {
    },
    strict: false,
    mutations,
    actions,
    modules: {
        Account,
        Role,
        Permission,
        UserInfo
    }
});

