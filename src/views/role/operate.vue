<template >
    <div v-if="!item.status">
        <el-button  
        type="text" size="small" @click="stop">停用</el-button>
        <el-button  type="text" size="small" @click="edit">编辑</el-button>
    </div>
</template>
<script>
    import config from './config';
    import MessageUtil from '@/common/utils/messageBoxUtil';
    import request from './request.js';

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
                    type: config.ROLE_STOP, 
                    role: this.item
                });

                MessageUtil.comfirm(
                    that, 
                    '是否停用此角色？'
                    ).then(function () {
                        request.stopRole({id: that.item.id})
                            .then(function (res) {
                                MessageUtil.showMessage(that, '停用成功');
                            });
                    }).catch(function () {
                        
                    });
                
            },
            edit: function () {

                this.$store.dispatch({
                    type: config.ROLE_EDIT,
                    role: this.item
                });
                
                this.$parent.$parent.$parent.$parent.isVisible = true;
            } 
        }
    }

</script>>
    