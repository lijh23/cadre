import axios from 'axios'
import {PlatID} from '../common/plat.js'
import store from '../store'
import router from '../router'
// import { AES_DESCRYPT } from '@/utils/aesUtils.js'
import * as api from '@/api.js'
import { Message } from '../../node_modules/element-ui'
// 基础配置
axios.defaults.timeout = 120000
//  平台验证 保证Session能够传输
axios.defaults.withCredentials = true
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.baseURL = api.SERVER_URI
//  全局访问添加token
axios.interceptors.request.use(config => {
  //  在web Header里添加 平台编码
  config.headers.pid = PlatID
  if (store.getters.getToken && config.url.indexOf('login') < 0) {
    config.headers.token = store.getters.getToken
  }
  return config
})
//  全局响应统一处理
//  错误信息拦截提示
axios.interceptors.response.use(response => {
  var data = response.data
//   var decodeData = AES_DESCRYPT(data)
  response.data = JSON.parse(data)
  if (response.data.status === 200 || response.config.url.indexOf('/yanan/sys/checkRegistValidateCode') !== -1) {
    return response
  } else {
    Message({
      message: response.data.msg,
      type: 'error'
    })
    let error = {
      platCode: PlatID,
      errorCode: response.data.status,
      errorMsg: response.data.msg,
      requestAddress: response.config.url,
      requestMode: response.config.method
    }
    this.axios.post(api.APP_ERROR_API, error)
  }
  return response
}, error => {
  if (error && error.response) {
    var message
    switch (error.response.status) {
      case 400:
        Message({
          message: '请求无效',
          type: 'error'
        })
        error.response.message = '请求无效'
        break
      case 401:
        Message({
          message: '未授权请重新登录',
          type: 'error'
        })
        error.response.message = '未授权请重新登录'
        router.push({name: 'login'})
        break
      case 403:
        Message({
          message: '用户权限不足,拒绝访问',
          type: 'error'
        })
        error.response.message = '用户权限不足,拒绝访问'
        message = {
          name: '抱歉，您没有访问权限',
          describe: 'We are Sorry,you have no access permissions！'
        }
        router.push({name: 'no-permissions', query: { message: JSON.stringify(message) }})
        break
      case 404:
        Message({
          message: '请求错误，未找到该资源',
          type: 'error'
        })
        error.response.message = '请求错误，未找到该资源'
        message = {
          name: '抱歉，未找到该资源',
          describe: 'We are Sorry, this resource was not found！'
        }
        router.push({name: 'no-permissions', query: { message: JSON.stringify(message) }})
        break
      case 405:
        Message({
          message: '请求方法未允许',
          type: 'error'
        })
        error.response.message = '请求方法未允许'
        message = {
          name: '抱歉，请求方法未允许',
          describe: 'We are Sorry, the request method is not allowed！'
        }
        router.push({name: 'no-permissions', query: { message: JSON.stringify(message) }})
        break
      case 407:
        Message({
          message: '非法请求，无权限访问',
          type: 'error'
        })
        error.response.message = '非法请求，无权限访问'
        message = {
          name: '抱歉，您无权限访问',
          describe: 'We are Sorry, you have no access！'
        }
        router.push({name: 'no-permissions', query: { message: JSON.stringify(message) }})
        break
      case 408:
        Message({
          message: '请求超时',
          type: 'error'
        })
        error.response.message = '请求超时'
        message = {
          name: '抱歉，请求超时',
          describe: 'We are Sorry, request timeout！'
        }
        router.push({name: 'no-permissions', query: { message: JSON.stringify(message) }})
        break
      case 500:
        Message({
          message: '服务器访问异常',
          type: 'error'
        })
        error.response.message = '服务器访问异常'
        message = {
          name: '抱歉，服务器访问异常',
          describe: 'We are Sorry, server access exception！'
        }
        // router.push({name: 'no-permissions', query: { message: JSON.stringify(message) }})
        break
    }
    let errorInfo = {
      platCode: PlatID,
      errorCode: error.response.status,
      errorMsg: error.response.message,
      requestAddress: error.response.config.url,
      requestMode: error.response.config.method
    }
    this.axios.post(api.APP_ERROR_API, errorInfo)
  }
  return error.response
})
export default axios
