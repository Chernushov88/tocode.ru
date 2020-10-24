<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"/>
    <comments :comments="comments"/>
    <newComment/>
  </div>
</template>

<script>
  import post from '@/components/Blog/Post.vue'
  import newComment from '@/components/Comments/NewComment.vue'
  import comments from '@/components/Comments/Comments.vue'

  export default {
    components: {post, comments, newComment},
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
    }
  }
</script>


<style lang="scss">
  .post {
    max-width: 900px;
    margin: 0 auto;

    &-header {
      text-align: center;
      margin-bottom: 30px;

      img {
        min-width: 400px;
        margin-bottom: 16px;
      }

      p {
        color: #999;
      }
    }

    &-body {
      text-align: left;
    }
  }
</style>
