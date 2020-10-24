<template>
  <section class="comment">
    <div class="container">
      <Message v-if="message" :message="message"/>
      <form @submit.prevent="onSubmit" class="comment-form">
        <AppInput v-model="comment.name">Name:</AppInput>
        <AppTextArea  v-model="comment.text">Text:</AppTextArea>
        <!--        button-->
        <div class="controls">
          <AppButton> Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>

  export default {
    data(){
      return{
        message: null,
        comment:{
          name: '',
          text: '',
        }
      }
    },
    methods: {
      onSubmit(){
        console.log(this.comment)

        this.message = 'Submited!'

        this.comment.name = ''
        this.comment.text = ''
      }
    }
  }
</script>

<style lang="scss">
  .comment{
    text-align: center;
    /*background-color: #3f61ff;*/
    /*color: #fff;*/
    .title{
      /*color: #fff;*/
    }
    .comment-form{
      max-width: 600px;
      margin: 30px auto;
    }
    .controls{
      margin: 30px 0;
    }
  }

</style>
