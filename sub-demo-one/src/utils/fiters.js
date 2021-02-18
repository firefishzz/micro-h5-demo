/* eslint-disable */
// 数字格式化
export const numberFormatter = (num, digits) => {
  const si = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (
        (num / si[i].value + 0.1)
          .toFixed(digits)
          .replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
      )
    }
  }
  return num.toString()
}

// 时间格式化
export const dateFormate = t => {
  let d = new Date(t)
  let mouth = d.getMonth() + 1
  let day = d.getDate()
  let hours = d.getHours()
  let minutes = d.getMinutes()
  mouth = mouth < 10 ? '0' + mouth : mouth
  day = day < 10 ? '0' + day : day
  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  // return d.getFullYear() + '-' + mouth + '-' + day + ' ' + hours + ':' + minutes
  return d.getFullYear() + '.' + mouth + '.' + day
}

// 中国手机号掩码
export const mobilePhoneMask = input => {
  let output = input
  if (input === null || input === '') return output
  if (input.length > 6) {
    output = input.substr(0, 3) + '****' + input.substr(input.length - 4)
  } else if (input.length > 3) {
    output = input.substr(0, 3) + '****'
  } else if (input.length > 0) {
    output = input.substr(0, 1) + '*****'
  }
  return output
}

// 金额加逗号
export const toThousands = num => {
  return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

// 身份证掩码
export const idCardMask = input => {
  let output = input
  if (input === null || input === '') return output
  if (input.length > 4) {
    output = input.substr(0, 3) + '***********' + input.substr(input.length - 4)
  } else if (input.length >= 2) {
    output = input.substr(0, 3) + '*************'
  } else {
    output = input + '**************'
  }
  return output
}

// 首字母大写
export const uppercaseFirst = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
