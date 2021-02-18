import { i18n } from '@/lang/i18n' // 翻译
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'

// 设置语言
export const SET_LOCALLANG = (state, data) => {
  state.localLang = data
  i18n.locale = data
  localStorage.setItem('ecomm_language', data)

  /**
   * vant ui 国际化 需引入相应语言包
   */
  // Locale.use(data, enUS)
}

export const SET_TITLE = (state, data) => {
  state.title = data
  document.title = i18n.t(data)
}
