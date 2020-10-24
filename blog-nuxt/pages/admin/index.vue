<template>
    <PostsList :admin=true :posts="posts"/>
</template>

<script>
  export default {
    layout: 'admin',
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
            img: 'https://icdn.lenta.ru/images/2020/01/10/16/20200110163015837/square_1280_d3a19431c4a260d79acc6fd31862220a.png'
          },
          {
            id: 3,
            title: 'post 3',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi, eaque eveniet ex facere',
            img: 'https://icdn.lenta.ru/images/2019/12/06/12/20191206122159535/pwa_vertical_1280_dab2ef83b33313f403795e63869f6cc7.jpg'
          },
        ]
      }
    }
  }
</script>
