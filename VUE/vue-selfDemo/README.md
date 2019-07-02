## 父子组件之间的渲染问题

var vm = new Vue({
  el: '#app',
  render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的                          router-view 和 router-link 直接写到 el 所控制的元素中
  router //  将路由对象挂载到 vm 上
})
day06-04
// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；
所以在路由匹配中匹配到子组件时 为什么不会把全部的VM实例全部覆盖掉  而是局部切换组件 破案了