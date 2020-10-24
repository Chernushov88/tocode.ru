<template>
  <newPosrForm
    :postEdit="post"
    @submit="onSubmit" />
</template>

<script>
  import newPosrForm from '@/components/Admin/NewPostForm.vue'
  export default {
    components:{newPosrForm},
    layout: 'admin',
    data() {
      return {
        post: {
          id: 1,
          title: 'post 1',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, eaque eveniet ex facere',
          img: '/img/1.jpg',
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure libero odit quae totam. Architecto deleniti ducimus enim eos et, excepturi illo impedit libero nobis officiis porro, saepe sit voluptates!',
        },
        comments: [
          {
            name: 'Alex',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, eaque eveniet ex facere'
          },
          {
            name: 'Sergey',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, eaque eveniet ex facere'
          }
        ]
      }
    },
    methods: {
      onSubmit(post){
        console.log('Post Editing!')
        console.log(post)
      }
    }
  }
</script>

<style scoped>

</style>
