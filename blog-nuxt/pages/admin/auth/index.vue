<template>
  <section class="auth">
    <div class="container">
      <form class="auth__form" @submit.prevent="onSubmit">
        <ul class="list">
          <li><b>Login - </b>ser@ser.ser</li>
          <li><b>Password - </b>serser</li>
        </ul>
        <br>
        <AppInput type="email" v-model="user.email"> Login:</AppInput>
        <AppInput type="password" v-model="user.password"> Password:</AppInput>
        <div class="controls">
          <AppButton> Login!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$store.dispatch('authUser', this.user)
          .then((res) => {
            this.$router.push('/admin')
          })
          .catch(e => {
            this.user.email = ''
            this.user.password = ''
            console.log(e)
          })
      }
    }
  }
</script>

<style lang="scss">
  .auth {
    text-align: center;

    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 70vh;

      input {
        min-width: 460px;
      }
    }
  }
</style>
