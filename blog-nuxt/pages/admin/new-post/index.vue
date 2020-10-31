<template>
  <newPosrForm @submit="onSubmit" />
</template>

<script>
  import newPosrForm from '@/components/Admin/NewPostForm.vue'
  export default {
    components:{ newPosrForm },
    layout: 'admin',
    methods: {
      onSubmit(post){
        this.$store.dispatch('addPost', post)
        .then( () => {
          this.$router.push('/admin')
        })
      }
    }
  }
</script>

<style scoped>

</style>
