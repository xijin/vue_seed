<template>
    <div id="views-role">
        <el-form ref="query" :model="query" class="query-filter">
            <el-row>
                    <el-col :span="6">
                        <el-form-item label="业务系统">
                            <el-col :span="15">
                                <el-select
                                    @change="getList" 
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
                    <el-col :span="4">
                        <el-form-item label="状态">
                            <el-col :span="15"
                                >
                                <el-select 
                                @change="getList"
                                v-model="query.status">
                                    <el-option label="启用" value="0"></el-option>
                                    <el-option label="禁用" value="1"></el-option>
                                </el-select>   
                            </el-col>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item >    
                              <el-button 
                                type="primary"
                                class="analysis-habo-log"
                                data-habo-stype='monitor_role_add'
                                :disabled="query.appId==-1"
                                @click="addRole">添加角色
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
        <update-role v-if="isVisible"></update-role>
    </div>
    
</template>
<style lang="less" src="./style.less"></style>
<script src="./index.js"></script>
