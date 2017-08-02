<template>
    <div>
    <div class="header">
        <h4>
              <label class="left-title">
                  <span>用户管理</span>
              </label>>>
              <small> {{title}}管理</small>
          </h4>
          <hr/>
      </div>
      <div class="left-nav">
          <div>
                <ul class="list-unstyled">
                    <li 
                        v-on:click="isCurrent('accounts')"
                        :class="{'cur': hash=='accounts'}" >
                        <a href="#/accounts">
                            <i class="icon icon-monitor"></i>
                            <span>账号管理</span>
                        </a>
                    </li>
                    <li 
                        v-on:click="isCurrent('roles')"
                        :class="{'cur': hash=='roles'}">
                        <a href="#/roles">
                            <i class="icon icon-home"></i>
                            <span>角色管理</span>
                        </a>
                    </li>
                    <li 
                       
                        v-on:click="isCurrent('permission')"
                        :class="{'cur': hash=='permission'}">
                            <a href="#/permission"> 
                                <i class="icon icon-statistics"></i>
                                <span>权限管理</span>
                            </a>
                    </li>
                    <li 
                        
                        v-on:click="isCurrent('logs')"
                        :class="{'cur': hash=='logs'}">
                        <a href="#/logs">
                            <i class="icon icon-tool"></i>
                            <span>操作日志</span>
                        </a>
                    </li>
                </ul>
          </div>
  </div>
</div>

</template>

<style lang="less" src="./style.less" scoped></style>

<script >
    import authManage from '@/common/utils/authManage.js';

    var titles = {
        accounts: '账号',
        roles: '角色',
        logs: '日志',
        permission: '权限'
    };
    export default {
        name: 'leftTab',
        data () {
            var hash = window.location.hash.split('#/')[1]
            return {
                hash: hash,
                title: titles[hash]
            }
        },
        methods: {
            isCurrent: function (hash) {
                this.hash = hash;
                this.title = titles[hash];
            },
            showAccount: function () {
                return authManage.showAccount(this.$root.userInfo || {});
            },
            showRole: function () {
                return authManage.showRole(this.$root.userInfo || {});
            },
            showPermission: function () {
                return authManage.showPermission(this.$root.userInfo || {});
            },
            showLog: function () {
                return authManage.showLog(this.$root.userInfo || {});
            }
        }
    }
</script>