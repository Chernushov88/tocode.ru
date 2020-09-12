export default{
  state: {
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
  },
  mutations:{

  },
  actions:{

  },
  getters:{
    getPrioritys(state){
      return state.prioritys
    }
  }
}