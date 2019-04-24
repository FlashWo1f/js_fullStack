Page({
  data:{
    hasUserInfo:false,
    canIUse:wx.canIUse('button.open-type.getUserInfo'),
    userInfo:{},
    addShow:false,
    addText: '',
    todos:[]
  },
  addInput: function(e){
    this.setData({
      addText: e.detail.value
    })
  },
  getUserInfo: function(e){
    // console.log(e)
    this.setData({
      userInfo:e.detail.userInfo,
      // MVVM 编程  响应式
      hasUserInfo: true
    })
  },
  addTodoShow: function(e){
    this.setData({
      addShow:true
    })
  },
  addTodoHide: function(e){
    this.setData({
      addShow: false,
      addText: ''
    })
  },
  addTodo: function(e){
    // 检测输入框是否由内容
    if(!this.data.addText.trim()){
      return
    }
    // todos wx:for setData() 重新绘制页面
    let todos = this.data.todos
    todos.push({
      id:new Date().getTime(),
      title:this.data.addText,
      status:'0'
    })
    this.setData({
      todos
    })
    // 退出输入状态
    this.addTodoHide()
  
  }
})