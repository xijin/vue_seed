import Vue from 'vue'
import Router from 'vue-router'
import Log from '@/views/logs/tpl.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/logs'
    },
    {
      path: '/logs',
      name: 'log',
      component: Log
    }
  ]
})
