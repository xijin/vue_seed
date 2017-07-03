<template>
    <el-dialog :title="roleId? '编辑角色': '添加角色'" :visible.sync="$parent.isVisible">
      <el-form :model="role" ref="role">
        <el-form-item label="业务系统" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="appName" :disabled="true" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="role.name"  auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="角色tag" :label-width="formLabelWidth">
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
              appName: null
          };
      },
      computed: {
          roleId: function () {
              return (this.$store.state.Role.role || {}).id;
          }
      },
      created() {
          this.getSysRoleInfo();
          
      },
      methods: {
          // 获取该系统账号体系信息 
          getSysRoleInfo: function () {
              var that = this;

              commonRequest
                .getSelectInfo(
                    {
                        appId: this.$parent.appId,
                        roleTag: that.role.tag
                    })
                .then(function (res) {

                    var app = res.data[0];
                    that.appName = app.name;
                    that.permission = app.roles[0].hasPermissions;
                    
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
                  })
              };

              request.updateRole(params).then(function (res) {

                  MessageUtil.showMessage(that, '操作成功');
                  that.$parent.getList();
                  that.$parent.isVisible = false; 
              
              }).catch(function (res) {

              });

              this.$parent.isVisible = false; 
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


</script>