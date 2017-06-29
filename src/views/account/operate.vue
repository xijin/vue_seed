<template>
    <div>
        <el-button  type="text" size="small" @click="stop">停用</el-button>
        <el-button  type="text" size="small" @click="edit">编辑</el-button>
    </div>
</template>
<script>
    import config from './config';
    import MessageUtil from '@/common/utils/messageBoxUtil';

    export default {
        name: 'operate',
        props: {
            item: Object,
            isVisible: Number
        },
        methods: {
            stop: function () {

                var that = this;
                that.$store.dispatch({
                    type: config.ACCOUNT_STOP, 
                    item: this.item
                });

                MessageUtil.comfirm(
                    that, 
                    '是否停用此账号？'
                    ).then(function () {
                        debugger;
                    }).catch(function () {
                        debugger;
                    });
                
            },
            edit: function () {
                this.$store.dispatch({
                    type: config.ACCOUNT_EDIT,
                    item: this.item
                });
                this.$parent.$parent.$parent.$parent.isVisible = true;
            } 
        }
    }

</script>>
    