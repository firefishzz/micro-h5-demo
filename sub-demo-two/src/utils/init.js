import './globalVantComponents.js'
import Vue from 'vue'
import { Toast } from 'vant'
import * as filters from './fiters'

// 挂载vue实列方法
export const commonApis = {
  // 全局loading
  $loading() {
    //  this.$loading().clear() 清除loading
    return Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      className: 'cover_toast_loading', // 覆盖样式
      loadingType: 'spinner'
    })
  }
}

export const init = () => {
  Object.keys(commonApis).forEach(key => {
    Vue.prototype[key] = commonApis[key]
  })

  // 注册全局过滤器
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
