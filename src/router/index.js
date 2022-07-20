import Vue from 'vue'
import Router from 'vue-router'
import RouterPaths from './routes.js'
import store from '../store'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
import axios from '../common/axios.js'
import * as api from '../api.js'
import {PlatCode} from '../common/plat.js'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: RouterPaths
})
//  1、前端页面操作日志记录
//  2、前端权限处理
//  修复刷新 部分状态丢失问题
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(next)
//   if (to.path === '/login'  || to.path === '/error/permissions') {
//     // let operateLog = {
//     //   platCode: PlatCode
//     // }
//     // if (to.path === '/login') {
//     //   operateLog.pageCode = '登录界面'
//     //   operateLog.functionCode = '访问登录界面'
//     // } else if (to.path === '/register') {
//     //   operateLog.pageCode = '用户注册界面'
//     //   operateLog.functionCode = '访问用户注册界面'
//     // } else {
//     //   operateLog.pageCode = '错误界面'
//     //   operateLog.functionCode = '访问错误界面界面'
//     // }
//     // axios.post(api.SYS_LOG_OPERATE, operateLog)
//     next()
//   } else {
//     //  判断是否已经登录
//     if (store.getters.getToken) {
//       if (to.path === '/') {
//         next()
//       } else {
//         let flag = true
//         // var menuItem = {}
//         // for (var i = 0; i < menus.length; i++) {
//         //   if (to.path === menus[i].href) {
//         //     menuItem = menus[i]
//         //     flag = true
//         //     break
//         //   }
//         // }
//         if (flag) {
//           let pageName = getMenuName(to.path)
//           let operateLog = {
//             platCode: PlatCode,
//             pageCode: pageName,
//             functionCode: '访问' + pageName + '界面',
//             createUser: store.getters.currentUser
//           }
//           // // 此处添加页面操作日志记录
//           //axios.post(api.SYS_LOG_OPERATE, operateLog)
//           next()
//         } else {
//           next('/error/permissions')
//         }
//       }
//     } else {
//       // 用户尚未登录 跳转到登录界面
//       next('/login')
//     }
//   }
// })

// 获取当前路径菜单名称
export const getMenuName = (path) => {
  let menus = store.getters.accessedMenus
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].href === path) {
      return menus[i].name
    }
  }
  return null
}

router.beforeEach((to, from, next) => {
  // if (from.path !== 'login') {
  //   // NProgress.start()
  // }
  next()
})

router.afterEach(() => {
  // NProgress.done()
})
export default router
