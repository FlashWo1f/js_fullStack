// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yun-travel-8cvzr'
cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const userInfo = event.userInfo
  return await db.collection('detailTomato').add({
    data: {
      category: event.category,
      date: new Date(),
      openId: userInfo.openId
    },
  })
  
}