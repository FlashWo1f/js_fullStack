- start 从页面到了组件 ？
  页面是老板， 组件是员工， 页面是组件组成的。
  start 老板也要知道状态，Page data
  <countdown start="{{start}}">

- 组件的数据 data(内部数据) + properties(外部数据)

- properties 里的 observer 接收到值改变时执行 直译“观察者”

- bind:Func

- 从内到外触发事件
    内： this.triggerEvent({
        "event_name",
        data
    })
    外： (绑定自定义事件)bind:event_name="真正执行接受消息的函数"

    在对组件进行封装时 在当前页面想要获取组件中的某一状态，
    需要使用到this.triggerEvent(' ',{}),
    第一个参数是自定义事件名称，
    这个名称是在页面调用组件时bind的名称，
    第二个对象就可以将想要的属性拿到