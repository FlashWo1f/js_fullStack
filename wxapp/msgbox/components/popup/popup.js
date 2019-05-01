Component({
    properties:{
        // 向page要什么
        title:{
            type: String,
            value:'标题'
        },
        content:{
            type:String,
            value:'内容'
        },
        btn_no:{
            type:String,
            value:'取消'
        },
        btn_ok:{
            type:String,
            value:'确定'
        }
    },
    data: {
        flag: true  /*弹窗显示还是隐藏 */
    },
    // 页面中被调用
    methods: {
        hidePopup: function(){
            this.setData({
                flag: !this.data.flag
            })
        },
        showPopup: function(){
            this.setData({
                flag: !this.data.flag
            })
        },
        _error(){
            console.log("111")
            this.triggerEvent("error")
        },
        _success(){
            console.log("222")
             this.triggerEvent("success")
        }
    }
})