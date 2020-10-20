import axios from 'axios';

const apiUrl = 'https://randomuser.me/api/?results=14'

export default{
  state:{
    users: [],
    currentSort: 'emai;',
    currentSortDir: 'asc',
    visibleClass: '',
    page: {
      current: 1,
      length: 3
    }
  },
  mutations: {
    sortMutations(state, sort){
      if (sort === state.currentSort) {
        state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      state.currentSort = sort
    },
    prevPageMutations: state => state.page.current > 1 ? state.page.current -= 1 : '',
    nextPageMutations: state => state.page.current * state.page.length < state.users.length ? state.page.current += 1 : ''
  },
  actions: {
    setMessage: ({commit}, payload) => commit('setMessage', payload),
    usersSortAction: ({commit}, payload) => commit('usersSortMutation', payload),
    sortAction: ({commit}, sort) => commit('sortMutations', sort)
  },
  getters: {
    usersSort (state){
      return state.users.sort((a, b) => {
        let mod = 1
        if (state.currentSortDir === 'desc') mod = -1
        if (a[state.currentSort] < b[state.currentSort]) return -1 * mod
        if (a[state.currentSort] > b[state.currentSort]) return 1 * mod
        return 0
      }).filter((row, index) => {
        let start = (state.page.current - 1) * state.page.length,
            end = state.page.current * state.page.length
        if (index >= start && index < end) return true
      })
    },
    currentUser: state => state.page.current,
    currentUserSort:state => state.currentSort,
    currentUserSortDir: state => state.currentSortDir,
    pagesLangth: state => Math.ceil(state.users.length / state.page.length),
    loadUsers(state){
      axios
        .get(apiUrl)
        .then(response => {
          state.users = response.data.results
        })
        .catch(error => {
          //console.log(error)
          state.users = error
        })
    }
  }
}