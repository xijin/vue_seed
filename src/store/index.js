/**
 * @fileOverview charity-cms-store
 * @author XiaoBin Li(lixiaobin8878@gmail.com) 
 */

'use strict';

import actions from './action';
import mutations from './mutations';
import vuex from 'vuex';
import Vue from 'vue'; 
import UserInfo from '../views/store';

Vue.use(vuex);


export default new vuex.Store({
    state: {
    },
    strict: false,
    mutations,
    actions,
    modules: {
        UserInfo
    }
});

