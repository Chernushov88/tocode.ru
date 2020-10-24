<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts:" />
    <PostsList
      :posts="posts"
    />
  </div>
</template>

<script>

  export default {
    components:{
    },
    data(){
      return{
        posts: [
          {
            id: 1,
            title: 'post 1',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, eaque eveniet ex facere',
            img: '/img/1.jpg'
          },
          {
            id: 2,
            title: 'post 2',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, eaque eveniet ex facere',
            img: '/img/2.jpg'
          },
          {
            id: 3,
            title: 'post 3',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, eaque eveniet ex facere',
            img: '/img/3.jpg'
          },
        ]
      }
    }
  }
</script>

