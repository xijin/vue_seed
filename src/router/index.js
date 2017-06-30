import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/views/account/tpl.vue'
import Role from '@/views/role/tpl.vue'
import Permission from '@/views/permission/tpl.vue'
import Log from '@/views/logs/tpl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/accounts'
    },
    {
      path: '/accounts',
      name: 'account',
      component: Account
    },
    {
      path: '/roles',
      name: 'role',
      component: Role
    },
    {
      path: '/logs',
      name: 'log',
      component: Log
    },
    {
      path: '/permission',
      name: 'permission',
      component: Permission
    }
  ]
})
