// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mock from './mock'
import './assets/css/custom.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Mock.init();

/* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    render: h =>h(App)
  });
