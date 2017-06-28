<template>
    <div class="block" id="vue-table">
        <el-table :data="list">
          <el-table-column
              v-for="col of column"
              :prop=col.name
              :label=col.display
              :width=col.width>
                  <template >
                      <el-button  type="text" size="small">查看 </el-button>
                      <el-button type="text" size="small">编辑</el-button>
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
    export default {
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
        }
    }
</script>