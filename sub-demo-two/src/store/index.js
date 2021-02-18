import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/store'
import setter from './setter/store'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    setter
  }
})
export default store
