import originalJsonp from 'jsonp'
import { CODE_SUCCESS } from './config'

const jsonp = (url, data, option) => {
  return new Promise((resolve, reject) => {
    originalJsonp(buildUrl(url, data), option, (err, res) => {
      if(!err){
        // 在这里统一错误处理
        if(res && res.code === CODE_SUCCESS){

          resolve(res)
        }else{
          console.log('接口出错了')
          reject('接口出错了')
        }
      }
      else{
        console.log('接口出错了')
        reject('接口出错了')
      }
    })
  })
}
/**
 * @param {*} url baidu.com
 * @param {*} data {a:1, b:2}
 * baidu.com?a=1&b=2
 */
function buildUrl(url, data) {
  let param = [];
  for (var k in data) {
    param.push(`${k}=${encodeURIComponent(data[k])}`)
  }
  let paramStr = param.join('&');
  if (url.indexOf('?') === -1) {
    url += "?" + paramStr
  } else {
    url += "&" + paramStr
  }
  return url
}

export default jsonp