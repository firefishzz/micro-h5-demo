<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<script>
import FastClick from 'fastclick'
import Layout from '@/layout/Layout.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Layout: Layout
  },
  computed: {
    // 通过global获取user的信息
    ...mapState('global', {
      user: (state) => state.user
    })
  },
  methods: {
    gotoSubReact() {
      history.pushState(null, 'sub-react', '/sub-react')
    }
  },
  created() {
    const ua = navigator.userAgent
    const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1 // android终端
    if (isAndroid) {
      FastClick.attach(document.body)
    }
  }
}
</script>

<style lang="less">
@import '~@/assets/global.less';
#app {
  width: 100%;
  overflow-x: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
