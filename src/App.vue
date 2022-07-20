<template>
  <div id="app">
    
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'App',
    computed: mapGetters({
      menuState: 'menuState'
    }),
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    // beforeMount () {
    //   const { body } = document
    //   const WIDTH = 1080
    //   const handler = () => {
    //     if (!document.hidden) {
    //       let rect = body.getBoundingClientRect()
    //       let isMobile = rect.width < WIDTH
    //       if (isMobile) {
    //         this.$store.commit('setMenuState', 'expand')
    //       } else {
    //         this.$store.commit('setMenuState', 'collapse')
    //       }
    //     }
    //   }
    //   document.addEventListener('visibilitychange', handler)
    //   window.addEventListener('DOMContentLoaded', handler)
    //   window.addEventListener('resize', handler)
    // },
    methods: {
      // 刷新界面
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>


<style>
#app {
  font-family: SimHei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
