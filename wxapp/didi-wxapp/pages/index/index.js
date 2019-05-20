//index.js
//获取应用实例
const app = getApp()
import util from '../../utils/index'

Page({
  data: {
   navData:[],
   currentTap:1,
   scrollLeft:0,
   isLoading:true,
   address:'',
   callCart:false,
   destination: '',
   costType:[
     {typeName:'拼车',typeImageUrl:'../../assets/images/costCart.png',pay:null},
     {typeName:'快车',typeImageUrl:'../../assets/images/costCart.png',pay:null},
     {typeName:'优享',typeImageUrl:'../../assets/images/goodCart.png',pay:null}

    ],
    index:1
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  switchCart(e){
    const id = e.currentTarget.dataset.index
    this.setData({
      index:id
    })
  },
  toCallCast(){
    this.setData({
      callCart:true
    })
  },
  switchNav(event){
    const cart = event.currentTarget.dataset.name
    const cur = event.currentTarget.dataset.current
    const info = wx.getSystemInfoSync()
    const windowWidth = info.windowWidth
    const perNavWidth = windowWidth / 8
    this.setData({
      currentTap:cur,
      scrollLeft:(cur-1)*perNavWidth,
      cart
    })
  },
  onLoad: function () {
    this.requestCart()
  },
  onShow(){
    this.setData({
      address:app.globalData.address,
      destination:app.globalData.destination
    })
  },
  requestCart(){
    util.request({
      url:'https://www.easy-mock.com/mock/5aded45053796b38dd26e970/comments#!method=get'
    })
    .then((res)=>{
      this.setData({
        navData:res.data.navData,
        cost:res.data.cost
      })
    })
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
