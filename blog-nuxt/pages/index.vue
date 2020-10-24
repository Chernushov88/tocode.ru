<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts:" />
    <PostsList :posts="postLoaded"/>
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
    asyncData(context){
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve({
            postLoaded: [
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
          })
        }, 1500)
      })
    }
  }
</script>

