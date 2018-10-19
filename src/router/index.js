import Vue from 'vue'
import Router from 'vue-router'
import {SystemRouter} from './systemRouter'

Vue.use(Router);
let routesArr = [];
SystemRouter.forEach(function (value) {
    routesArr.push(value);
  }
);

const router = new Router({
  routes: routesArr
});
export default router
