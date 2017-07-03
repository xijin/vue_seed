<template>
    <div id="views-logs">
        <el-form ref="query" :model="query" class="query-filter">
            <el-row>
                    <el-col :span="4">
                        <el-form-item label="业务系统">
                            <el-col :span="12">
                                <el-select
                                    @change="changeApp" 
                                    v-model="query.appId" placeholder="请选择业务系统">
                                    <el-option label="全部" value="-1"></el-option>
                                    <el-option
                                        v-for="app in apps"
                                        :key=app.id 
                                        :label=app.name
                                        :value=app.id
                                        >    
                                    </el-option>
                                    
                                    
                                </el-select> 
                            </el-col>  
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="操作对象">
                            <el-col :span="15"
                                >
                                <el-select 
                                @change="getList"
                                v-model="query.object">
                                    <el-option label="全部" value="-1"></el-option>
                                    <el-option
                                        v-for="item in permissions"
                                        :key=item.tag 
                                        :label=item.name
                                        :value=item.tag
                                        >    
                                    </el-option>
                                </el-select>   
                            </el-col>
                        </el-form-item>
                    </el-col>

                    <el-col :span="7">
                        <el-form-item label="操作时间：">
                            <el-col :span="214">
                                <el-date-picker
                                  v-model="operateTime"
                                  type="daterange"
                                  align="right"
                                  placeholder="选择日期范围"
                                  :picker-options="pickerOptions">
                                </el-date-picker>
                            </el-col>   
                        </el-form-item>
                    </el-col>

                    <el-col :span="5">
                        <el-form-item >
                            <el-col :span="22">    
                                <el-input
                                    placeholder="按账号ID，账号，姓名搜索" 
                                    v-model="query.keyword"
                                >
                                </el-input>
                           </el-col>
                        </el-form-item>
                    </el-col>

                    <el-col :span="2">
                        <el-form-item >    
                             <el-button 
                                type="primary" 
                                @click="getList">查询
                                </el-button>
                        </el-form-item>
                    </el-col>
            </el-row>

        </el-form>

        <vue-table
            :column.sync=columnDefs
            :list.sync=list
            :page-dto.sync=pageDto
            @get-list=getList
            >
        </vue-table>
    </div>
    
</template>
<style lang="less" src="./style.less"></style>
<script src="./index.js"></script>
