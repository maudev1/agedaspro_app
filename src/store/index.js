import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      id:'',
      accessToken:null
    },
    url:"http://127.0.0.1:8000/api"
  },
  getters: {
  },
  mutations: {
    setAccessToken(state, token){
      state.user.accessToken = token;

    }
  },
  actions: {
  },
  modules: {
  }
})
