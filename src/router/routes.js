import Home from '@/pages/Home'
import login from '@/components/login'
const routes = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('@/components/login')
  // },
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  //   children: [
  //     // {
  //     //   path: '/overview',
  //     //   name: 'overview',
  //     //   component: () => import('@/pages/Overview'),
  //     //   meta: {
  //     //     keepAlive: true
  //     //   }
  //     // },
  //   ]
  // }
 
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/overview',
        name: 'overview',
        component: () => import('@/pages/Overview'),
        meta: {
          keepAlive: true
        }
      },
      {
        path: '/personnelInformation/manage',
        name: 'personnelInformation',
        component: () => import('@/pages/personnelInformation/PersonnelInformation'),
        meta: {
          keepAlive: true
        }
      },
      {
        //干部名册
        path: '/personnelInformation/cadreRegister',
        name: 'cadreRegister',
        component: () => import('@/pages/personnelInformation/CadreRegister'),
        meta: {
          keepAlive: true
        }
      },
      {
        //培训管理
        path: '/personnelInformation/trainReport',
        name: 'trainReport',
        component: () => import('@/pages/personnelInformation/TrainReport'),
        meta: {
          keepAlive: true
        }
      },
      {
        //上传PDF资料
        path: '/personnelInformation/uploadPDF',
        name: 'uploadPDF',
        component: () => import('@/pages/personnelInformation/UploadPDF'),
        meta: {
          keepAlive: true
        }
      },
      {
        //干部实绩导入
        path: '/personnelInformation/importExcel',
        name: 'importExcel',
        component: () => import('@/pages/personnelInformation/ImportExcel'),
        meta: {
          keepAlive: true
        }
      },
      {
        //自定义花名册
        path: '/personnelInformation/customPersonnelInformation',
        name: 'customPersonnelInformation',
        component: () => import('@/pages/personnelInformation/CustomPersonnelInformation'),
        meta: {
          keepAlive: true
        }
      },
      {
        //批量导入
        path: '/personnelInformation/batchImport',
        name: 'batchImport',
        component: () => import('@/pages/personnelInformation/BatchImport'),
        meta: {
          keepAlive: true
        }
      },
      {
        //简历初始化
        path: '/personnelInformation/resumeInitialize',
        name: 'resumeInitialize',
        component: () => import('@/pages/personnelInformation/ResumeInitialize'),
        meta: {
          keepAlive: true
        }
      },
      {
        //初始化标签
        path: '/personnelInformation/initializeLabel',
        name: 'initializeLabel',
        component: () => import('@/pages/personnelInformation/InitializeLabel'),
        meta: {
          keepAlive: true
        }
      },
      {
        //导出人事信息
        path: '/personnelInformation/exportPersonnel',
        name: 'exportPersonnel',
        component: () => import('@/pages/personnelInformation/ExportPersonnel'),
        meta: {
          keepAlive: true
        }
      },
      //单位信息
      {
        //单位信息
        path: '/unitinfo/unitInformation',
        name: 'unitInformation',
        component: () => import('@/pages/unitinfo/UnitInformation'),
        meta: {
          keepAlive: true
        }
      },
      {
        //多单位职数
        path: '/unitinfo/moreUnit',
        name: 'moreUnit',
        component: () => import('@/pages/unitinfo/MoreUnit'),
        meta: {
          keepAlive: true
        }
      },
      {
        //初始化unitcode
        path: '/unitinfo/initB01UnitCode',
        name: 'initB01UnitCode',
        component: () => import('@/pages/unitinfo/InitB01UnitCode'),
        meta: {
          keepAlive: true
        }
      },
      //  //上会管理
      //  {
      //   //单位信息
      //   path: '/unitinfo/unitInformation',
      //   name: 'unitInformation',
      //   component: () => import('@/pages/unitinfo/UnitInformation'),
      //   meta: {
      //     keepAlive: true
      //   }
      // },
      // {
      //   //多单位职数
      //   path: '/unitinfo/moreUnit',
      //   name: 'moreUnit',
      //   component: () => import('@/pages/unitinfo/MoreUnit'),
      //   meta: {
      //     keepAlive: true
      //   }
      // },
      // {
      //   //初始化unitcode
      //   path: '/unitinfo/initB01UnitCode',
      //   name: 'initB01UnitCode',
      //   component: () => import('@/pages/unitinfo/InitB01UnitCode'),
      //   meta: {
      //     keepAlive: true
      //   }
      // },
       //上会管理
       {
        //常委会管理
        path: '/committee/summaryList',
        name: 'summaryList',
        component: () => import('@/pages/committee/SummaryList'),
        meta: {
          keepAlive: true
        }
      },
      {
        //部位会管理
        path: '/committee/reportList',
        name: 'reportList',
        component: () => import('@/pages/committee/ReportList'),
        meta: {
          keepAlive: true
        }
      },
      {
        //档案同步
        path: '/committee/archivesList',
        name: 'archivesList',
        component: () => import('@/pages/committee/ArchivesList'),
        meta: {
          keepAlive: true
        }
      },
       {
        //汇总批次管理
        path: '/committee/summaryBatch',
        name: 'summaryBatch',
        component: () => import('@/pages/committee/SummaryBatch'),
        meta: {
          keepAlive: true
        }
      },
      {
        //上报名单管理
        path: '/committee/reportListManagement',
        name: 'reportListManagement',
        component: () => import('@/pages/committee/ReportListManagement'),
        meta: {
          keepAlive: true
        }
      },
      //智搜
      {
        //智能搜索
        path: '/intelligenceSearch/intelligenceSearch',
        name: 'intelligenceSearch',
        component: () => import('@/pages/intelligenceSearch/IntelligenceSearch'),
        meta: {
          keepAlive: true
        }
      },
      //统计分析
      {
        //智能搜索
        path: '/statistics/statistics',
        name: 'statistics',
        component: () => import('@/pages/statistics/Statistics'),
        meta: {
          keepAlive: true
        }
      },
      //系统管理
      {
        //新字典管理
        path: '/system/newdict',
        name: 'newdict',
        component: () => import('@/pages/system/Newdict'),
        meta: {
          keepAlive: true
        }
      },
      {
        //SWAGGER接口
        path: '/system/swagger-ui',
        name: 'swagger-ui',
        component: () => import('@/pages/system/Swagger-ui'),
        meta: {
          keepAlive: true
        }
      },
      {
        //管理员管理
        path: '/system/user',
        name: 'user',
        component: () => import('@/pages/system/User'),
        meta: {
          keepAlive: true
        }
      },
      {
        //角色管理
        path: '/system/role',
        name: 'role',
        component: () => import('@/pages/system/Role'),
        meta: {
          keepAlive: true
        }
      },
      {
        //部门管理
        path: '/system/dept',
        name: 'dept',
        component: () => import('@/pages/system/Dept'),
        meta: {
          keepAlive: true
        }
      },
      {
        //菜单管理
        path: '/system/menu',
        name: 'menu',
        component: () => import('@/pages/system/Menu'),
        meta: {
          keepAlive: true
        }
      },
      {
        //SQL监控
        path: '/system/sql',
        name: 'sql',
        component: () => import('@/pages/system/Sql'),
        meta: {
          keepAlive: true
        }
      },
      {
        //字典管理
        path: '/system/dict',
        name: 'dict',
        component: () => import('@/pages/system/Dict'),
        meta: {
          keepAlive: true
        }
      },
      {
        //参数管理
        path: '/system/config',
        name: 'config',
        component: () => import('@/pages/system/Config'),
        meta: {
          keepAlive: true
        }
      },
      {
        //系统日志
        path: '/system/log',
        name: 'log',
        component: () => import('@/pages/system/Log'),
        meta: {
          keepAlive: true
        }
      },
      {
        //预警设置
        path: '/system/warningsettings',
        name: 'warningsettings',
        component: () => import('@/pages/system/warningsettings'),
        meta: {
          keepAlive: true
        }
      },
      {
        //智搜设置
        path: '/system/searchsettings',
        name: 'searchsettings',
        component: () => import('@/pages/system/Searchsettings'),
        meta: {
          keepAlive: true
        }
      },
      {
        //自定义模板
        path: '/system/customExcelModel',
        name: 'customExcelModel',
        component: () => import('@/pages/system/CustomExcelModel'),
        meta: {
          keepAlive: true
        }
      },
    ]
  },
 
]

export default routes














// import Vue from 'vue'
// import Router from 'vue-router'

// import Login from '../components/login.vue'
// import Home from '../pages/Home.vue'
// import Overview from '../pages/Overview.vue'
// import PersonnelInformation from '../pages/personnelInformation/PersonnelInformation.vue'
// import User from '../pages/system/User.vue'
// import axios from 'axios'
// import { Message } from "element-ui"
// Vue.prototype.$message = Message
// Vue.use(Router)
// axios.defaults.baseURL = ''
// Vue.prototype.$axios = axios
// export default new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   redirect: '/login'
//     // },
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/home',
//       name: 'Home',
//       component: Home,
//       redirect:'/overview',
//       children: [
//         {
//           name: "Overview",
//           path: "/overview",
//           component: Overview
//         },
//         {
//           name: "PersonnelInformation",
//           path: "/personnelInformation",
//           component: PersonnelInformation
//         },
//         {
//           name: "User",
//           path: "/user",
//           component: User
//         },
//       ]
//     },
//     // {
//     //   path: '/overview',
//     //   name: 'Overview',
//     //   component: Overview,
//     // },
//   ]
// })
