const ENV = process.env.VUE_BUILD_ENV

const LOACL_PATH = '' // 本地
const TEST_PATH = '' // 测试接口域名
const PRO_PATH = '' // 生产接口域名
export const GET_URL = () => {
  if (ENV === 'local') return LOACL_PATH
  if (ENV === 'prod') return PRO_PATH
  if (ENV === 'test') return TEST_PATH
}
