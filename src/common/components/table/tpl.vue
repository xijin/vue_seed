<template>
    <div class="block" id="vue-table">
        <el-table :data="list">
            <el-table-column
              v-for="col in column"
              :prop=col.name
              :label=col.display
              width="180">
              <template scope="scope">
                <el-button  type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
      </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next"
      :total="1000">
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
            console.log(`当前页: ${val}`);
          }
        },
        data() {
          return {
            currentPage2: 5,
            tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
          };
        }
    }
</script>