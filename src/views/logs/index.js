
import vueTable from '@/common/components/table/tpl.vue'; 
import commonConfig from '@/common/config/common.js'; 
import request from './request.js';
import tableUtil from '@/common/utils/tableUtil';

import dateUtil from '@/common/utils/dateUtils';

import moment from 'moment';
import Vue from 'vue';
import commonRequest from '@/commonRequest.js';
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
                object: '-1',
                keyword: null
            },
            apps: [],
            roles: [],
            operateTime: dateUtil.intiDateRange(),
            pickerOptions: dateUtil.getDatepickerOptions()
        }
    },
    computed:  {
        permissions: function () {
            return this.$root.userInfo && this.$root.userInfo.currentRole.hasPermissions;
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
            var dateRange = dateUtil.getDateRange(that.operateTime);
            var params = {
                pageDto: that.pageDto,
                operationTag: query.object,
                appId: +query.appId,
                keyword: query.keyword,
                startDay: dateRange[0],
                endDay: dateRange[1]
            };

            request.list(params).then(function (res) {

                var data = res.data;
                that.columnDefs = tableUtil.getColumnDefs(data.columnDefs);
                that.list = data.data;
                that.pageDto = res.pageDto;
            
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

            commonRequest
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
    components: {vueTable}
}
