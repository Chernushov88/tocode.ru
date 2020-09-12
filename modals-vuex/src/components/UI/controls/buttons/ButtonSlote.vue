<template>
  <div>
    <slot  name="body">
      <button class="btn btnPrimary" @click="setModalView('validation')">
        <slot  name="text"> Default button</slot>
      </button>
    </slot>
  </div>

</template>

<script>
  export default {
    methods:{
      setModalView(view){
        this.$store.dispatch('setModalView', view)
      }
    }
  }
</script>

<style scoped>

</style>