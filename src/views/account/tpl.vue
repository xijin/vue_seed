<template>
    <div>role
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <vue-table
            :column.sync=columnDefs
            :list.sync=list
            :page-dto.sync=pageDto
            @get-list=getList
            >
        </vue-table>
        <account-info v-if="isVisible"></account-info>
    </div>
    
</template>

<script>
    import vueTable from '@/common/components/table/tpl.vue'; 
    import request from './request.js';
    import tableUtil from '@/common/utils/tableUtil';
    import Vue from 'vue';

    import operate from './operate.vue';
    Vue.component('operate', operate)

    import accountInfo from './update/info.vue';

    export default {
        data() {
            return {
                list: [],
                pageDto: {},
                columnDefs: [],
                operate: 'operate',
                isVisible: false
            }
        },
        created() {
            this.init();
        },
        mounted() {
            this.getList();
        },
        methods: {
            init: function () {

            },
            getList: function () {
                var that = this;
                request.list().then(function (res) {
                    var data = res.data;
                    that.columnDefs = tableUtil.getColumnDefs(data.columnDefs);
                    that.list = data.data;
                    that.pageDto = data.pageDto;
                
                }, function (res) {
                
                });
            }
        },
        components: {vueTable, accountInfo}
    }
</script>