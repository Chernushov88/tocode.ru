<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title">Title:</AppInput>
        <AppInput v-model="post.descr">Description:</AppInput>
        <AppInput v-model="post.img">Img:</AppInput>
        <AppTextArea v-model="post.content">Content:</AppTextArea>
        <div class="controls">
          <AppButton class="btnDanger" type="button" @click="censel">Cencel</AppButton>
          <AppButton>Save!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      postEdit: {
        type: Object,
        requreid: false
      }
    },
    data() {
      return {
        post: this.postEdit ? {...this.postEdit} : {
            title: '',
            descr: '',
            img: '',
            content: '',
          }
      }
    },
    methods: {
      censel() {
        this.$router.push('/admin/')
      },
      onSubmit() {
        this.$emit('submit', this.post)
        //console.log(this.post)
      }
    }
  }
</script>

<style scoped lang="scss">
  .controls {
    text-align: center;
    margin: 20px 0;
  }
</style>
