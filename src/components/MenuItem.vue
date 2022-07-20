<template>
  <el-submenu  v-if="isFolder" :index="menu.id + ''" :disabled="menu.isShow ===0 ? true : false" :popper-append-to-body="false">
    <template slot="title">
      <i :class="menu.icon" />
      <span>{{menu[labelProps]}}</span>
    </template>
    <menu-item v-for="subItem in menu[childrenProps]" :key="subItem.id"
      :menuData='subItem' :keyProps='keyProps' :labelProps='labelProps' :childrenProps='childrenProps'
    />
  </el-submenu>

  <el-menu-item :index="menu.href + ''" v-else :disabled="menu.isShow ===0 ? true : false">
    <i :class="menu.icon" />
    <span>{{menu[labelProps]}}</span>
  </el-menu-item>
</template>
<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'MenuItem',
  props: {
    menuData: {
      type: Object
    },
    keyProps: {
      type: String,
      default: 'id'
    },
    labelProps: {
      type: String,
      default: 'label'
    },
    childrenProps: {
      type: String,
      default: 'children'
    }
  },
  components: {
    MenuItem
  },
  data () {
    return {
      isFolder: false,
      menu: this.menuData
    }
  },
  mounted () {
    if (this.menuData.hasOwnProperty(this.childrenProps) && this.menuData[this.childrenProps].length > 0) {
      this.isFolder = true
    } else {
      this.isFolder = false
    }
  }
}
</script>
<style scoped>
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
    .el-submenu .el-menu-item{
      min-width: 0;
    }
    .el-menu--horizontal .el-menu .el-menu-item{
      float: left;
    }
</style>
