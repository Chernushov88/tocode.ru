import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import notesStore from './notesStore'

export default new Vuex.Store({
  modules:{
    notesStore
  }
})