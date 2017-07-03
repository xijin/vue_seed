<template>
    <el-dialog :title="item.id? '编辑账号': '添加账号'" :visible.sync="$parent.isVisible">
      <el-form :model="item" ref="item">
        <el-form-item label="业务系统" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="app.name" :disabled="true" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="账号使用人" 
          prop="username"
          :rules=rules.username
          :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="item.username" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item 
        prop="displayName"
        :rules=rules.displayName
        label="真实姓名" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="item.displayName" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="EHR岗位信息" 
        :rules=rules.department
        prop="department"
        :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="item.department" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="职位" 
          :rules=rules.title
          prop="title"

          :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="item.title" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="汇报上级" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-input v-model="item.manager" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="添加角色" :label-width="formLabelWidth">
          <el-col :span="11">           
            <el-select 
                @change="selectRole"
                v-if="item.currentRole&&!item.currentRole.tag"
                v-model="roleTag" placeholder="请选择角色">
              <el-option
                  v-for="role in app.roles"
                  :key=role.tag 
                  :label=role.name
                  :value=role.tag
                  >    
              </el-option>
          </el-select>

            <el-input
                v-if="item.currentRole&&item.currentRole.tag"
                v-model="item.currentRole.name"
                :disabled="true"
              > </el-input>

          </el-col>
        </el-form-item>
        <el-form-item label="权限设置" :label-width="formLabelWidth">
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
    import request from '../request.js';
    import commonRequest from '@/commonRequest.js';
    import MessageUtil from '@/common/utils/messageBoxUtil';

    export default {
      data () {
          return {
              formLabelWidth: '200px',
              app: {},
              item: this.$store.state.Account.item || {
                  currentRole: {}
              },
              roleTag: null,
              permission: [],
              checkedPermission: [],
              rules: rules
          };
      },
      created() {
          this.getAccountInfo();
          this.getAccountDetail();
      },
      methods: {
          // 获取该系统账号体系信息 
          getAccountInfo: function () {
              var that = this;
              commonRequest
                .getSelectInfo(
                    {
                        appId: this.$parent.query.appId
                    })
                .then(function (res) {

                  that.app = res.data[0];
                
                }, function (res) {

                });
          },
          // 获取当前账号详情
          getAccountDetail: function () {
              var that = this;
              
              if (!that.item.id) {
                  return ;
              }

              request
                  .getAccountDetail({id: that.item.id})
                  .then(function (res) {

                      that.item  = res.data;
                      that.permission = res.data.currentRole.hasPermissions;
                      that.checkedPermission = that.permission;
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
              var params = {
                  id: this.item.id,
                  appId: this.app.id,
                  userName: this.item.name,
                  roleTag: this.roleTag,
                  hasPermissions: this.checkedPermission.map(function (val) {
                      return val.tag;
                  })
              };
              that.$refs['item'].validate(function (valid) {
                  if (valid) {
                        request.updateAccount(params).then(function (res) {

                            MessageUtil.showMessage(that, '操作成功');
                            that.$parent.getList();
                            that.$parent.isVisible = false; 

                        }).catch(function () {

                        });
                    }
                    else {
                        MessageUtil.showMessage(that, '表单填写不完整！');
                    }
              });

          }
      }
    };

    const rules = {
        username: [{ 
            required: true, 
            message: '请输入账号使用人', 
            trigger: 'blur'
        }],
        displayName: [{ 
            required: true, 
            message: '请输入真实姓名', 
            trigger: 'blur'
        }],
        department: [{ 
            required: true, 
            message: '请输入EHR岗位信息', 
            trigger: 'blur'
        }],
        title: [{ 
            required: true, 
            message: '请输入职位信息', 
            trigger: 'blur'
        }]  
    };

</script>