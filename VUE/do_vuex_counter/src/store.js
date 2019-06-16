// VUE的大型项目开发 分成两种任务
// 组件开发工作  业务量开发
// vuex 数据设计
// store 是独立于组件之外的  应用App的中央数据管理中心

// 公司：
// CEO state{count: 0} 共享的状态
// actions  日常工作动作  修改状态
// 修改: dispatch  派发一个action('name', payload)=>action commit('mutation name') mutations=>state 修改数据
// mutations(改变)  财务部门  跟老板接触 state  审核对状态的修改是否合公司规定
// 组件 读 this.$store.state.count
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)  //启动Vuex  可拔插的

const state = {
  count: 0
}
const mutations = {
  increment(state){
    state.count++
  },
  decrement(state){
    state.count--
  },
}

// 组件只能跟action 交流
// 组件不可以直接跟state修改交流
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd ({commit, state}) {
    // 将组件逻辑放在action
    if(state.count % 2 == 1){
      commit('increment')
    }
  },
  incrementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 2000)
    })
  }
}
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})