import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import routerBeforeHandler from './routerMiddleware/routerBeforeHandler'
import routerAfterHandler from './routerMiddleware/routerAfterHandler'

Vue.use(Router)

const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/sub-vue'
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
export default router
