import loadMore from '../assets/js/loadMore.js'
import axios from 'axios'

const apiUrl = 'https://tocode.ru/static/c/vue-pro/notifyApi.php'
export default{
  state:{
    messages: [],
    messagesMain: [],
  },
  mutations: {
    setMessageMutations(state, payload){
      state.messages = payload
    },
    setMessageMainMutations(state, payload){
      state.messagesMain = payload
    },
    loadMessageMutations(state, payload){
      state.messagesMain = [...state.messagesMain, ...payload]
    },
  },
  actions: {
    setMessageActions({commit}, payload){
      commit('setMessageMutations', payload)
    },
    setMessageMainActions({commit}, payload){
      commit('setMessageMainMutations', payload)
    },
    loadMessageActions({commit, getters}){
      let res = getters.getMessageFilter
      commit('loadMessageMutations', loadMore(res))
    },
    getNotifyLazyActions({dispatch, commit}){
      return dispatch('setLoadingActions', true)
        .then( ()=>{
          setTimeout( ()=>{
            dispatch('getNotifyActions')
          }, 1500)
        })

    },
    getNotifyActions({state, dispatch}){
      return dispatch('setLoadingActions', true)
        .then( ()=> {
          axios
            .get(apiUrl)
            .then(response =>{
              let res = response.data.notify,
                messages = [],
                messagesMain = []
              // filter
              res.forEach( (e) =>{
                if (e.main) messagesMain.push(e)
                else messages.push(e)
              })
             // console.log({messages, messagesMain})
              dispatch('setMessageActions', messages)
              dispatch('setMessageMainActions', messagesMain)
            })
            .catch(error => {
              console.log(error)
              dispatch('setError', {messages:'Network Error', isError: error})
            })
            .finally( ()=>{
              dispatch('setLoadingActions', false)
            })
      })

    }
  },
  getters: {
    getMessage (state){
      return state.messages
    },
    getMessageFilter (state){
      return state.messages.filter(mes => {
        return mes.main === false
      })
    },
    getMessageMain (state){
      return state.messagesMain
    },

  }
}