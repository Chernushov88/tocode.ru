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
      id: Date.now(),
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
        id: Date.now() + 1,
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
        id: Date.now() + 2,
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
        id: Date.now() + 3,
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
    setEditFieldMutations(state, [id, field]) {
      if (field == 'title') {
        state.notes[id].isEditTitle = true
      }
      if (field == 'body') {
        state.notes[id].isEditBody = true
      }

    },
    saveNoteTitleMutations(state,id) {
      state.notes[id].id = Date.now()
      state.notes[id].date = new Date(Date.now()).toLocaleString()
      state.notes[id].title = state.notes[id].filds.titleFild
      state.notes[id].isEditTitle = false
    },
    resetNoteTitleMutations(state, id) {
      state.notes[id].isEditTitle = false
    },
    saveNoteBodyMutations(state, id) {
      state.notes[id].id = Date.now()
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
    setEditFieldActions({commit},value){
      commit('setEditFieldMutations', value)
    },
    saveNoteTitleActions({commit},value){
      commit('saveNoteTitleMutations', value)
    },
    resetNoteTitleActions({commit},value){
      commit('resetNoteTitleMutations', value)
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


