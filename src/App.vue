<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-inverse top-nav" role="navigation">
        <div class="container-fluid clearfix">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header pull-left">
                <a class="navbar-brand logo" href="#">
                <img  src=""></a>
            </div>
            <div class="collapse navbar-collapse pull-right">
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="userInfo.hasRoles&&userInfo.hasRoles.length <= 1">
                         <a>欢迎你，<span v-text="userInfo.displayName"></span></a>
                    </li>
                    <li class="dropdown" v-if="userInfo.hasRoles&&userInfo.hasRoles.length >=2">
                        <a href="#" class="dropdown-toggle"
                           v-on:click="toggleRoleDialog"
                           >
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>

                            欢迎你，<span v-text="userInfo.displayName"></span>
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu role-menu" role="menu">
                            <li v-for="item in userInfo.hasRoles" :class="{'bg-info': userInfo.currentRole.tag == item.tag}">
                                <a href="javascript:;" :tag="item.tag" v-on:click="switchIdentity(item.tag)">{{item.name}}</a>
                            </li>
                        </ul>
                    </li>
                    <li><a :href="env['cas.app.logout']">退出</a></li>
                </ul> 
            </div>
        </div>
        <!-- /.container-fluid -->
    </nav>
    <div class="app-container wrapper clearfix">
          <left-tab></left-tab>
          <div class="right">
              <router-view></router-view>
          </div>
    </div>
    <div class="footer">
        Copyright © 2017 zhanwt 版权所有.
    </div>

  </div>
</template>

<script>

import commonRequest from './commonRequest';
import $ from 'jquery';
import cookie from 'js-cookie/src/js.cookie';
import leftTab from './common/components/leftTab/tpl.vue';
require('./common/utils/analyze')('bpg_yunying_ucenter');

export default {
  name: 'app',
  components: {leftTab},
  data() {
    return {
        userInfo: {},
        env: {}
    };
  },
  mounted() {
      this.checkLogin();
  },
  methods: {
    /**
     * 检查登录
     * 
     */
    checkLogin() {
        var that = this;
        commonRequest
            .loginIn()
            .then(function (res) {

                if (res.status !== 200) {
                    window.location.href = 'main.do';
                }

                var data = res.data;
                var result;
                if (data.accountDto) {
                    result = data.accountDto;
                } else {
                    result = data;
                }
                result.originType = data.type;
                var curRole = data.currentRole || (data.accountDto && data.accountDto.currentRole);
                result.permission = curRole.hasPermissions;
                result.curRole = curRole;
                result.loginAccount = data.loginAccount;
                result.openRoleUid = curRole.openRoleUid;
                that.$root.userInfo = result;
                that.userInfo = result;
                that.$store.commit('USER_INFO', result);


                commonRequest
                .logout().then(function (res) {
                  
                  that.env = res.data;

                });
            }
        );
    },
    /**
     * 切换角色
     * @param  {[type]} tag [description]
     * @return {[type]}     [description]
     */
    switchIdentity: function (tag) {
        var tag = cookie.set('CAS_AC_CURRENT_ROLE', tag);
        window.location.reload();
    },
    toggleRoleDialog: function () {
        $('.role-menu').toggle();
    }
  } 
}

</script>
<style lang="less" src="../static/resource/css/style.less"></style>
<style lang="less" src="bootstrap/less/bootstrap.less"></style>
<style lang="less" src="./app.less"></style>