<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts:" />
    <PostsList :posts="postsLoaded"/>
    <contact />
  </div>
</template>

<script>
  import promo from '@/components/Promo.vue'
  import contact from '@/components/Contact.vue'

  export default {
    components:{
      promo,
      contact
    },
    head() {
      const title = 'My SSR blog!';
      const description = 'My SSR blog! With Nuxt.js';
      const type = 'site';

      return {
        title,
        meta: [
          { hid: 'og:title', name: 'og:title', content: title },
          { hid: 'description', name: 'description', content: description },
          { hid: 'og:description', name: 'og:description', content: description },
          { hid: 'og:type', name: 'og:type', content: type },
        ],
      };
    },
    computed: {
      postsLoaded () {
        return this.$store.getters.getPostsLoaded
      }
    }
  }
</script>

