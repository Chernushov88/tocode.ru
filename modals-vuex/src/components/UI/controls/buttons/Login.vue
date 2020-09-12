<template>
  <!--Login-->
  <a class="flex" @click="setModalView('login')">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
      <polyline points="10 17 15 12 10 7"></polyline>
      <line x1="15" y1="12" x2="3" y2="12"></line>
    </svg>
    <span>Login</span></a>
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