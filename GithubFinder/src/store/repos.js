import axios from 'axios'
export default {
  state:{
    repos: null,
    user: null,
    sort: {
      field: 'name',
      dir: 'asc',
    },
    page: {
      current: 1,
      itemPerPage: 5
    },
  },
  mutations:{
    setUserMutations(state, payload){
      state.user = payload
    },
    setReposMutations(state, payload){
      state.repos = payload
    },
    setSortMutations(state, payload){
      state.sort = payload
    },
    sortReposMutations(state, payload){
      if (payload === state.sort.field){
        state.sort.dir = state.sort.dir === 'asc' ? 'desc' : 'asc';
      }else {
        state.sort.dir = 'asc'
      }
      state.sort.field = payload;
    },
    setPageMutations(state, payload) {
      state.page.current = payload;
    }
  },
  actions:{
    getReposActions({commit}, search){
      // https://api.github.com/users/vedees/repos
      commit('setPageMutations', 1);
      commit('setSortMutations', {field: 'name', dir: 'asc'});

      const getUser = axios.get(`https://api.github.com/users/${search}`)
      const getRepos = axios.get(`https://api.github.com/users/${search}/repos`)
      console.log(getRepos)
      Promise.all([getUser, getRepos])
        .then(res => {
          if (res[0].status === 200){
            console.log(commit)
            console.log(search)
            commit('setUserMutations', res[0].data)
            commit('setReposMutations', res[1].data)
            commit('setError', null)
          }else{
            commit('setError', `Can't find user ${search}.`);
          }
        })
        .catch(err => {
          console.log(err)
          commit('setUserMutations', null)
          commit('setReposMutations', null)
          commit('setError', err)
        })
    }
  },
  getters:{
    getUser(state){
      return state.user
    },
    getRepos(state){
      return state.repos
    },
    getSort(state) {
      return state.sort;
    },
    getReposSorted(state) {
      return state.repos.sort((a, b) => {
        let mod = 1
        if (state.sort.dir === 'desc') {
          mod = -1
        }
        if (a[state.sort.field] < b[state.sort.field]) {
          return -1 * mod
        }
        if (a[state.sort.field] > b[state.sort.field]) {
          return 1 * mod
        }
        return 0
      }).filter((row, index) => {
        let start = (state.page.current - 1) * state.page.itemPerPage;
        let end = state.page.current * state.page.itemPerPage
        if (index >= start && index < end) return true
      })
    },
    getPage(state) {
      return state.page.current;
    },
    getItemPerPage(state) {
      return state.page.itemPerPage;
    },
  },
}