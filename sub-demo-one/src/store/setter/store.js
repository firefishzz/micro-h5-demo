import * as mutations from './mutations'
import * as actions from './actions'
import { defaultLang } from '@/utils/constant'
const state = {
  localLang: defaultLang,
  title: ''
}
const getters = {}
const user = {
  state,
  getters,
  mutations,
  actions
}
export default user
