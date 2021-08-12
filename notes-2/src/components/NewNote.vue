<template>
  <!-- new note -->
  <div class = "new-note">
    
    <div class = "flex">
      <h2 class = "block-title">
        <label for = 'input-title'>Title</label>
        <input type = 'text' v-model = 'note.title' id = 'input-title'>
      </h2>
      <div class = "block-status">
       <div class = "block-status">
        <h2 class = "new-note__title">Priority</h2>

    <div class = "checkbox">
      <div v-for = "(item, index) in 3" :key = "index">
        <input
          :id = "index"
          type = "radio"
          v-model = "note.type"
          :value = "typesCamelCase[index]">
        <label :for = "index" class = "checkbox__item"
               :class = "{[classesForLabels[index]]: note.type === typesCamelCase[index], }">
          {{ buttonNames[index] }}
        </label>
      </div>
    </div>
      </div>
      </div>
    </div>
    
    <label>Description</label>
    <textarea v-model = "note.descr"></textarea>
    
    <button class = "btn btnPrimary" :class = "`new-note__button_${types[note.type].color}`"
            @click = "addNote">New note</button>
  </div>
</template>

<script>
  export default {
   props: {
    note: {
     type: Object,
     required: true
    },
    types: {
     type: Object,
     requeired: true,
    }
   },
   data() {
    return{
      buttonNames: ['Normal', 'High', 'Very high'],
      typesCamelCase: ['normal', 'high', 'veryHigh'],
      classesForLabels: [ 'checked-normal', 'checked-high', 'checked-very-high']
    }
   },
   methods: {
    addNote() {
      console.log('NewNete addNote - ', this.note)
     this.$emit('addNote', this.note)
    }
   }
  }
</script>

<style lang = "scss">
.new-note {
    text-align: center;
    .block-title {
        width: 48%;
        min-width: 360px;
    }
    .block-status {
        width: 48%;
        min-width: 360px;
        margin-bottom: 30px;
        label {
            text-align: left;
        }
        ul li {
            display: flex;
            align-items: center;
            label {
                margin: 0;
                font-weight: normal;
            }
            input {
                width: auto;
                margin: 0 5px 0;
                padding: 0;
            }
        }
    }
}
.flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
  .checkbox{
    display: flex;
    align-items: center;
    justify-content: center;
    & > div{
      display: flex;
      align-items: center;
      margin: 0 5px;
      input{
        width: auto;
        height: 12px;
        padding: 0;
        margin: 0px 10px 0 0;
      }
      label{
        margin: 0;
      }
    }
  }
</style>

