import * as types from '../types'

const state = {
  showProOptions: false,
}

const mutations = {
  [types.COM_SHOW_PRO_OPTIONS] (state, status) {
    state.showProOptions = status
  }
}

const actions = {
  setShowProOptions({commit}, status) {
    commit(types.COM_SHOW_PRO_OPTIONS, status)
  }
}

const getters = {
  showProOptions: state => state.showProOptions
}

export default {
  state,
  mutations,
  actions,
  getters
}