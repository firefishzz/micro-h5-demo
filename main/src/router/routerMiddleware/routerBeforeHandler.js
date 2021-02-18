import { routes } from '../routes.js'
import store from '../../store/index'
export default (to, from, next) => {
  if (to.meta.title) {
    store.commit('SET_TITLE', to.meta.title)
  }

  console.log('main')
  next()
}
