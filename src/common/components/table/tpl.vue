<template>
    <div class="block" id="vue-table">   
        <el-table :data="filteredData">
          <el-table-column
              v-for="col of column" :key="col.name"
              :prop=col.name
              :label=col.display
              :width=col.width>
                  <template scope="scope">
                        <component 
                        :is="col.component" 
                        :item=scope.row
                        :is-visible='0'>
                        </component>
                        <span v-text="scope.row[col.name]"></span>
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
    import Vue from 'vue';

    export default {
        name: 'vueTable',
        props: {
            column: Array,
            list: Array,
            pageDto: Object
        },
        computed: {
            // 使用过滤器
            filteredData() {

              var filterMap = {};
              this.column.forEach(function (value, index) {
                  
                  if (!value.dealTemplate) {
                      filterMap[value.name] = Vue.filter(value.type);
                  } 

              });
      
              this.list.forEach(function (value, index) {
                  for (name in filterMap)  {
                      value[name] = (filterMap[name])(value[name]);
                  }
              });

              return this.list;
            }
        },
        methods: {
            handleSizeChange(val) {
                this.pageDto.pageSize = val;
                this.$emit('get-list', this.pageDto);
            },
            handleCurrentChange(val) {
                this.pageDto.pageNum = val;
                this.$emit('get-list', this.pageDto);
            }
        }
    }
</script>