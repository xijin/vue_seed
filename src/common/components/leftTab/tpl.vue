<template>
    <div>
    <div class="header">
        <h4>
              <label class="left-title">
                  <span>用户管理</span>
              </label>》
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
                        <router-link to="accounts">
                            <i class="icon icon-monitor"></i>
                            <span>账号管理</span>
                        </router-link>
                    </li>
                    <li 
                        v-on:click="isCurrent('roles')"
                        :class="{'cur': hash=='roles'}">
                        <router-link to="roles">
                            <i class="icon icon-home"></i>
                            <span>角色管理</span>
                        </router-link>
                    </li>
                    <li 
                        v-on:click="isCurrent('permission')"
                        :class="{'cur': hash=='permission'}">
                            <router-link to="permission"> 
                                <i class="icon icon-statistics"></i>
                                <span>权限管理</span>
                            </router-link>
                    </li>
                    <li 
                        v-on:click="isCurrent('logs')"
                        :class="{'cur': hash=='logs'}">
                        <router-link to="logs">
                            <i class="icon icon-tool"></i>
                            <span>操作日志</span>
                        </router-link>
                    </li>
                </ul>
          </div>
  </div>
</div>

</template>
<style lang="less" src="./style.less" scoped></style>
<script >
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
            }
        }
    }
</script>