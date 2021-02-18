import globalStore from './globalStore'

const microApps = [
  {
    name: 'sub-demo-one',
    entry: '//localhost:9000/subapp/sub-demo-one/',
    activeRule: '/sub-demo-one'
  },
  {
    name: 'sub-demo-two',
    entry: '//localhost:9010/subapp/sub-demo-two/',
    activeRule: '/sub-demo-two'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: globalStore.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
