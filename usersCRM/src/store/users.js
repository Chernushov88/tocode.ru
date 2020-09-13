export default{
  state:{
    message: 'hello vuex',
    users: [
      {id: 1, name: 'Jack', age: 22, gender: 'male'},
      {id: 2, name: 'Alex', age: 24, gender: 'male'},
    ],
    admin: false,
  },
  mutations: {
    setMessage(state, message){
      state.message = message
    }
  },
  actions: {
    setMessage({commit}, payload){
      commit('setMessage', payload)
    }
  },
  getters: {
    getMessage (state){
      return state.message
    }
  }
}