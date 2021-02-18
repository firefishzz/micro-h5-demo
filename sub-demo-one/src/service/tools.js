/* eslint-disable */
import axios from 'axios'
import defaultsDeep from 'lodash.defaultsdeep'
import { GET_URL } from './config'

// 默认axios配置
const request = axios.create({
  baseURL: GET_URL(),
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  },
  validateStatus(status) {
    return status >= 200 && status < 1000
  }
})
// 配置可获取原始报文
const processResponse = (res, options) => {
  let result = res.data
  if (options && options.returnRawResponse) {
    result = res
  }

  return result
}
// 请求拦截
request.interceptors.request.use(
  req => {
    return req
  },
  error => Promise.reject(error)
)

// 响应拦截
request.interceptors.response.use(response => {
  if (response.config.method === 'post' || response.config.method === 'POST') {
    // 对post进行操作
  }
  return new Promise(
    (resolve, reject) => {
      if (response && response.status === 200) {
        resolve(response)
      } else {
        reject(response.data)
      }
    },
    error => {
      const errRes = error.response
      return new Promise((resolve, reject) => {
        if (!errRes || typeof errRes.status === 'undefined') {
          reject(error.toString())
        } else {
          reject(errRes)
        }
      })
    }
  )
})
// 请求包装方法
const requestMap = (method, url, data, axiosConfig, options) => method(url, data, defaultsDeep(axiosConfig || {})).then(res => processResponse(res, options))

// 各种method包装
const get = (url, params, config, options) =>
  request
    .get(
      url,
      defaultsDeep(config || {}, {
        params
      })
    )
    .then(res => processResponse(res, options))
const del = (url, data, config, options) => request.delete(url, defaultsDeep(config || {})).then(res => processResponse(res, options))
const post = (url, data, config, options) => requestMap(request.post, url, data, config, options)
const put = (url, data, config, options) => requestMap(request.put, url, data, config, options)
export { get, post, put, del }
