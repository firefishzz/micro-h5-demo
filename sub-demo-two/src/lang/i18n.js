import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { defaultLang } from '@/utils/constant.js'
import { Locale } from 'vant'
import enUS from 'vant/es/locale/lang/en-US'

/**
 * vant ui 国际化 需引入相应语言包
 * import enUS from 'vant/es/locale/lang/en-US'
 */

Vue.use(VueI18n)

const lang = defaultLang

// Locale.use(lang, enUS)

export const i18n = new VueI18n({
  locale: lang, // 语言标识
  messages: {
    'zh-CN': require('./zh-CN.json') // 简体语言包
  }
})
