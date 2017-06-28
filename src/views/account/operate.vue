<template>
    <div>
        <el-button  type="text" size="small" @click="showDetail">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
    </div>
</template>
<script>
    export default {
        name: 'operate',
        props: {
            item: Object
        },
        methods: {
            showDetail: function () {
                console.log(this.item);
                this.$emit('show-detail', this.item);
            } 
        }
    }

</script>>
    