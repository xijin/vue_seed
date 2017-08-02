<template>
    <el-dialog :title="permissionId? '编辑权限': '添加权限'" :visible.sync="$parent.isVisible">
      <el-form :model="permission" ref="permission">
        <el-form-item label="业务系统" :label-width="formLabelWidth">
         
          <el-col :span="11">
            
            <el-input v-model="appName" :disabled="true" auto-complete="off"></el-input>
          </el-col>

        </el-form-item>

        <el-form-item 
          prop="name"
          :rules=rules.name
          label="权限名称" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="permission.name"  auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item 
          prop="tag"
          :rules=rules.tag
          label="tag" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="permission.tag"  
            auto-complete="off"></el-input>
          </el-col>
          <el-col><small>命名规范：XXXX</small></el-col>
        </el-form-item>

        <el-form-item 
          prop="comment"
          :rules=rules.comment
          label="备注" :label-width="formLabelWidth">
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
    import MessageUtil from '@/common/utils/messageBoxUtil';

    export default {
      data () {
          return {
              formLabelWidth: '200px',
              roleTag: null,
              permission: {},
              checkedPermission: [],
              rules: rules
          };
      },
      computed: {
          permissionId: function () {
              return (this.$store.state.Permission.permission || {}).id;
          },
          appName: function () {
              return (this.$store.state.Permission.permission || {}).appName || this.$parent.appName;
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
                      that.appName = res.data.appName
                  
                  }, function (res) {

                  });
          },
          cancel: function () {
              this.$parent.isVisible = false; 
          },
          confirm: function () {
              var that = this;
              var permission = this.permission; 
              var params = {
                  id: permission.id,
                  appId: this.permissionId? permission.appId : this.$parent.query.appId,
                  name: permission.name,
                  tag: permission.tag,
                  comment: permission.comment

              };

              that.$refs['permission'].validate(function (valid) {
                 
                  if (valid) {
                      request.updatePermission(params).then(function (res) {
                          
                          MessageUtil.showMessage(that, '操作成功');
                          that.$parent.getList();

                          that.$parent.isVisible = false;
                      
                      }, function (res) {

                      })
                  }
                  else {
                      MessageUtil.showMessage(that, '表单未验证通过');
                  }
               
              });
          }
    }
  }
    const rules = {
        name: [{ 
            required: true, 
            message: '请输入权限名称', 
            trigger: 'blur'
        }],
        tag: [{ 
            required: true, 
            message: '请输入权限tag', 
            trigger: 'blur'
        }],
        comment: [{ 
          max: 50,  
          message: '不超过50个字符', 
          trigger: 'blur'
        }]
    };


</script>