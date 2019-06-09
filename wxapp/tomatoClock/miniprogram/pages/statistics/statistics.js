// miniprogram/pages/statistics/statistics.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todayTomato: 0,
    totalTomato: 0,
    howMuch: 0,
    done: [
      {work: 0, color: '#6cbafd'},
      {learn: 0, color: '#80d127'},
      {reflection: 0, color: '#ffa31d'},
      {write: 0, color: '#2fd9ed'},
      {motion: 0, color: '#968bef'},
      {read: 0, color: '#fc4557'}
    ]
  },
  drawStatisticalChartBg(){
    const ctx = wx.createCanvasContext('scBg')
    ctx.setLineWidth(20)
    ctx.setStrokeStyle('#f0f0f0')
    ctx.setLineCap('round')
    ctx.beginPath()
    //3点钟方向 === 0
    ctx.arc(62, 62, 49, 0, 2 * Math.PI, false)
    ctx.stroke()
    ctx.draw()
  },
  drawStatisticalChartCanvas(done){
    const ctx = wx.createCanvasContext('scCanvas')
    ctx.setLineWidth(20)
    ctx.setStrokeStyle(done.color)
    ctx.setLineCap('round')
    ctx.beginPath()
    //3点钟方向 === 0
    ctx.arc(62, 62, 49, - Math.PI / 2, 2 * Math.PI, false)
    ctx.stroke()
    ctx.draw()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.drawStatisticalChartBg()
    wx.cloud.callFunction({
      name: 'addToTotal',
      data: {
        
      },
      success:(e) => {
        console.log('success')
        this.setData({

        })
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})