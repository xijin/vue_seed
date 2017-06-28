<template>
    <div class="block" id="vue-table">   
        <el-table :data="list">
          <el-table-column
              v-for="col of column" :key="col.name"
              :prop=col.name
              :label=col.display
              :width=col.width>
                  <template scope="scope">
                        <component :is="col.cellTemplate" :item=scope.row></component>
                        {{scope.row[col.name]}}
                  </template>
            </el-table-column>
          </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageDto.pageNum"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageDto.pageSize"
      layout="total, sizes, prev, pager, next"
      :total="pageDto.count">
    </el-pagination>
  </div>
</template>
<style lang="less" src="./style.less"></style>
<script>
    import operate from '@/views/account/operate.vue';
    export default {
        name: 'vue-table',
        props: {
            column: Array,
            list: Array,
            pageDto: Object
        },
        methods: {
            handleSizeChange(val) {
                this.$emit('get-list', this.pageDto);
            },
            handleCurrentChange(val) {
                this.$emit('get-list', this.pageDto);
            }
        },
        components: {operate}
    }
</script>