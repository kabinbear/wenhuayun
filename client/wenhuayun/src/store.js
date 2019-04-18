import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  types:{
    SET_AUTHENTICATED :"SET_AUTHENTICATED",
    SET_USER:'SET_USER'
  },
  state: {
    isAuthentivated:false,
    user:{}
  },
  getters:{
     isAuthentivated:state => state.isAuthentivated,
     user:state => state
  },
  mutations: {

  },
  actions: { 
    // clearCurrentState:({ commit }) =>{
    //   commit(types.SET_AUTHENTICATED,false);
    //   commit(types.SET_USER,null);
    // }
  }
})
