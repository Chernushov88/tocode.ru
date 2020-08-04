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
    removeNoteMutations(index) {
      state.notes.splice(index, 1)
    },
    gridMutation(state, newValue) {
      state.grid = newValue
    },

  },
  actions:{
    searchActions({ commit }, newValue) {
      commit('searchMutations', newValue)
    },
    removeNoteActions({commit}, newValue){
      commit('removeNoteMutations', newValue)
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