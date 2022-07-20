import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import * as api from '../api.js'
import * as AppData from '@/common/data.js'
import vuexAlong from 'vuex-along'
Vue.use(Vuex)
// vuexAlong.onlySession(true)
const store = new Vuex.Store({
  // plugins: [vuexAlong],
  getters: {
    regions: state => state.regions,
    securityList: state => state.securityList,
    activeMenu: state => state.activeMenu,
    currentMenu: state => state.currentMenu,
    menuState: state => state.menuState,
    getToken: (state) => state.token,
    sysMenu: (state) => AppData.DefaultMenu,
    accessedMenus: (state) => state.accessedMenus,
    currentUser: (state) => state.currentUser,
    accessedFunctions: (state) => state.accessedFunctions,
    userEmail: (state) => state.userEmail
  },
  state: {
    regions: [],
    securityList: [
      {
        code: '1',
        name: '共享'
      },
      {
        code: '2',
        name: '保密'
      },
      {
        code: '3',
        name: '机密'
      },
      {
        code: '4',
        name: '绝密'
      }
    ],
    activeMenu: '/overview',
    currentMenu: [],
    sysMenu: [],
    menuState: 'expand',
    token: '',
    accessedMenus: [],
    currentUser: '',
    accessedFunctions: [],
    userEmail: ''
  },
  mutations: {
    app_regions (state, regions) {
      state.regions = regions
    },
    menuChanges (state, menu) {
      state.activeMenu = menu
    },
    currentMenu (state, currentMenu) {
      state.currentMenu = currentMenu
    },
    sysMenu (state, sysMenu) {
      state.sysMenu = sysMenu
    },
    setMenuState (state, menuState) {
      state.menuState = menuState
    },
    setToken (state, token) {
      state.token = token
      sessionStorage.token = token
    },
    delToken (state) {
      state.token = ''
      sessionStorage.removeItem('token')
    },
    setAccessedMenus (state, accessedMenus) {
      state.accessedMenus = accessedMenus
      sessionStorage.accessedMenus = accessedMenus
    },
    setCurrentUser (state, currentUser) {
      state.currentUser = currentUser
      sessionStorage.currentUser = currentUser
    },
    setAccessedFunctions (state, accessedFunctions) {
      state.accessedFunctions = accessedFunctions
      sessionStorage.accessedFunctions = accessedFunctions
    },
    setUserEmail (state, userEmail) {
      state.userEmail = userEmail
      sessionStorage.userEmail = userEmail
    }
  },
  actions: {
    loadRegions: ({commit}) => {
      axios.get(api.SYS_REGION).then(res => {
        commit('app_regions', res.data.data)
      }).catch(exp => commit('app_regions', []))
    }
  }
})

export default store
