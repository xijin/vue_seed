<template>
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
</template>
<style lang="less" src="./style.less" scoped></style>
<script >
    export default {
        name: 'leftTab',
        data () {
            return {
                hash: window.location.hash.split('#/')[1]
            }
        },
        methods: {
            isCurrent: function (hash) {
                this.hash = hash;
            }
        }
    }
</script>