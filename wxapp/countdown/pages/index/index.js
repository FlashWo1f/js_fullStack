Page({
  data:{
    start: false
  },
  _setStartDataEvent(e){
    console.log(e)
    if(e.detail.start === false){
      this.setData({
        start: false
      })
    }
  },
  onLoad(){
    setTimeout(() => {
      this.setData({
        start: true
      })
    }, 2000)
  }
})