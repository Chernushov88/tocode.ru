export default{
  state:{
    modalView: null
  },
  mutations: {
    setModalView(state, view){
      console.log(view)
      state.modalView = view
    }
  },
  actions: {
    setModalView({commit}, view){
      console.log(view)
      commit('setModalView', view)
    }
  },
  getters: {
    getModalView(state){
      return state.modalView
    }
  }
}