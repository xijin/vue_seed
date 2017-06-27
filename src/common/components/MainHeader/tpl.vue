<template>
    <div class="container-fluid clearfix cnavigator">
        <div class="pull-left nav-left">
            <ul>
                <li>
                    <a href="http://www.genshuixue.com" target="_bllank">跟谁学首页</a>
                </li> 
                <li>
                    <span class="fa fa-mobile"></span>
                    <a href="http://www.genshuixue.com/static/app" target="_bllank">手机跟谁学</a>
                </li>
            </ul>
        </div>
        <div class="pull-right">
            <ul>
                <!-- <li class="gap-mark">
                    您好，<span ng-bind="userInfo.displayName"></span>
                </li>
                <li class="dropdown gap-mark" ng-show="hasRoles">
                    <a href="#" class="dropdown-toggle font-color"
                       data-toggle="dropdown">
                        <span v-bind="userInfo.roleName"></span>
                        <span>切换</span>
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu nav-dropdown-menu" role="menu">
                        <li ng-repeat="role in userInfo.hasRoles" ng-click="changeRole(role.id)"><a :href="'#'+role.page">切换到<label v-bind="role.title"></label></a></li>
                    </ul>
                </li>
                <li class="gap-mark">
                    <a href="http://www.genshuixue.com/guide/feedback?a=feedback" target="_bllank">提建议</a>
                </li>
                <li>
                    <a :href="env['cas.app.logout']">退出</a>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<style lang="less" src="./style.less" scoped></style>
<script>

    export default {
        data () {
            return {
               //  user: window.user
            };
        },
        methods: {
            changeRole: function () {

            }
        }
    }
</script>