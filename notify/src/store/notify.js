import loadMore from '../assets/js/loadMore.js'
import axios from 'axios'

//const apiUrl = 'https://tocode.ru/static/c/vue-pro/notifyApi.php'
const apiUrl = 'http://vuejs.skarlat.tmweb.ru/notifyApi.php'
export default{
  state:{
    messages: [],
    messagesMain: [],
  },
  mutations: {
    setMessageMutations: (state, mes) => state.messages = mes,
    setMessageMainMutations :(state, mes) => state.messagesMain = mes,
    loadMessageMutations: (state, payload) => state.messagesMain = [...state.messagesMain, ...payload],
    getMessageFilterMutation: (state) => state.getMessageFilter.length
  },
  actions: {
    setMessageActions({commit}, mes){
      commit('setMessageMutations', mes)
    },
    setMessageMainActions({commit}, mes){
      commit('setMessageMainMutations', mes)
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
    getMessage: state => state.messages,
    getMessageMain: state => state.messagesMain,
    getMessageFilter: (state) => state.messages.filter(mes => mes.main === false)
    // getMessageFilter (state){
    //   return state.messages.filter(mes => {
    //     return mes.main === false
    //   })
    // }
  }
}