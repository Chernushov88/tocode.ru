<template>
  <newPosrForm
    :postEdit="post"
    @submit="onSubmit" />
</template>

<script>
  import axios from 'axios'
  import newPosrForm from '@/components/Admin/NewPostForm.vue'

  export default {
    components:{newPosrForm},
    layout: 'admin',
    //validate({params, store}) {
      //return store.state.postsLoaded.some(post => post.id === params.postid);
    //},
    asyncData (context) {
      return axios.get(`https://blog-nuxt-713ec.firebaseio.com/posts/${context.params.postId}.json`)
        .then(res => {
          return {
            post: { ...res.data, id: context.params.postId }
          }
        })
        .catch( e => context.error(e) )
    },
    methods: {
      onSubmit(post){
        console.log('Post Editing!')
        this.$store.dispatch('editPost', post)
        .then( () => {
          this.$router.push('/admin')
        })
      }
    }
  }
</script>

<style scoped>


</style>
