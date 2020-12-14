import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    username: '',
    authKey: '',
    results: []
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
    },
    SET_RESULTS(state, results) {
      state.results = results;
    }
  },
  actions: {
    async setFilter({ commit }, filter) {
      const response = await axios.get('http://ec2-54-146-85-74.compute-1.amazonaws.com/v1/api/get_courses?type=' + filter);
      commit('SET_RESULTS', response.data.body);
    }
  },
  modules: {
  }
})