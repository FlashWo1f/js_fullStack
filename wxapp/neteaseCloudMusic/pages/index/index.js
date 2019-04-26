//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    songLists:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.showLoading({
      title: 'Loading',
      mask: true
    })
    const songLists = wx.getStorageSync('songLists')
    if(songLists && songLists.length){
      this.setData({
        songLists
      })
    }
    wx.request({
      url: app.globalData.API_BASE + '/top/list',
      data: {
        idx: 1
      },
      // method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success:res => {
        // success
        console.log(res)
        if(res.statusCode === 200){
          this.setData({
            songLists: res.data.playlist.tracks
          })
          wx.setStorageSync('songLists', res.data.playlist.tracks)
          
        }
        wx.hideLoading()
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  
  },
  handlePlayAudio(event){
    const audioId = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `../play/play?id=${audioId}`,
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
    console.log(audioId)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
