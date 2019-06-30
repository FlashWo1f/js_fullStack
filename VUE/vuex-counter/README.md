## vue 最难的是数据管理  MVVM
- 1.0 时代  组件在我们眼里是最大的
  data() 私有状态   自给自足
  如此不足以成为一个应用
- 2.0 时代  很多的组件
  组件的层次及关系  兄弟组件  在需要共享数据的时候 找到共同的父组件 管理这个状态
  通过prop + emit 方式
- 3.0 时代  vuex  简单项目不需要
  管理应用状态
  跨组件  跨层级 轻松共享应用状态  复杂应用中VUEX 必不可少

## Vuex
const store = new Vuex.Store({
  store: {          ->data
    count: 0
  },
  mutations: {      ->methods
    increment(state){  `第一个参数state定死了 第二个可以带想要的参数  只能带2个参数 如果想要多个参数 可以传数组或者对象`
      state.count++    
    }
    `如果组件想要调用mutations中的方法 只能通过this.$store.commit("increment")`
  },
  `只负责拿数据，不能修改 类似过滤器和计算属性`
  getters: {
    getCount: function(state) {
      return "this count is :" + state.count
    }
  }
})
`this.$store.state.count`
子组件把想做的操作告诉Vuex管理员来操作 而不是直接改变Vuex的state
只能通过 mutation 提供的方法 才能操作对应的数据， 万一导致数据紊乱 可以知道是哪里出错了