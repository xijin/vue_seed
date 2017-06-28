<template>
    <div>role
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>
        <vue-table
            :column=columnDefs
            :list=list
            :page-dto=pageDto
            @get-list=getList
            >
        </vue-table>
    </div>
</template>
<script>
    import vueTable from '@/common/components/table/tpl.vue'; 
    import request from './request.js';

    export default {
        data() {
            return {
                list: [],
                pageDto: {},
                columnDefs: []
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
                console.log(this.$root.userInfo);
            },
            getList: function () {
                var that = this;
                request.list().then(function (res) {
                    var data = res.data;
                    that.columnDefs = data.columnDefs;
                    that.list = data.data;
                    that.pageDto = data.pageDto;
                
                }, function (res) {
                
                });
            }
        },
        components: { vueTable}
    }
</script>