import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      component: Login
    },{
      path:'/home',
      name:'后台登录主界面',
      component: Home
    }
  ]
})
