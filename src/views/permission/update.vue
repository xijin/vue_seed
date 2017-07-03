<template>
    <el-dialog :title="permissionId? '编辑权限': '添加权限'" :visible.sync="$parent.isVisible">
      <el-form :model="permission" ref="permission">
        <el-form-item label="业务系统" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="appName" :disabled="true" auto-complete="off"></el-input>
          </el-col>

        </el-form-item>

        <el-form-item label="权限名称" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="permission.name"  auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="tag" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="permission.tag"  
            auto-complete="off"></el-input>
          </el-col>
          <el-col><small>命名规范：XXXX</small></el-col>
        </el-form-item>

        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="permission.comment"  
            type="textarea"
            placeholder="不得超过50个字"
            auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
          <el-col :offset="5" :span="13" class="red">注：权限创建完毕后，仍需手动配置以生效</el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </div>
    </el-dialog>
</template>
<script>
    import request from './request.js';

    export default {
      data () {
          return {
              formLabelWidth: '200px',
              roleTag: null,
              permission: {},
              checkedPermission: []
          };
      },
      computed: {
          permissionId: function () {
              return (this.$store.state.Permission.permission || {}).id;
          },
          appName: function () {
              return this.$parent.appName;
          }
      },
      created() {
          this.getPermissionDetail();
          
      },
      methods: {
          // 获取当前角色详情
          getPermissionDetail: function () {
              var that = this;
              
              if (!that.permissionId) {
                  return ;
              }

              request
                  .getPermissionDetail({id: that.permissionId})
                  .then(function (res) {

                      that.permission  = res.data;
                  
                  }, function (res) {

                  });
          },
          cancel: function () {
              this.$parent.isVisible = false; 
          },
          confirm: function () {
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
              this.$parent.isVisible = false; 
          }
      }
    };


</script>