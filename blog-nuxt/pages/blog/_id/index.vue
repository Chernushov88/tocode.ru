<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post"/>
    <comments :comments="comments" />
    <newComment :postId="$route.params.id" />
  </div>
</template>

<script>
  import axios from 'axios'
  import post from '@/components/Blog/Post.vue'
  import newComment from '@/components/Comments/NewComment.vue'
  import comments from '@/components/Comments/Comments.vue'


  export default {
    components: {post, comments, newComment},
    async asyncData (context) {
      let [post, comments] = await Promise.all([
        axios.get(`https://blog-nuxt-713ec.firebaseio.com/posts/${context.params.id}.json`),
        axios.get(`https://blog-nuxt-713ec.firebaseio.com/comments.json`)
      ])
      let commentsArrayRes = Object.values(comments.data).filter( comment => (comment.postId === context.params.id) && comment.publish )
      return {
        post: post.data,
        comments: commentsArrayRes
      }
    },
    head() {
      const title = this.post.title;
      const description = this.post.descr;
      const img = this.post.img;
      const type = 'article';

      return {
        title,
        meta: [
          { hid: 'og:title', name: 'og:title', content: title },
          { hid: 'description', name: 'description', content: description },
          { hid: 'og:description', name: 'og:description', content: description },
          { hid: 'og:type', name: 'og:type', content: type },
          { hid: 'og:img', name: 'og:img', content: img },
        ],
      };
    },
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
