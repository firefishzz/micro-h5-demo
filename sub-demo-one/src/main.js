import './public-path'
import Vue from 'vue'
import App from './App.vue'
import { getRouter } from './router'
import store from './store'

import globalRegister from './store/global-register'
import { i18n } from './lang/i18n' // 翻译
import { init } from './utils/init'
import 'lib-flexible/flexible' // px自动转rem

init()

Vue.config.productionTip = false
let instance = null

function render(props = {}) {
  const { container } = props

  const router = getRouter(props)

  instance = new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
  store.commit('global/setGlobalState', { user: userInfo })

  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)

  globalRegister(store, props)

  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
