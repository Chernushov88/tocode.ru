// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home'
import Users from '@/pages/Users'
import NoteFound from '@/pages/404'

//Routering
export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '*',
      name: 'noteFound',
      component: NoteFound
    }
  ]
})

