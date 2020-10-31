import axios from 'axios'

export const state= () => ({
  postsLoaded: [],
  token: null
})

export const mutations = {
  setPosts (state, post) {
    console.log('setPosts state',state)
    console.log('setPosts post',post)
    state.postsLoaded = post
  },
  addPost (state, post) {
    console.log('addPost state',state)
    console.log('addPost post',post)
    state.postsLoaded.push(post)

  },
  editPost (state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },
  setToken (state, token) {
    state.token = token
  },
  destroyToken (state) {
    state.token = null
  }

}

export const actions = {
  nuxtServerInit ({commit}, contex){
    return axios.get('https://blog-nuxt-713ec.firebaseio.com/posts.json')
      .then(res => {

        const postsArray = []
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key })
        }
        commit('setPosts', postsArray)
      })
      .catch( e => console.log(e) )

  },
  authUser ( {commit}, authData ) {
    const key = 'AIzaSyBADugKjDWFhbCWG1PglQ1Q1caPv_YL8d0'
    //return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, {

    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
    //return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then((res) => { commit('setToken', res.data.idToken) })
      .catch(e => console.log(e))
  },
  logoutUser ( {commit} ){
    commit('destroyToken')
  },
  addPost: ( {commit}, post ) => axios.post('https://blog-nuxt-713ec.firebaseio.com/posts.json', post)
      .then(res => {
        console.log(res)
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch( e => console.log(e) ),
  editPost ({commit, state}, post) {
    return axios.put(`https://blog-nuxt-713ec.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
      .then(res => {
        commit('editPost', post)
      })
      .catch(e => console.log(e))
  }
}

export const getters = {
  getPostsLoaded (state) {
    console.log('getPostsLoaded state',state)
    return state.postsLoaded
  },
  checkAuthUser (state) {
    return state.token != null
  }

}
