<template>
  <ul>
    <li v-for='(item, index) in prioritys' :key='index'>
      <label>
        <input
            type='radio'
            name='radio'
            :checked='item.checked'
            :id='item.name'
            :value='item.name'
            v-model='note.priority'

        />
        {{item.name}}
      </label>
    </li>
  </ul>
</template>

<script>
  export default {
    props:{
      note: {
        type: Object,
        requeired: true,
      },
      prioritys: {
        type: Array,
        requeired: true,
      }
    },
    created() {
      console.log(this.note)
      console.log(this.prioritys)
    },
  }
</script>

<style scoped>

</style>