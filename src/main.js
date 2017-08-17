// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
require('./common/filters');
import App from './App'
import router from './router'

import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import store from './store/index';
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
var instance  = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store
});

window.tips = function(msg, type) {
    var type = type || 'warning';
    ElementUI.Message({
        type: type,
        message: msg
    });
}
