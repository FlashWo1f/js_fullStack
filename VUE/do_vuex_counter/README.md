- data 是组件自有数据  没有多少  考虑会不会被共享 应用层共享 如果会 要放在vuex
- 共享状态
  vuex state 管理
  mutation 才能修改
  action 被触发动作 提交
  getters 对 state的包装

mapAction mapGetters 引入组件

# do_vuex_counter

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
