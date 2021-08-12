<template>
  <div class = "block-status">
    <label>Status</label>
    <ul>
      <li>
        <label>
          <input type = "radio" name = "radio" id = "standart" value = "standart">
          standart
        </label>
      </li>
      <li>
        <label>
          <input type = "radio" name = "radio" id = "important" value = "important">
          important
        </label>
      </li>
      <li>
        <label>
          <input type = "radio" name = "radio" id = "veryImportant" value = "veryImportant">
          veryImportant
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 props: {
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
    ]
 },
  methods:{
    prioritys_cheng (){
    
    }
  }
}
</script>

<style lang = "scss" scoped>

</style>
