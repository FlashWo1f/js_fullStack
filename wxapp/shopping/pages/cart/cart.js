// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    carts: [],
    selectAllStatus: true,
    
  },
  selectList(e){   
    var index = e.target.dataset.index
    var select = 'carts[' + index + '].selected'
    this.setData({
      [select]: !this.data.carts[index].selected
    })
    
    // console.log(e)
  },
  minusCount(e){
    // console.log(e)
    var index = e.target.dataset.index
    var minus = 'carts[' + index + '].num' 
    var price = 'carts[' + index + '].price'
    if(this.data.carts[index].num > 1)
      {
        this.setData({
        [minus]: this.data.carts[index].num - 1,
        // [price]: this.data.carts[index].price * this.data.carts[index].num
        })
      }
  },
  addCount(e){
    // console.log(e)
    var index = e.target.dataset.index
    var add = 'carts[' + index + '].num' 
    var price = 'carts[' + index + '].price' 
    this.setData({
    [add]: this.data.carts[index].num + 1,
    // [price]: this.data.carts[index].price * this.data.carts[index].num
    })
      
  },
  selectAll(){
    let selectAllStatus = this.data.selectAllStatus
    selectAllStatus = !selectAllStatus
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++){
      
        carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    setTimeout(() => {
      this.setData({
        hasList: true,
        carts: [
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }
        ]
      })
    }, 1000)
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