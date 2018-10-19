import Menu from '../components/Menu'
import ErrorPage from '../components/ErrorPage'
import Login from '../components/Login'
import User from '../components/User'

const SystemRouter = [
  {
    path: '/',
    name: 'login',
    component: Login,
    hidden: true
  },
  {
    path: '/Menu',
    name: '菜单管理',
    component: Menu
  },
  {
    path: '/User',
    name: '用户管理',
    component: User
  },
  {
    path: '/errorPage',
    name: '错误页面',
    component: ErrorPage,
    hidden: true
  }
];
export {
  SystemRouter
}
