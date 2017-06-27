<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-inverse top-nav" role="navigation">
        <div class="container-fluid clearfix">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header pull-left">
                <a class="navbar-brand logo" href="#">
                <img alt="brand" src="/static/resource/img/logo.png"></a>
            </div>
            <div class="collapse navbar-collapse pull-right">
                <!-- <ul class="nav navbar-nav navbar-right">
                  <li ng-class="{'active':isFirstActive('homepage')}">
                    <a href="#/homepage">
                      <div>
                        <i class="glyphicon glyphicon-home"></i>
                        首页
                      </div>
                    </a>
                  </li>
                    <li ng-repeat="item in navTabs" ng-class="{'active': isFirstActive(item.url)}">
                        <a href="#{{item.url}}" ng-if="!item.items">
                            <span class="glyphicon {{item.iconClass}}" aria-hidden="true"></span>
                            <span ng-bind="item.text" class="font-color"></span>
                        </a>
                        <a
                          ng-if="item.items && item.items.length" class="dropdown-toggle"
                           ng-click="toggleMenu(item.id)">
                            <span class="glyphicon {{item.iconClass}}" aria-hidden="true"></span>
                            <span ng-bind="item.text" class="font-color"></span>
                            <span class="caret"></span>
                        </a>
                        <ul ng-if="item.items && item.items.length" class="dropdown-menu menu-{{item.id}}" role="menu" ng-click="toggleMenu(item.id)">
                            <li ng-repeat="child in item.items">
                                <a href="#{{child.url}}">
                                    <span class="glyphicon {{child.iconClass}}" aria-hidden="true"></span>
                                    <span ng-bind="child.text" class="font-color"></span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li ng-if="userInfo.hasRoles.length <= 1">
                         <a>欢迎你，<span ng-bind="userInfo.displayName"></span></a>
                    </li>
                    <li class="dropdown" ng-if="userInfo.hasRoles.length >=2 ">
                        <a href="#" class="dropdown-toggle"
                           ng-click="toggleRoleDialog()">
                            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>

                            欢迎你，<span ng-bind="userInfo.displayName"></span>
                            <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu role-menu" role="menu">
                            <li ng-repeat="item in userInfo.hasRoles" ng-class="{'bg-info': isCurrentRole(item.tag)}">
                                <a href="javascript:;" tag="{{item.tag}}" ng-click="switchIdentity(item.tag)">{{item.name}}</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="{{env['cas.app.logout']}}">退出</a></li>
                </ul> -->
            </div>
        </div>
        <!-- /.container-fluid -->
    </nav>
    <div class="app-container wrapper">

        <div class="sub-nav">
            <ul class="nav nav-pills">
<!--                 <li ng-repeat="item in navScd"
                    ng-class="{'active': isScdActive('/' + item.id)}"
                        >
                    <a href="#/{{item.id}}"
                       ng-bind="item.title"></a>
                </li> -->
            </ul>
        </div>
        <router-view></router-view>
    </div>
    <div class="footer">
        Copyright © 2014 - 2017 跟谁学版权所有.
    </div>

  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}

import ajaxService from "./common/utils/ajaxService";
ajaxService.send('/manage/getAuth.json', {data: {}});

</script>
<style lang="less" src="./common/resource/css/style.less"></style>
<style lang="less" src="bootstrap/less/bootstrap.less"></style>
