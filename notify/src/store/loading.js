export default {
  state: {
    loading: false,
  },
  mutations: {
    setLoadingMutations(state, payload){
      state.loading = payload
    }
  },
  actions: {
    setLoadingActions({commit}, payload){
      return new Promise((resolve, reject) =>{
        commit('setLoadingMutations', payload)
        resolve()
      })
    }
  },
  getters: {
    getLoading(state){
      return state.loading
    }
  }
}

