import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    username: '',
    authKey: ''
  },
  mutations: {
    loginUser(state, payload) {
      state.isLogin = true
      state.username = payload.username
      state.authKey = payload.authKey
    },
    reset(state){
      state.isLogin = false
      state.username = ''
      state.authKey = ''
    }
  },
  actions: {

  },
  modules: {
  }
})