//index.js
const app = getApp()
const db = wx.cloud.database()
const userInfo = db.collection('userInfo')

Page({
  data:{
    userList:[]
  },
  getUserInfo: e => {
    console.log(e)
    // _openid  是有安全问题的，这是前端，可以到云端取 安全  openid 是专有业务
    wx.cloud.callFunction({
      name:"getOpenId",
      complete: function(res) {
        console.log(res)
        userInfo
          .where({
            _openid: res.result.openid
          }).count()
          .then(res => {
            if(res.total == 0){
              userInfo.add({
                data: e.detail.userInfo
              })
              .then(res => {
                wx.navigateTo({
                  url: '../add/add',
                  success: function(res){
                    // success
                  },
                  fail: function() {
                    // fail
                  },
                  complete: function() {
                    // complete
                  }
                })
              })
            }
            else{
              console.log('用户已存在')
            }
          })
      }
    })
  },
  //   userInfo
  //     .where({
  //       _openid: s 
  //     })
  //   // table === collection
  //   userInfo.add({
  //     data: e.detail.userInfo
  //   })
  //   // 把用户存到数据库中，database
  //   // 用户表  是核心表
  // },
  onLoad(){
    userInfo
      .get()
      .then(res => {
        console.log(res);
        this.setData({
          userList: res.data
        })
      })
  }
})
