import vueTable from '@/common/components/table/tpl.vue'; 
import commonConfig from '@/common/config/common.js'; 
import request from './request.js';
import commonRequest from '@/commonRequest.js';

import tableUtil from '@/common/utils/tableUtil';
import Vue from 'vue';

import operate from './operate.vue';
Vue.component('role-operate', operate);

import updateRole from './updateRole.vue';

import config from './config';

export default {
    data() {
        return {
            list: [],
            pageDto: commonConfig.pageDto,
            columnDefs: [],
            operate: 'operate',
            isVisible: false,
            query: {
                status: '0',
                appId: '-1',
                roleTag: '-1',
                keyword: null
            },
            apps: [],
            roles: []
        }
    },
    created() {
        this.getList();
        this.getQueryInfo();
    },
    methods: {
        getList: function () {
            var that = this;
            var query = that.query;
            var params = {
                pageDto: that.pageDto,
                status: +query.status,
                appId: +query.appId,
                keyword: query.keyword
            };

            request.list(params).then(function (res) {
                var data = res.data;
                that.columnDefs = tableUtil.getColumnDefs(data.columnDefs, 'role');
                that.list = data.data;
                that.pageDto = res.pageDto;
            
            }, function (res) {
            
            });
        },
        addRole: function () {
            this.$store.dispatch({
                type: config.ROLE_CREAT,
                role: null
            });
            this.isVisible = true;
        },
        getQueryInfo() {
            var that = this;

            commonRequest
                .getSelectInfo({
                    appId: this.query.appId
                }).then(function (res) {
                    that.apps = res.data;
            }, function () {
                
            });
        
        },
    },
    components: {vueTable, updateRole}
}
