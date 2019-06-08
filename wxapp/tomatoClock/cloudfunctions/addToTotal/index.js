// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'yun-travel-8cvzr'
cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const userInfo = event.userInfo
  // 先查询有无用户openId
  const checkUser = await db.collection('totalTomato')
    .where({
      openId: userInfo.openId
    })
    .get()
    // 如果有用户，则更新基本用户信息
  if (checkUser.data.length > 0) {
    await db.collection('totalTomato').doc(checkUser.data[0]._id)
      .update({
        data: {
          avatarUrl: event.avatarUrl,
          nickName: event.nickName,
          openId: event.userInfo.openId,
          total: 0,
          work: 0,
          learn: 0,
          reflection: 0,
          write: 0,
          motion: 0,
          read: 0,
        }
      })
  } else {
    const insertResult = await db.collection('totalTomato').add({
      data:{
        avatarUrl: event.avatarUrl,
        nickName: event.nickName,
        openId: event.userInfo.openId,
        total: 0,
        work: 0,
        learn: 0,
        reflection: 0,
        write: 0,
        motion: 0,
        read: 0,
      }
    })
  }
}