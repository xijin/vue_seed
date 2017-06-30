<template>
    <div id="views-account">
        <el-form ref="query" :model="query" class="query-filter">
            <el-row>
                    <el-col :span="6">
                        <el-form-item label="业务系统">
                            <el-col :span="15">
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
                        <el-form-item label="角色">
                            <el-col :span="16">

                                <el-select 
                                    @change="getList"
                                    v-model="query.roleTag" placeholder="请选择角色">
                                    <el-option label="全部" value="-1"></el-option>
                                    <el-option
                                        v-for="role in roles"
                                        :key=role.tag 
                                        :label=role.name
                                        :value=role.tag
                                        >    
                                    </el-option>
                                    
                                </el-select>
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
                    <el-col :span="4">
                        <el-form-item >    
                             <el-button 
                                type="primary" 
                                @click="getList">查询
                                </el-button>
                              <el-button 
                                type="primary"
                                :disabled="query.appId==-1"
                                @click="addAccount">添加账号
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
        <account-info v-if="isVisible"></account-info>
    </div>
    
</template>
<style lang="less" src="./style.less"></style>
<script src="./index.js"></script>
