//index.js
//获取应用实例
const app = getApp()
// 单个页面的全局变量
// 计数器
let interval = null
// 旋转速度
let intime = 50 
Page({
  data: {
    color: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
    //9张奖品图片
    images: ['/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png', '/images/item1.png', '/images/item.png'],
    btnconfirm: '/images/dianjichoujiang.png',
    clickLuck: 'clickLuck',
    luckPosition: 0
  },
  loadAnimation(){
    let self = this
    let index = 0
    interval = setInterval(() => {
      if(index > 7){
        index = 0
        self.data.color[7] = 0.5
      }else if(index != 0){
        self.data.color[index - 1] = .5
      }
      self.data.color[index] = 1
      self.setData({
        color: self.data.color
      })
      index++
    }, 1000)
  },
  input(e){
    this.setData({
      luckPosition: parseInt(e.detail.value)
    })
  },
  clickLuck(){
    let self = this
    // 判断中奖的位置
    if(self.data.luckPosition == null || isNaN(self.data.luckPosition > 7)){
      wx.showModal({
        title: '提示',
        content: '请填写正确的位置',
        showCancel: false
      })
      return 
    }
    // 设置按钮不可点击
    self.setData({
    btnconfirm: '/images/dianjichoujiangd.png',
    clickLuck: ''
    })
    // 清空定时器
    clearInterval(interval)

    let index = 0
    interval = setInterval(() => {
      if(index > 7){
        index = 0
        self.data.color[7] = 0.5
      }else if(index != 0){
        self.data.color[index - 1] = .5
      }
      self.data.color[index] = 1
      self.setData({
        color: self.data.color
      })
      index++
    }, intime)
    let stopTime = 1000
    setTimeout(() => {
      self.stop(self.data.luckPosition)
    }, stopTime)
  },
  stop(which){
    let self = this
    clearInterval(interval)
    // 初始化当前位置
    let current = -1
    let color = self.data.color
    for(let i = 0; i < color.length; i++){
      if(color[i] == 1){
        current = i
      }
    }
    let index = current + 1
    self.stopLuck(which, index, intime, 10)
  },
  stopLuck(which, index, time, splittime){
    let self = this
    let color = self.data.color
    setTimeout(() => {
      if(index > 7){
        index = 0
        color[7] = 0.5
      }else if(index != 0){
        color[index - 1] = 0.5
      }
      color[index] = 1
      self.setData({
        color
      })
      // 如果旋转时间过端短， 或者当前位置不等于中奖位置
      if(time < 400 || index != which){
        splittime++
        time += splittime
        index++
        self.stopLuck(which, index, time, splittime)
      }else{
        setTimeout(() => {
          if(which == 1 || which == 3 || which == 5 || which == 7){
            wx.showModal({
              title: '提示',
              content: '恭喜你中大奖了',
              showCancel: false,
              success(e){
                self.setData({
                  btnconfirm: '/images/dianjichoujiangd.png',
                  clickLuck: 'clickLuck'
                })
                self.loadAnimation()
              }
            })
          }else{
            wx.showModal({
              title: '提示',
              content: '很遗憾，未中奖',
              showCancel: false,
              success(e){
                self.setData({
                  btnconfirm: '/images/dianjichoujiangd.png',
                  clickLuck: 'clickLuck'
                })
                self.loadAnimation()
              }
            })
          }
        }, 1000)
      }
    }, time)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.loadAnimation()
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
