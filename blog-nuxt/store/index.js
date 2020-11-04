import axios from 'axios'
import Cookie from 'js-cookie'

export const state = () => ({
  token: null,
  postsLoaded: [],

})

export const mutations = {
  setPosts(state, post) {
    state.postsLoaded = post
  },
  addPost(state, post) {
    state.postsLoaded.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
    state.postsLoaded[postIndex] = postEdit
  },
  setToken(state, token) {
    state.token = token
  },
  destroyToken (state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({commit}){
    return axios.get('https://blog-nuxt-713ec.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = []
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key})
        }
        //console.log('postsArray', postsArray)
        commit('setPosts', postsArray)
      })
      .catch(e => console.log(e))
  },
  authUser ({commit}, authData) {
    const key = 'AIzaSyBADugKjDWFhbCWG1PglQ1Q1caPv_YL8d0'
    //return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, {
    //return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {

    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
      .then((res) => {
        let token = res.data.idToken
        commit('setToken', token)
        if (process.client) {
          localStorage.setItem('token', token)
        }
        Cookie.set('jwt', token)

      })
      .catch(e => console.log(e))
  },
  initAuth({commit}, req) {
    let token
    if(req){
      if (!req.headers.cookie) return false

      const jwtCookie = request.headers.cookie
        .split(';')
        .find(t => t.trim().startsWith('jwt='))
      if (!jwtCookie) return false

      token = jwtCookie.split('=')[1]

    }else {
      if (process.client) {
        token = localStorage.getItem('token');
      }
      if (!token) return false
    }
    commit('setToken', token)
  },
  logoutUser ( {commit} ){
    commit('destroyToken')
    if (process.client) {
      localStorage.removeItem('token');
    };
    Cookie.remove('jwt')
  },
  addPost( {commit}, post ){
    return axios.post('https://blog-nuxt-713ec.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', { ...post, id: res.data.name })
      })
      .catch( e => console.log(e) )
  },
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
    return state.postsLoaded
  },
  checkAuthUser (state) {
    return state.token != null
  }

}
