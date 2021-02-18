<template>
  <div id="app">
    <layout></layout>
  </div>
</template>
<script>
/* eslint-disable */
import FastClick from 'fastclick'
import Layout from '@/layout/Layout.vue'

import globalStore from '@/globalStore'
export default {
  name: 'app',
  components: {
    Layout: Layout
  },
  data() {
    return {}
  },
  computed: {
    user() {
      return store.getGlobalState('user')
    }
  },
  methods: {},
  watch: {},
  mounted() {},
  created() {
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    if (isAndroid) {
      FastClick.attach(document.body)
    }
  }
}
</script>
<style lang="less">
@import './assets/global.less';
#app {
  width: 100%;
  overflow-x: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#subapp-viewport {
  width: 100%;
  height: 500px;
}
</style>
