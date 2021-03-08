<template>
  <div class="layout">
    <div class="layout_content">
      <div id="subapp-viewport"></div>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>

      <van-tabbar v-model="activeTab">
        <van-tabbar-item name="sub-demo-one" icon="home-o" to="/sub-demo-one">demoOne</van-tabbar-item>
        <van-tabbar-item name="sub-demo-two" icon="friends-o" to="/sub-demo-two">demoTwo</van-tabbar-item>
      </van-tabbar>
      <div class="main_wrap">
        {{ JSON.stringify(globalStore.getGlobalState('testNum')) }}
        <van-button type="default" @click="handleChange">修改+1</van-button>
      </div>
    </div>
  </div>
</template>
<script>
import microApps from '@/micro-app.js'
import globalStore from '@/globalStore.js'
export default {
  data() {
    return {
      microApps,
      globalStore,
      activeTab: 'sub-demo-one'
    }
  },
  computed: {},
  methods: {
    handleChange() {
      const initState = globalStore.getGlobalState()
      const newTestNum = initState.testNum + 1
      globalStore.setGlobalState(Object.assign(initState, { testNum: newTestNum }))
    }
  },
  created() {},
  mounted() {},
  watch: {
    '$route.path': {
      immediate: true,
      handler(val, oldVal) {
        console.log('val', val)
        this.activeTab = val.split('/')[1]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.main_wrap {
  position: fixed;
  width: 150px;
  height: 150px;
  right: 0;
  bottom: 100px;
  background-color: #ccc;
}
</style>
