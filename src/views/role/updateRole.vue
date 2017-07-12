<template>
    <el-dialog :title="roleId? '编辑角色': '添加角色'" :visible.sync="$parent.isVisible">
      <el-form :model="role" ref="role">
        <el-form-item label="业务系统" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="appName" :disabled="true" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item 
            prop="name"
            :rules=rules.name
          label="角色名称" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="role.name"  auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item 
            prop="tag"
            :rules=rules.tag
          label="角色tag" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="role.tag"  
            :disabled=!!roleId
            auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="formLabelWidth">
                <el-checkbox-group 
                  v-model="checkedPermission" 
                  >
                      <el-checkbox 
                        v-for="cell in permission" 
                        :label="cell"
                        :value="cell.tag"
                        :key="cell.tag">
                        {{cell.name}}  
                    </el-checkbox>
                </el-checkbox-group>
          
        </el-form-item>
          <el-form-item 
          label="父角色名称" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input
              :disabled="true"
              v-if="roleId" 
              v-model="role.parentRoleName"  
              auto-complete="off">  
              </el-input>

              <el-select 
                  v-if="!roleId"
                  v-model="parentRoleTag" placeholder="请选择角色">
                <el-option
                    v-for="role in parentRoles"
                    :key=role.tag 
                    :label=role.name
                    :value=role.tag
                    >    
                </el-option>
            </el-select>

          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
</template>
<script>
    import request from './request.js';
    import commonRequest from '@/commonRequest.js';
    import MessageUtil from '@/common/utils/messageBoxUtil';

    export default {
      data () {
          return {
              formLabelWidth: '200px',
              
              role: {},
              roleTag: null,
              permission: [],
              checkedPermission: [],
              appName: null,
              rules: rules,
              parentRoles: [],
              parentRoleTag: ''
          };
      },
      computed: {
          roleId: function () {
              return (this.$store.state.Role.role || {}).id;
          },
          appId: function () {
              return (this.$store.state.Role.role || {}).appId;
          }
      },
      created() {
          this.getSysRoleInfo();
          this.getParentRoles();
      },
      methods: {
          // 获取该系统账号体系信息 
          getSysRoleInfo: function () {
              var that = this;
              commonRequest
                .getAllPermission(
                    {
                        appId: that.roleId? this.appId : this.$parent.query.appId
                    })
                .then(function (res) {

                    var data = res.data;
                    that.appName = data.appName;
                    that.permission = data.list;
                    that.getRoleDetail();
                
                }, function (res) {

                });
          },
          // 获取当前角色详情
          getRoleDetail: function () {
              var that = this;
              
              if (!that.roleId) {
                  return ;
              }

              request
                  .getRoleDetail({id: that.roleId})
                  .then(function (res) {

                      that.role  = res.data;
                      initChecked(that);
                  
                  }, function (res) {

                  });
          },
          getParentRoles: function () {
            var that = this;
              commonRequest
                .getSelectInfo(
                    {
                        appId: that.roleId? this.appId : this.$parent.query.appId
                    })
                .then(function (res) {
                
                    that.parentRoles =  res.data[0].roles;
                
                }, function (res) {

                });
          },
          selectRole: function (val) {
            
              var that = this;
              this.app.roles.filter(function (role, index) {
                  if (role.tag === val) {
                      that.permission = role.hasPermissions;
                  }
              });
        
          },
          cancel: function () {
              this.$parent.isVisible = false; 
          },
          confirm: function () {
              var that = this;
              var role = this.role; 
              var params = {
                  id: role.id,
                  appId: this.$parent.appId,
                  name: role.name,
                  roleTag: role.tag,
                  hasPermissions: this.checkedPermission.map(function (val) {
                      return val.tag
                  }),
                  parentRoleTag: this.roleId? undefined : this.parentRoleTag
              };
             that.$refs['role'].validate(function (valid) {
                  
                  if (valid) {
                      request.updateRole(params).then(function (res) {

                          MessageUtil.showMessage(that, '操作成功');
                          that.$parent.getList();
                          that.$parent.isVisible = false; 
                      
                      }).catch(function (res) {

                      });
                  }
                  else {
                      MessageUtil.showMessage(that, '信息未填写完整');
                  }
                });
          }
      }
    };

    /**
     * 初始化选中
     */
    
    function initChecked(context) {

        var permission = context.permission || [];
        var role = context.role;
        var checkedPermission = context.checkedPermission = [];
        var roleLength = role.hasPermissions.length;
        
        for (var j = 0; j < roleLength; j++) {
            
            var per = role.hasPermissions[j];
            var length = permission.length;

            for (let i = 0; i < length; i++) {
                if (permission[i].tag === per.tag) {
                    checkedPermission.push(permission[i]);
                }
            }
       }
    }
    const rules = {
        name: [{ 
            required: true, 
            message: '请输入角色名称', 
            trigger: 'blur'
        }],
        tag: [{ 
            required: true, 
            message: '请输入角色tag', 
            trigger: 'blur'
        }]
    };


</script>