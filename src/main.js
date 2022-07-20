// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './common/axios.js'

import Element from 'element-ui'
import './assets/css/themes/index.css'

// import 'element-ui/lib/theme-chalk/index.css'
import './assets/app.css'
import './assets/icon/iconfont.css'
import 'jquery'

import * as echarts from 'echarts'
require('./mock/mock');//运行mock
// process.env.VUE_APP_MOCK === 'true' && require('./mock/mock.js')

// import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
