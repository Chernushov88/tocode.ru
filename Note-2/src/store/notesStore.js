export default{
  state:{
    title: 'Note App',
    search: '',
    message: null,
    grid: true,
    prioritys: [
      {
        name: 'standart',
        checked: 'checked',
      },
      {
        name: 'important',
        checked: false,
      },
      {
        name: 'veryImportant',
        checked: false,
      }
    ],
    note: {
      title: '',
      priority: '',
      descr: '',
      isEditTitle: false,
      isEditBody: false,
      filds: {
        titleFild: '',
        descrFild: '',
      },
    },
    notes: [
      {
        title: 'First Note',
        descr: 'descr for First Note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        isEditTitle: false,
        isEditBody: false,
        filds: {
          titleFild: '',
          descrFild: '',
        },
      },
      {
        title: 'Second Note',
        descr: 'descr for second Note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        isEditTitle: false,
        isEditBody: false,
        filds: {
          titleFild: '',
          descrFild: '',
        },
      },
      {
        title: 'Third Note',
        descr: 'descr for third Note',
        date: new Date(Date.now()).toLocaleString(),
        priority: 'standart',
        isEditTitle: false,
        isEditBody: false,
        filds: {
          titleFild: '',
          descrFild: '',
        },
      }
    ]
  },
  mutations:{
    searchMutations(state, newValue) {
      state.search = newValue
    },
    removeNoteMutations(state, index) {
      state.notes.splice(index, 1)
    },
    setEditTitleMutations(state, id) {
      state.notes[id].isEditTitle = true
    },
    saveNoteTitleMutations(state,id) {
      state.notes[id].date = new Date(Date.now()).toLocaleString()
      state.notes[id].title = state.notes[id].filds.titleFild
      state.notes[id].isEditTitle = false
    },
    resetNoteTitleMutations(state, id) {
      state.notes[id].isEditTitle = false
    },
    setEditBodyMutations(state, id) {
      state.notes[id].isEditBody = true
    },
    saveNoteBodyMutations(state, id) {
      state.notes[id].date = new Date(Date.now()).toLocaleString()
      state.notes[id].descr = state.notes[id].filds.descrFild
      state.notes[id].isEditBody = false
    },
    resetNoteBodyMutations(state, id) {
      state.notes[id].isEditBody = false
    },
    gridMutation(state, newValue) {
      state.grid = newValue
    },

  },
  actions:{
    searchActions({ commit }, newValue) {
      commit('searchMutations', newValue)
    },
    removeNoteActions({commit},value){
      commit('removeNoteMutations', value)
    },
    setEditTitleActions({commit},value){
      commit('setEditTitleMutations', value)
    },
    saveNoteTitleActions({commit},value){
      commit('saveNoteTitleMutations', value)
    },
    resetNoteTitleActions({commit},value){
      commit('resetNoteTitleMutations', value)
    },
    setEditBodyActions({commit},value){
      commit('setEditBodyMutations', value)
    },
    saveNoteBodyActions({commit},value){
      commit('saveNoteBodyMutations', value)
    },
    resetNoteBodyActions({commit},value){
      commit('resetNoteBodyMutations', value)
    },
    gridActions({ commit }, newValue) {
      commit('gridMutation', newValue)
    },
  },
  getters:{
    getNotes(state){
      return state
    }
  }
}