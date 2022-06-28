import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login.vue'
import Home from '../pages/Home.vue'
import Overview from '../pages/Overview.vue'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/overview',
      children: [{
        name: "Overview",
        path: "/overview",
        component: Overview
      }]
    },
    // {
    //   path: '/overview',
    //   name: 'Overview',
    //   component: Overview,
    // },
  ]
})
