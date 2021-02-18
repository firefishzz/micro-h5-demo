/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible' // px自动转rem
import { i18n } from './lang/i18n' // 翻译
import { init } from './utils/init'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'
import vConsole from './vconsole'

Vue.config.productionTip = false

init()

new Vue({
  render: h => h(App),
  i18n,
  store,
  router
}).$mount('#app')

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item
  }
})

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
setDefaultMountApp('/sub-demo-one')
start({
  sandbox: { strictStyleIsolation: true }
})
