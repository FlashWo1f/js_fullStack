//index.js
const app = getApp()

Page({
  data: {
    countDown:'30:00',
    isCounting: false,
    curIndex: 0,  //当前选中的category
    isPaused: false,
    things:[
    {
      type: '工作',
      category: 'work',
      index: 0,
      src: "../../images/work.png"
    },
    {
      type: '学习',
      category: 'learn',
      index: 1,
      src: '../../images/learn.png'
    },
    {
      type: '思考',
      category: 'reflection',
      index: 2,
      src: '../../images/reflection.png'
    },
    {
      type: '写作',
      category: 'write',
      index: 3,
      src: '../../images/write.png'
    },
    {
      type: '运动',
      category: 'motion',
      index: 4,
      src: '../../images/motion.png'
    },
    {
      type: '阅读',
      category: 'read',
      index: 5,
      src: '../../images/read.png'
    },
  ]
  },
  beSelected:function(e){
    console.log(e)
    this.setData({
      curIndex: e.currentTarget.dataset.id
    })
  },
  goCount(e){
    console.log(e)
    this.drawProgressBg()
    this.setData({
      isCounting: !this.data.isCounting
    })
    this.countInterval(10)
  },
  giveUp(){
    this.setData({
      isCounting: !this.data.isCounting
    })
    clearInterval(this.interval)
    
  },
  transtion:function(str){
    str = '' + str
    return str.length === 1 ? `0${str}` : str
  },
  onReady:function(){
    this.drawProgressBg()
    this.drawProgressPercent(0)
  },
  drawProgressBg(){
    const ctx = wx.createCanvasContext('progressBg')
    ctx.setLineWidth(4)
    ctx.setStrokeStyle('#5f7dac')
    ctx.setLineCap('round')
    ctx.beginPath()
    //3点钟方向 === 0
    ctx.arc(135, 135, 127, 0, 2 * Math.PI, false)
    ctx.stroke()
    ctx.draw()
  },
  drawProgressPercent(step){
    const ctx = wx.createCanvasContext('progressCanvas')
    ctx.setLineWidth(4)
    ctx.setStrokeStyle('#ffffff')
    ctx.setLineCap('round')
    ctx.beginPath()
    ctx.arc(135, 135, 127, -Math.PI / 2, step * Math.PI / 2 - Math.PI / 2, false)
    ctx.stroke()
    ctx.draw()
  },
  countInterval(cur){
    
    var date = new Date(0, 0)
    this.interval = setInterval(() => {
      if(cur > 0){
        cur--
        date.setMinutes(cur / 60)
        date.setSeconds(cur % 60)
        this.setData({
          countDown: this.transtion(date.getMinutes()) + ':' + this.transtion(date.getSeconds())
        })
        this.drawProgressPercent(4 - cur / 450)
      }
      if(cur <= 0){
      
        clearInterval(this.interval)
        console.log(222)
        // 6/8
          let self = this
          wx.cloud.callFunction({
            name: 'addToDetail',
            data: {
              category: self.data.things[self.data.curIndex].category
            },
            success(){
              console.log(1)
            },
            fail(){
              console.log('?')
            },
            complete(){
              console.log(2)
            }
          })
        }
    }, 1000)
    
  },
  pause(){
    this.setData({
      isPaused: !this.data.isPaused
    })
    var currTime = this.data.countDown,
    currTimer = currTime.split(":")[0] * 60 + currTime.split(":")[1] * 1
    if(this.data.isPaused){
      
      clearInterval(this.interval)
    }else{
      
      this.countInterval(currTimer)
    }
  },
  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })    
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
