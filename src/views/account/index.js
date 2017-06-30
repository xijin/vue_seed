
import vueTable from '@/common/components/table/tpl.vue'; 
import commonConfig from '@/common/config/common.js'; 
import request from './request.js';
import tableUtil from '@/common/utils/tableUtil';
import Vue from 'vue';

import operate from './operate.vue';
Vue.component('operate', operate);
import accountInfo from './update/info.vue';

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
                keyword: ''
            },
            apps: [],
            roles: []
        }
    },
    created() {
        this.getQueryInfo();
        this.getList();
    },
    methods: {
        getList: function () {
            var that = this;
            var query = that.query;
            var params = {
                pageDto: that.pageDto,
                status: +query.status,
                roleTag: query.roleTag,
                appId: +query.appId,
                keyword: query.keyword
            };

            request.list(params).then(function (res) {
                var data = res.data;
                that.columnDefs = tableUtil.getColumnDefs(data.columnDefs);
                that.list = data.data;
                that.pageDto = data.pageDto;
            
            }, function (res) {
            
            });
        },
        addAccount: function () {
            this.$store.dispatch({
                type: config.ACCOUNT_CREAT,
                item: null
            });

            this.isVisible = true;
        },
        getQueryInfo() {
            var that = this;

            request
                .getSelectInfo({
                    appId: this.query.appId
                }).then(function (res) {
                    that.apps = res.data;
            }, function () {
                
            });
        
        },
        changeApp: function (val) {
            var that = this;
            that.apps.filter(function (value, index) {
                if (value.id == val && val !== -1) {
                    that.roles = value.roles;
                }
                if (val == -1) {
                    that.roleTag = '-1';
                    that.roles = [];
                }
            });
            this.getList();
        }
    },
    components: {vueTable, accountInfo}
}
