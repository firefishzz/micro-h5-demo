/* eslint-disable */
// getAllParams中使用到
function getUrlParams(urlParams) {
  const obj = {}
  let str = ''
  if (urlParams) {
    str = urlParams
  } else {
    str = location.search.substr(1)
  }
  str &&
    str.split('&').forEach(e => {
      const [key, value] = e.split('=')
      obj[key] = value
    })
  return obj
}
// 获取url中的参数
export function getAllParams() {
  let str = location.hash
  const index = str.indexOf('?')
  if (index > -1) {
    str = str.substr(index + 1)
  } else {
    str = ''
  }
  const query = getUrlParams(str) // hash后面的值
  const other = getUrlParams() // hash前面的值
  const res = Object.assign(query, other)
  return res
}

/**
 * 传入base64图片，返回一个blob,下载的时候用的
 * @param {base64} dataURI
 */
export function dataURIToBlob(dataURI) {
  //base64图片过大，无法下载
  var binStr = atob(dataURI.split(',')[1]),
    len = binStr.length,
    arr = new Uint8Array(len)

  for (var i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i)
  }
  return new Promise(res => {
    res(new Blob([arr]))
  })
}

export function downLoadImg(file, fileName) {
  if (/^data/.test(file)) {
    file = dataURIToBlob(file).then(blob => {
      down(URL.createObjectURL(blob), fileName)
    })
  } else {
    down(file, fileName)
  }
  console.log('下载图片结束')
  function down(file, fileName) {
    var save_link = document.createElement('a')
    save_link.href = file
    save_link.download = fileName
    console.log('下载图片开始', save_link.download)
    var event = document.createEvent('MouseEvents')
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    save_link.dispatchEvent(event)
  }
}

// urlSplice中使用到
export function parseURL(url) {
  var parser = document.createElement('a'),
    searchObj = {},
    queries,
    key,
    value

  parser.href = url
  queries = parser.search.replace(/^\?/, '').split('&')
  queries.forEach(query => {
    key = query.split('=')[0]
    value = query.split('=')[1]
    searchObj[key] = value
  })
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    searchObj: searchObj,
    hash: parser.hash
  }
}


/**
 * 将dom中的Img渲染为base64图片
 * @param {Element} ele img元素
 * @returns {Promise}
 */
export function img2Base64(ele) {
  return new Promise(res => {
    var eImage = ele
    var canvas = document.createElement('canvas')
    var context = canvas.getContext('2d')
    canvas.height = eImage.height
    canvas.width = eImage.width
    context.drawImage(eImage, 0, 0)
    try {
      var dataURL = canvas.toDataURL('image/jpeg')
      res(dataURL)
    } catch (e) {
      console.log('图片转base64失败', e)
    }
    canvas = null
  })
}
/**
 * base64转为文件格式
 * @param {string} dataurl base64字符串
 * @param {string} filename 文件名字
 */
export function dataURLtoFile(dataurl, filename = 'anyone') {
  return new Promise(res => {
    // 将base64转换为文件
    var arr = dataurl.split(',')
    var mime = arr[0].match(/:(.*?);/)[1]
    var bstr = atob(arr[1])
    var n = bstr.length
    var u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    res(new File([u8arr], filename, { type: mime }))
  })
}

/**
 * 与getSessionStorage配套使用
 * @param {string} key
 * @param {any} value
 */
export const setSessionStorage = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch (err) {
    console.log('缓存失败', err)
    console.log('缓存失败key', key)
    console.log('缓存失败value', value)
  }
}
/**
 * 与setSessionStorage配套使用
 * @param {string} key  取的key值
 * @param {any} defa 默认赋值
 */
export const getSessionStorage = (key, defa = '') => {
  try {
    return JSON.parse(sessionStorage.getItem(key)) || defa
  } catch (err) {
    console.log('getSessionStorage', err)
    return defa
  }
}

// 获取当前时间
export const getNowDate = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (day < 10) {
    day = '0' + day
  }
  return year + '/' + month + '/' + day
}

// 获取id
export const getUniqueId = () => {
  let d = new Date().getTime()
  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now() //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}

// 获取手机信息
export const getBrowserInfo = () => {
  return {
    isAndroid: Boolean(navigator.userAgent.match(/android/gi)), // 安卓
    isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/gi)), // 苹果
    isIpad: Boolean(navigator.userAgent.match(/ipad/gi)), // ipad
    isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/gi)), // 微信
    isAli: Boolean(navigator.userAgent.match(/AlipayClient/gi)), // 支付宝
    isPhone: Boolean(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) // 是否是手机端
  }
}

/* eslint-disable */
export function checkDefault(obj) {
  const type = Object.prototype.toString.call(obj)
  switch (type) {
    case '[object Object]':
    case '[object Array]':
      for (let i in obj) {
        //只要其值不是空字符串就好了
        if (obj[i] && typeof obj[i] !== 'object') {
          return false
        } else if (obj[i] && typeof obj[i] == 'object') {
          return checkDefault(obj[i])
        }
      }
      break
    case '[object String]':
    default:
      if (obj) {
        return false
      }
  }
  return true
}

// 检测是否合法手机号
export const checkMobileNumber = mobile => {
  return /^1(3|5|6|7|8|9)\d{9}$/.test(mobile)
}

//检查是否有表情
export function checkEmoji(string) {
  let emojiRegex = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/
  return emojiRegex.test(string)
}

// 检测是否中文字符
export const checkChineseName = name => {
  return /^[\u4e00-\u9fa5]+(·[\u4e00-\u9fa5]+)*$/.test(name)
}

// 校验身份证
export const checkSFZ = idcode => {
  idcode = idcode.toUpperCase()
  let weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  let check_code = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let code = idcode + ''
  let last = idcode[17]
  let seventeen = code.substring(0, 17)
  let arr = seventeen.split('')
  let len = arr.length
  let num = 0
  for (let i = 0; i < len; i++) {
    num = num + arr[i] * weight_factor[i]
  }
  let resisue = num % 11
  let last_no = check_code[resisue]
  let idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/
  let format = idcard_patter.test(idcode)
  return last === last_no && format ? true : false
}
