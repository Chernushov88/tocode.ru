// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home'
import FormValidate from '@/pages/FormValidate'
import FormHWValidete from '@/pages/FormHWValidete'
import RegistrationLogin from '@/pages/RegistrationLogin'
import NoteFound from '@/pages/404'

//Routering
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/validete',
      name: 'formValidete',
      component: FormValidate
    },
    {
      path: '/validete-hw',
      name: 'formHWValidete',
      component: FormHWValidete
    },
    {
      path: '/registration-login',
      name: 'registrationLogin',
      component: RegistrationLogin
    },
    {
      path: '*',
      name: 'noteFound',
      component: NoteFound
    }
  ]
})

