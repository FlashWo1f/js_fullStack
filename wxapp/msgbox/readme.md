- 组件思维
  弹窗组合了一些标签， 形成了独立的弹窗功能
  在其他页面里也要用到，组合成一个独立的组件
  <dialog/>
  页面是由组件拼装而成。将大页面分成几个小组件,有利于合作分工

- 组件语法
  同于Page  又有异
  Component({
      data: {},
      properties:{},
      <!-- 属性类型定义 -->
      title:{
        type:String,
        value:'默认值'
      },
      methods:{

      }
  })

  this.triggerEvent 向外发送触发事件

- bind tap 区别
    bindtap   向外冒泡
    catch:tap   不会