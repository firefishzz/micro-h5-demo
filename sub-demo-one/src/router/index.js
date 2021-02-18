import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import Home from '@/pages/Home.vue'
import routerBeforeHandler from './routerMiddleware/routerBeforeHandler'
import routerAfterHandler from './routerMiddleware/routerAfterHandler'

Vue.use(Router)

const getRouter = props => {
  const { routerBase } = props

  const router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      }
    ].concat(routes)
  })

  router.beforeEach((to, from, next) => {
    // 全局route 中间件
    routerBeforeHandler(to, from, next)
  })

  router.afterEach((to, from) => {
    // 全局route 中间件
    routerAfterHandler(to, from)
  })
  return router
}
export { getRouter }
