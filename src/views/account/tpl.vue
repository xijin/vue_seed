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
    </div>
    
</template>

<script>
    import vueTable from '@/common/components/table/tpl.vue'; 
    import request from './request.js';
    import tableUtil from '@/common/utils/tableUtil';
    import operate from './operate.vue';
    export default {
        data() {
            return {
                list: [],
                pageDto: {},
                columnDefs: [],
                operate: 'operate'
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
                this.$on('show-detail', function () {
                    debugger;
                });
            },
            getList: function () {
                var that = this;
                request.list().then(function (res) {
                    var data = res.data;
                    that.columnDefs = tableUtil.getColumnDefs(data.columnDefs, true);
                    that.list = data.data;
                    that.pageDto = data.pageDto;
                
                }, function (res) {
                
                });
            }
        },
        components: {vueTable, operate}
    }
</script>