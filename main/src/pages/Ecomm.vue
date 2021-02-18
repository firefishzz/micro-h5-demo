<template>
  <div id="ecomm_container"></div>
</template>
<style lang="less">
#ecomm_container {
  width: 100vw;
  height: 100vh;
}
</style>
<script>
import Layout from '@/layout/Layout.vue'
import { registerMicroApps, start, loadMicroApp } from 'qiankun'
export default {
  mounted() {
    loadMicroApp({
      name: 'ecomm-app',
      entry: '//localhost:8081',
      container: '#ecomm_container'
    })
  }
}
</script>