import store from '../store'
/*
1、采用全局方法与vuex 状态管理实现数据的检索和存储
2、全局方法检索是否存在该权限
*/
export function hasPermission (permissionCode) {
  var flag = false
  store.getters.accessedFunctions.forEach(v => {
    if (v === permissionCode) {
      flag = true
    }
  })
  return flag
  // let btns = store.getters.btns
  // if (btns.findIndex(x => x === permissionCode) === -1) {
  //   return true
  // } else {
  //   return false
  // }
}
