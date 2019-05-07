// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  // page通过
  // wx.cloud.callFunction 上云
  // 再回到地上
  return event.userInfo
}