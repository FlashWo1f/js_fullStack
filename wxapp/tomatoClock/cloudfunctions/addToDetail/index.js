// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yun-travel-8cvzr'
cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const userInfo = event.userInfo
  return db.collection('detailTomato').add({
    data: {
      category: 'work',
      date: new Date(),
      openId: userInfo.openId
    }
  })
}