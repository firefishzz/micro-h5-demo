export const routes = [
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/pages/Test.vue'),
    meta: {
      title: '测试页'
    }
  }
]
