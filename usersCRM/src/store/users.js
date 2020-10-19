import axios from 'axios';

export default{
  state:{
    users: [
      {
        id: 1, name: 'Ack',
        age: 22,
        gender: 'male',
        picture:{"large":"https://randomuser.me/api/portraits/women/31.jpg","medium":"https://randomuser.me/api/portraits/med/women/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/31.jpg"}
      },
      {
        id: 2, name: 'Lex', age: 24, gender: 'male',
        picture: {
          "large": "https://randomuser.me/api/portraits/women/64.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
        }
      },
      {
        id: 3, name: 'Jack',
        age: 20,
        gender: 'ale',
        picture:{"large":"https://randomuser.me/api/portraits/women/31.jpg","medium":"https://randomuser.me/api/portraits/med/women/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/31.jpg"}
      },
      {
        id: 4, name: 'Alex', age: 44, gender: 'le',
        picture: {
          "large": "https://randomuser.me/api/portraits/women/64.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
        }
      },
      {
        id: 5, name: 'Dack',
        age: 25,
        gender: 'male',
        picture:{"large":"https://randomuser.me/api/portraits/women/31.jpg","medium":"https://randomuser.me/api/portraits/med/women/31.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/31.jpg"}
      },
      {
        id: 6, name: 'Clex', age: 42, gender: 'e',
        picture: {
          "large": "https://randomuser.me/api/portraits/women/64.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
        }
      },
    ],
    currentSort: '',
    currentSortDir: 'asc',
    visibleClass: '',
    page: {
      current: 1,
      length: 3
    }
  },
  mutations: {
    sortMutations(state, payload){
      // console.log('sortMutations', state)
      // console.log('sortMutations', payload)
      if (payload === state.currentSort) {
        state.currentSortDir = state.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      state.currentSort = payload
    },
    prevPageMutations(state) {
      if (state.page.current > 1) state.page.current -= 1
    },
    nextPageMutations(state) {
      if ((state.page.current * state.page.length) < state.users.length) state.page.current += 1
    }
  },
  actions: {
    setMessage({commit}, payload){
      commit('setMessage', payload)
    },
    usersSortAction({commit}, payload){
      commit('usersSortMutation', payload)
    }
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
        let start = (state.page.current - 1) * state.page.length
        let end = state.page.current * state.page.length
        if (index >= start && index < end) return true
      })
    },
    currentUser(state){
      return state.page.current
    },
    currentUserSort(state){
      return state.currentSort
    },
    currentUserSortDir(state){
      console.log('currentUserSortDir', state)
      return state.currentSortDir
    },
    pagesLangth(state){
      return Math.ceil(state.users.length / state.page.length)
    },
    loadUsers(state){
      axios
        .get('https://randomuser.me/api/?results=14')
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