// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const got = require('got')
let appid = ''
let secret = ''
let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token='
let tokenUrl = 'http://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid' + appid + '&secret=' + secret

// 云函数入口函数
exports.main = async (event, context) => {
    // 令牌许可
    let tokenResponse = await got(tokenUrl)
  return '没问题'
}
