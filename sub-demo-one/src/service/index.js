import { get, post } from './tools'

const baseUrl = '/test'
// 登陆
export const postLogin = data => post(`${baseUrl}/h5/login`, data)
// 获取订单列表
export const queryOrders = data => get(`${baseUrl}/h5/orders`, data)
