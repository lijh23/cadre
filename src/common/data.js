export const DefaultMenu = [
  // 首页
  {
    children: [],
    href: '/overview',
    icon: 'icon iconfont icon-shouye',
    id: 1,
    isShow: 1,
    name: '首页',
    parentId: -1
  },
  // 数据检索
  // {
  //   children: [],
  //   href: '/datasearch',
  //   icon: 'el-icon-search',
  //   id: 2,
  //   isShow: 1,
  //   name: '数据检索',
  //   parentId: -1
  // },
  // 人员管理
  {
    href: '',
    icon: 'icon iconfont icon-renyuanguanli',
    id: 3,
    isShow: 1,
    name: '人员管理',
    parentId: -1,
    children: [
      {
        href: '/personnelInformation/manage',
        icon: 'icon iconfont icon-renyuanguanli',
        id: 4,
        isShow: 1,
        name: '人员信息',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/cadreRegister',
        icon: 'icon iconfont icon-wj-mc',
        id: 5,
        isShow: 1,
        name: '干部名册',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/trainReport',
        icon: 'icon iconfont icon-peixunguanli',
        id: 6,
        isShow: 1,
        name: '培训管理',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/uploadPDF',
        icon: 'icon iconfont icon-tujianshangchuan',
        id: 7,
        isShow: 1,
        name: '上传PDF资料',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/importExcel',
        icon: 'icon iconfont icon-yonghudaoru',
        id: 8,
        isShow: 1,
        name: '干部实绩导入',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/customPersonnelInformation',
        icon: 'icon iconfont icon-ziliaoshouce-xianxing',
        id: 9,
        isShow: 1,
        name: '自定义花名册',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/batchImport',
        icon: 'icon iconfont icon-piliangdaoru',
        id: 10,
        isShow: 1,
        name: '批量导入',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/resumeInitialize',
        icon: 'icon iconfont icon-chushihua',
        id: 11,
        isShow: 1,
        name: '简历初始化',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/initializeLabel',
        icon: 'icon iconfont icon-biaoqian',
        id: 12,
        isShow: 1,
        name: '初始化标签',
        parentId: 3,
        children: []
      },
      {
        href: '/personnelInformation/exportPersonnel',
        icon: 'icon iconfont icon-gerenxinxi',
        id: 13,
        isShow: 1,
        name: '导出人事信息',
        parentId: 3,
        children: []
      },
      
    ]
  },
  //单位管理
  {
    href: '',
    icon: 'icon iconfont icon-danweixinxi',
    id: 14,
    isShow: 1,
    name: '单位管理',
    parentId: -1,
    children: [
      {
        href: '/unitinfo/unitInformation',
        icon: 'icon iconfont icon-danweixinxi',
        id: 15,
        isShow: 1,
        name: '单位信息',
        parentId: 14,
        children: []
      },
      {
        href: '/unitinfo/moreUnit',
        icon: 'icon iconfont icon-jurassic_role',
        id: 16,
        isShow: 1,
        name: '多单位职数',
        parentId: 14,
        children: []
      },
      {
        href: '/unitinfo/initB01UnitCode',
        icon: 'icon iconfont icon-chushihua',
        id: 17,
        isShow: 1,
        name: '初始化unitcode',
        parentId: 14,
        children: []
      },
    ]
  },

  //  上会管理
  {
    href:'',
    icon: 'icon iconfont icon-shanghuiguanli',
    id: 18,
    isShow: 1,
    name: '上会管理',
    parentId: -1,
    children: [
      // 常委会管理
      {
        children: [],
        href: '/committee/summaryList',
        icon: 'icon iconfont icon-guanliyuan',
        id: 19,
        isShow: 1,
        name: '常委会管理',
        parentId: 18
      },
      // 部委会管理
      {
        children: [],
        href: '/committee/reportList',
        icon: 'icon iconfont icon-xiangmujingliguanli_renyuanguanli',
        id: 20,
        isShow: 1,
        name: '部委会管理',
        parentId: 18
      },
      // 档案同步
      {
        children: [],
        href: '/committee/archivesList',
        icon: 'icon iconfont icon-guanliyuan',
        id: 21,
        isShow: 1,
        name: '档案同步',
        parentId: 18,
        
      },
      // 汇总批次管理
      {
        children: [],
        href: '/committee/summaryBatch',
        icon: 'icon iconfont icon-xiangmujingliguanli_renyuanguanli',
        id: 22,
        isShow: 1,
        name: '汇总批次管理',
        parentId: 18,
        
      },
      // 上报名单管理
      {
        children: [],
        href: '/committee/reportListManagement',
        icon: 'icon iconfont icon-guanliyuan',
        id: 23,
        isShow: 1,
        name: '上报名单管理',
        parentId: 18,
        
      }
    ]
  },
  {
    children: [],
    href: '/intelligenceSearch/intelligenceSearch',
    icon: 'icon iconfont icon-zhinengsousuo',
    id: 24,
    isShow: 1,
    name: '智能搜索',
    parentId: -1
  },
  {
    children: [],
    href: '/statistics/statistics',
    icon: 'icon iconfont icon-tongjifenxi',
    id: 25,
    isShow: 1,
    name: '统计分析',
    parentId: -1
  },
  //  系统管理
  {
    href: '',
    icon: 'icon iconfont icon-xitongguanli',
    id: 26,
    isShow: 1,
    name: '系统管理',
    parentId: -1,
    children: [
      {
        children: [],
        href: '/system/newdict',
        icon: 'icon iconfont icon-zidianguanli1',
        id: 27,
        isShow: 1,
        name: '新字典管理',
        parentId: 26
      },
      {
        children: [],
        href: '/system/swagger-ui',
        icon: 'icon iconfont icon-jiekouguanli',
        id: 28,
        isShow: 1,
        name: 'SWAGGER接口',
        parentId: 26
      },
      {
        children: [],
        href: '/system/user',
        icon: 'icon iconfont icon-guanliyuan1',
        id: 29,
        isShow: 1,
        name: '管理员管理',
        parentId: 26
      },
      {
        children: [],
        href: '/system/role',
        icon: 'icon iconfont icon-jiaoseguanli',
        id: 30,
        isShow: 1,
        name: '角色管理',
        parentId: 26
      },
      {
        children: [],
        href: '/system/dept',
        icon: 'icon iconfont icon-bumenguanli',
        id: 31,
        isShow: 1,
        name: '部门管理',
        parentId: 26
      },
      {
        children: [],
        href: '/system/menu',
        icon: 'icon iconfont icon-a-zu5',
        id: 32,
        isShow: 1,
        name: '菜单管理',
        parentId: 26
      },
      {
        children: [],
        href: '/system/sql',
        icon: 'icon iconfont icon-SQLpeizhi',
        id: 33,
        isShow: 1,
        name: 'SQL监控',
        parentId: 26
      },
      {
        href: '/system/dict',
        icon: 'icon iconfont icon-zidianguanli',
        id: 34,
        isShow: 1,
        name: '字典管理',
        parentId: 26,
        
      },
      {
        href: '/system/config',
        icon: 'icon iconfont icon-canshuguanli',
        id: 35,
        isShow: 1,
        name: '参数管理',
        parentId: 26,
        
      },
      {
        href: '/system/log',
        icon: 'icon iconfont icon-xitongrizhi',
        id: 36,
        isShow: 1,
        name: '系统日志',
        parentId: 26,
        
      },
      {
        href: '/system/warningsettings',
        icon: 'icon iconfont icon-yujing',
        id: 37,
        isShow: 1,
        name: '预警设置',
        parentId: 26,
        
      },
      {
        href: '/system/searchsettings',
        icon: 'icon iconfont icon-sousuo1',
        id: 38,
        isShow: 1,
        name: '智搜设置',
        parentId: 26,
        
      },
      {
        href: '/system/customExcelModel',
        icon: 'icon iconfont icon-yujing',
        id: 39,
        isShow: 1,
        name: '自定义模板',
        parentId: 26,
        
      }
    ]
  }
]

export const SynchronizationRatio = [
  {
    id: 1,
    code: 'day',
    label: '每日'
  },
  {
    id: 2,
    code: 'week',
    label: '每周'
  },
  {
    id: 3,
    code: 'month',
    label: '每月'
  },
  {
    id: 4,
    code: 'year',
    label: '每年'
  }
]

export const TaskType = [
  {
    id: 1,
    code: 'all',
    label: '全量同步'
  },
  {
    id: 2,
    code: 'increase',
    label: '增量同步'
  }
]

export const DbSyncType = [
  {
    id: 1,
    code: 'sql',
    label: '自定义SQL'
  },
  {
    id: 2,
    code: 'table',
    label: '单表同步'
  }
]
export const selectData = [
  {
    value: '0',
    label: '在线'
  }, {
    value: '1',
    label: '历史'
  }
]
