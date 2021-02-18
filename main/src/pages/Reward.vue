<template>
  <div id="reward_container"></div>
</template>
<style lang="less">
#reward_container {
  width: 100vw;
  height: 100vh;
}
</style>
<script>
import Layout from '@/layout/Layout.vue'
import { registerMicroApps, start, loadMicroApp } from 'qiankun'
export default {
  mounted() {
    // loadMicroApp({
    //   name: 'reward',
    //   entry: '//localhost:8081',
    //   container: '#reward_container'
    // })
  }
}
</script>