<template>
    <div class="wrapper">
        <el-container style="overflow-y: auto;">
            <el-header class="header">
                <div  class="title">
                    <div ><img src="../../static/image/2.png" width="25" height="25" alt=""></div>
                    <div><h1 style="font-weight: normal;">干部综合管理平台</h1></div>
                </div>
                <div style="margin: 0 auto">
                  <el-menu :router="true" :unique-opened='true' :default-active='active'  mode="horizontal"  :class="{'elmenus':iselmenus}" 
                     class="el-menu-vertical-demo" @select='selectMenuChanges'>
                    <menu-item v-for="item in sysMenu" :key="item.id" keyProps='href' labelProps='name' childrenProps='children'
                      :menuData='item' />
                  </el-menu>
                  <!-- <el-menu router :default-active="active" class="elmenus" mode="horizontal"  @select="handleSelect"  active-text-color="" >
                    <el-menu-item index="Overview">
                      <i class="icon iconfont icon-shouye"></i>
                      <span slot="title">首页</span>
                    </el-menu-item>
                    <template v-for="item in menuList">
                      <template v-if="item.children && item.children.length>0">
                        <el-submenu  :index="item.url + ''"
                          
                          :key="item.id">
                            <template slot="title">
                                <i :class="item.icon"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <el-menu-item    :index="subItem.url + ''"
                            v-for="(subItem, index) in item.children"
                            :key="subItem.id" :class="{underline: !((index + 1) % 4)}" >
                              <template >
                                <i  class="icon iconfont icon-danweixinxi"></i><br>
                                <span  style="text-align: center;" slot="title">{{ subItem.name }}</span>
                              </template>
                              
                            </el-menu-item>
                          
                          </el-submenu>
                      </template>
                      <template v-else>
                        <el-menu-item v-if="!item.children"   :index="item.url + ''"
                        :key="item.id">
                          <i :class="item.icon"></i>
                          <span slot="title">{{item.name}}</span>
                        </el-menu-item>  
                      </template>
                    </template>
                  </el-menu> -->
                   


                </div>
                <div class="leftTitle">
                  欢迎登陆<span style="margin-left: 3px;">{{this.name}}!</span><i style="margin-left: 15px;" class="icon iconfont  icon-rili"></i><span style="margin-left: 3px;">{{this.systemTime}}</span>
                </div>
                <div class="rightTitle">
                  <i class="icon iconfont  icon-tongyong-shezhi2"></i><span style="margin-left: 5px;">修改密码</span><i style="margin-left: 15px;" class="icon iconfont  icon-tongyong-tuichu2"></i><span style="margin-left: 5px;">退出</span></span>
                </div>
            </el-header>
            <el-main class="main">
              <keep-alive>
                <router-view v-if="$route.meta.keepAlive">
                </router-view>
              </keep-alive>
              <router-view v-if="!$route.meta.keepAlive">
              </router-view>
              <!-- <router-view >
              </router-view> -->
            </el-main>
    
        </el-container>
     
      </div>
</template>
<script>
  import MenuItem from '@/components/MenuItem'
  import * as utils from '@/utils/commonUtils.js'
  import { mapGetters } from 'vuex'
  // import md5 from 'js-md5'
  import * as api from '@/api.js'
    export default{
        data(){
            return {
                logining: false,
                systemTime :'2022-03-16',
                name:'',
                menuList: [],
                active:'',
                iselmenus:true,
                menuList: [
                {
                  id: 2,
                  name: "人员管理",
                  icon: "icon iconfont icon-renyuanguanli",
                  url: "PersonnelInformations",
                  children: [
                    {
                      id: 21,
                      name: "干部名册",
                     
                    },
                    {
                      id: 22,
                      name: "培训管理",
                     
                    },
                    {
                      id: 23,
                      name: "上传PDF资料",
                     
                    },
                    {
                      id: 24,
                      name: "干部实绩导入",
                     
                    },
                    {
                      id: 25,
                      name: "自定义花名册",
                     
                    },
                    {
                      id: 26,
                      name: "批量导入",
                     
                    },
                    {
                      id: 27,
                      name: "简历初始化",
                     
                    },
                    {
                      id: 28,
                      name: "初始化标签",
                     
                    },
                    {
                      id: 29,
                      name: "导出人事信息",
                     
                    },
                  ],
                },
                {
                  id: 3,
                  name: "单位信息",
                  icon: "icon iconfont icon-danweixinxi",
                  url: "Overview1",
                  children: [
                    {
                      id: 31,
                      name: "多单位职数",
                     
                    },
                    {
                      id: 32,
                      name: "数据上报",
                     
                    },
                    {
                      id: 33,
                      name: "数据接收",
                     
                    },
                    {
                      id: 34,
                      name: "初始化unitcode",
                     
                    },
                   
                  ],
                },
                {
                  id: 4,
                  name: "上会管理",
                  icon: "icon iconfont icon-shanghuiguanli",
                  url: "Overview2",
                  children: [
                    {
                      id: 41,
                      name: "常委会管理",
                     
                    },
                    {
                      id: 42,
                      name: "部位会管理",
                     
                    },
                    {
                      id: 43,
                      name: "档案同步",
                     
                    },
                    {
                      id: 44,
                      name: "上会",
                     
                    },
                    {
                      id: 45,
                      name: "汇总批次管理",
                     
                    },
                    {
                      id: 46,
                      name: "上报名单管理",
                     
                    },
                    {
                      id: 47,
                      name: "上会任免",
                     
                    },
                   
                  ],
                },
                {
                  id: 5,
                  name: "智能搜索",
                  icon: "icon iconfont icon-zhinengsousuo",
                  url: "PersonnelInformation",
                },
                {
                  id: 6,
                  name: "统计分析",
                  icon: "icon iconfont icon-tongjifenxi",
                  url: "Overview4",
                  children: [
                    {
                      id: 61,
                      name: "统计报表",
                     
                    },
                    
                  ],
                },
                {
                  id: 7,
                  name: "系统管理",
                  icon: "icon iconfont icon-xitongguanli",
                  url: "Overview5",
                  children: [
                    {
                      id: 84,
                      name: "系统管理",
                      icon: "icon iconfont icon-tongjifenxi",
                      url: "User",
                    },
                    {
                      id: 71,
                      name: "新字典管理",
                     
                    },
                    {
                      id: 72,
                      name: "SWAGGER接口",
                     
                    },
                    {
                      id: 73,
                      name: "管理员管理",
                     
                    },
                    {
                      id: 74,
                      name: "角色管理",
                     
                    },
                    {
                      id: 75,
                      name: "部门管理",
                     
                    },
                    {
                      id: 76,
                      name: "菜单管理",
                     
                    },
                    {
                      id: 77,
                      name: "SQL监控",
                     
                    },
                    {
                      id: 78,
                      name: "字典管理",
                     
                    },
                    {
                      id: 79,
                      name: "参数管理",
                     
                    },
                    {
                      id: 80,
                      name: "系统日志",
                     
                    },
                    {
                      id: 81,
                      name: "预警设置",
                     
                    },
                    {
                      id: 82,
                      name: "智搜设置",
                     
                    },
                    {
                      id: 83,
                      name: "自定义模版",
                     
                    },
                    
                  ],
                },
              ],
            }
        },
        components: {
          MenuItem
        },
        computed: mapGetters({
          activeMenu: 'activeMenu',
          currentMenu: 'currentMenu',
          menuState: 'menuState',
          sysMenu: 'sysMenu',
          userEmail: 'userEmail',
          currentUser: 'currentUser',
          accessedMenus: 'accessedMenus'
        }),
        mounted () {
          this.addDate();
          this.getMenuList();
          this.name = this.$route.query.username;
          
          this.active = this.$route.name
          //this.styleAdd();
          // $(".el-submeun_title").on("onmouseover",function(){
          //   alert('111')
          //   $(".el-submeun_title i").css('color','red')
          // })
        },
        created () {
          this.setMenuStatus()
        },
        beforeRouteEnter (to, from, next) {
          next(vm => {
            vm.$store.commit('menuChanges', to.path)
          })
        },
        methods:{
          selectMenuChanges (index, indexPath) {
            let menuPath = []
            if (indexPath[0] === '/overview') {
              menuPath.push({
                name: '总览',
                id: 99
              })
            } else if (indexPath[0] === '/datasearch') {
              menuPath.push({
                name: '数据检索',
                id: 98
              })
            } else {
              var item = utils.getMenuItem(this.sysMenu, indexPath[0])
              menuPath.push({
                name: item.name,
                id: item.id
              })
              var childItem = item.children
              for (var i = 1; i < indexPath.length; i++) {
                if (i === indexPath.length - 1) {
                  var path = indexPath[i]
                  for (var j = 0; j < childItem.length; j++) {
                    if (childItem[j].href === path) {
                      menuPath.push({
                        name: childItem[j].name,
                        id: childItem[j].id,
                        href: childItem[j].href
                      })
                    }
                  }
                } else {
                  childItem = utils.getMenuItem(childItem, indexPath[i])
                  menuPath.push({
                    name: childItem.name,
                    id: childItem.id
                  })
                }
                childItem = childItem.children
              }
            }
            this.$store.commit('currentMenu', menuPath)
            this.$store.commit('menuChanges', index)
          },
          toggle () {
            if (this.menuState === 'expand') this.$store.commit('setMenuState', 'collapse')
            else this.$store.commit('setMenuState', 'expand')
          },
          setMenuStatus () {
            this.sysMenu.forEach(item => {
              if (this.accessedMenus.findIndex(t => t.id === item.id) === -1) {
                if (typeof (item.children) !== 'undefined') {
                  if (item.children.length > 0) {
                    let status = this.setChildrenMenuStatus(item.children)
                    if (!status) {
                      item.isShow = 0
                    }
                  } else {
                    item.isShow = 0
                  }
                }
              }
            })
          },
          setChildrenMenuStatus (data) {
            let status = false
            data.forEach(item => {
              if (this.accessedMenus.findIndex(t => t.id === item.id) === -1) {
                if (typeof (item.children) !== 'undefined') {
                  if (item.children.length > 0) {
                    this.setChildrenMenuStatus(item.children)
                  } else {
                    item.isShow = 0
                  }
                }
              } else {
                // 说明子菜单下有用户菜单
                status = true
              }
            })
            return status
          },
   
          addDate () {
            let nowDate = new Date()
            let date = {
              year: nowDate.getFullYear(),
              month: nowDate.getMonth() + 1,
              date: nowDate.getDate()
            }
            this.systemTime = date.year + '年' + date.month + '月' + date.date+ '日' 
          },
          handleSelect(key, keyPath) {
            console.log(key, keyPath);
          },
          styleAdd(){
            var divs = document.getElementsByClassName('el-submenu');
            console.log(divs)
            for(var i=0;i<divs.length;i++){
              if (divs[i].getAttribute('class').includes('is-active')) {
                divs[i].onmouseover = function(){
                  console.log('选中')
                  divs[i].style.background = '#ffffff';
                }
              }
            }
          
           
            
          },
          getMenuList(){
            
          },

        }
    }
</script>
<style scoped>
    .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .header{
      background-image: url(../../static/image/1.png);
      filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
      -moz-background-size:100% 100%;
      background-size:100% 100%;
      background-repeat:no-repeat;
      color: #333;
      text-align: center;
      height: 110px!important;
    }
    .main{
        display: flex;flex: 1;
        background: #F4F4F4;
        /* background: red; */
    }
    .title>div{
        color:#fff;
        line-height: 15px;
        font-weight: normal!important;
        vertical-align:middle;
        display: inline-block;
    }
    .el-menu{
      background:rgb(255 255 255 / 0%);
      margin-top: 11px;
      display: inline-block;

    }
    .el-menu.el-menu--horizontal{
      border: none;
    }
    .el-menu-item i{
      color: #ffffff94;
    }
    .el-submenu__title i{
      color: #ffffff94;
    }
    .el-menu-item.is-active i{
      color: #AA0112!important;
    }
    /* .el-submenu__title:hover{
      color: #AA0112!important;
    }  */
    .leftTitle{
      position: absolute;
      top:20px;
      left: 60px;
      color: #fff;
      font-size: 12px;
      transform: scale(1.1,1.1) ;
      *font-size: 10px;
    }
    .rightTitle{
      position: absolute;
      top:20px;
      right: 60px;
      color: #fff;
      font-size: 12px;
      transform: scale(1.1,1.1) ;
      *font-size: 10px;
    }
    .leftTitle .iconfont,.rightTitle .iconfont{
      font-size: 14px;
    }
    .rightTitle span{
      cursor: pointer;
    }
    .el-submenu__title i{
      color: #fff;
    }
    .el-menu--horizontal .el-menu .el-menu-item{
      text-align: center;
      padding: 17px 0 0 0;
    }
    .underline{
      border-right: 0px solid #fff;
    }
</style>