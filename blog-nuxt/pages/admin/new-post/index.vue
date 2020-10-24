<template>
  <newPosrForm @submit="onSubmit" />
</template>

<script>
  import newPosrForm from '@/components/Admin/NewPostForm.vue'
  export default {
    components:{newPosrForm},
    layout: 'admin',
    methods: {
      onSubmit(post){
        console.log('Post added!')
        console.log(post)
      }
    }
  }
</script>

<style scoped>

</style>
