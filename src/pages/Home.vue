<template>
    <div class="wrapper">
        <el-container style="overflow-y: auto;">
            <el-header class="header">
                <div  class="title">
                    <div ><img src="../../static/image/2.png" width="25" height="25" alt=""></div>
                    <div><h1 style="font-weight: normal;">干部综合管理平台</h1></div>
                </div>
                <div style="margin: 0 auto">
                  <el-menu   default-active="Overview" class="elmenus" mode="horizontal"  @select="handleSelect"  active-text-color="" 
                 >
                    <el-menu-item index="Overview">
                        <i class="icon iconfont icon-shouye"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>
                    <el-submenu >
                      <template slot="title">
                          <i class="icon iconfont icon-renyuanguanli"></i>
                          <span slot="title">人员管理</span>
                      </template>
                      <el-menu-item index="2-1" class="item-subTitle">
                        <i class="icon iconfont icon-danweixinxi"></i><br>
                        <span slot="title">选项1</span>
                      </el-menu-item>
                      <el-menu-item index="2-2" class="item-subTitle">
                        <i class="icon iconfont icon-danweixinxi"></i><br>
                        <span slot="title">选项2</span>
                      </el-menu-item>
                      <el-menu-item index="2-3" class="item-subTitle">
                        <i class="icon iconfont icon-danweixinxi"></i><br>
                        <span slot="title">选项3</span>
                      </el-menu-item>
                      <el-menu-item index="2-4" class="item-subTitle">
                        <i class="icon iconfont icon-danweixinxi"></i><br>
                        <span slot="title">选项4</span>
                      </el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3" ><i class="icon iconfont icon-danweixinxi"></i>
                      <span slot="title">单位信息</span></el-menu-item>
                    <el-menu-item index="4" ><i class="icon iconfont icon-shanghuiguanli"></i>
                        <span slot="title">上会管理</span></el-menu-item>
                    <el-menu-item index="5"><i class="icon iconfont icon-zhinengsousuo"></i>
                        <span slot="title">智能搜索</span></el-menu-item>
                    <el-menu-item index="6"><i class="icon iconfont icon-tongjifenxi"></i>
                        <span slot="title">统计分析</span></el-menu-item>
                    <el-menu-item index="7"><i class="icon iconfont icon-xitongguanli"></i>
                        <span slot="title">系统管理</span></el-menu-item>
                  </el-menu>

                </div>
                <div class="leftTitle">
                  欢迎登陆<span style="margin-left: 3px;">{{this.name}}!</span><i style="margin-left: 15px;" class="icon iconfont  icon-rili"></i><span style="margin-left: 3px;">{{this.systemTime}}</span>
                </div>
                <div class="rightTitle">
                  <i class="icon iconfont  icon-tongyong-shezhi2"></i><span style="margin-left: 5px;">修改密码</span><i style="margin-left: 15px;" class="icon iconfont  icon-tongyong-tuichu2"></i><span style="margin-left: 5px;">退出</span></span>
                </div>
            </el-header>
            <el-main class="main">
              <router-view >
              </router-view>
            </el-main>
          <!-- <el-aside class="el-top" width="230"> -->
            <!-- <div class="title">基础数据管理平台</div>
            <el-menu :router="true" :unique-opened='true' :default-active='activeMenu' background-color='#2b373c'
              text-color="#f7ecec" active-text-color='#3f3f3f' class="el-menu-vertical-demo" @select='selectMenuChanges'>
              <menu-item v-for="item in sysMenu" :key="item.id" keyProps='href' labelProps='name' childrenProps='children'
                :menuData='item' />
            </el-menu> -->
          <!-- </el-aside> -->
          <!--<el-container>
             <el-header>
              <div style="display: flex;flex: 1;">
                <div style="width:100%;margin-top:20px">
                  <span>您好，</span>
                  <span style="margin-right:10px;font-size:20px">{{currentUser}}</span>
                </div>
              </div>
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link header-user-menu color-white">
                  <el-avatar size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                    style="margin-top:10px"></el-avatar>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
                  <el-dropdown-item command="logOff">注销</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown> 
            </el-header>-->
            <!--<transition name="el-fade-in">
              <el-main>
                 <keep-alive>
                  <router-view v-if="$route.meta.keepAlive">
                  </router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive">
                </router-view>
              </el-main>
            </transition>
          </el-container> -->
        </el-container>
        <!-- <el-dialog :visible.sync="dialogVisible" width="480px">
          <div slot="title" class="dialg-title">
            修改密码
          </div>
          <el-form :model="password" :rules="frmRules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="旧密码" prop="oldpassword">
              <el-input v-model="password.oldpassword"></el-input>
            </el-form-item>
            <el-form-item label="新密码" prop="newpassword">
              <el-input type="password" v-model="password.newpassword"></el-input>
            </el-form-item>
            <el-form-item label="确认新密码" prop="surepassword">
              <el-input type="password" v-model="password.surepassword"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmUpdate">保 存</el-button>
          </div>
        </el-dialog> -->
      </div>
</template>
<script>
    export default{
        data(){
            return {
                logining: false,
                systemTime :'2022-03-16',
                name:''
            }
        },
        
        mounted () {
          this.addDate();
          this.name = this.$route.query.username;
          //this.styleAdd();
          // $(".el-submeun_title").on("onmouseover",function(){
          //   alert('111')
          //   $(".el-submeun_title i").css('color','red')
          // })
        },
        methods:{
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
          
           
            
          }

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
    
</style>