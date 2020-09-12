<template>
  <modal
      title="Login"
      @close='resetForm'
  >
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- email -->
        <div class="form-item" :class="{errorInput: $v.email.$error}">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Filed is required! </p>
          <p class="errorText" v-if="!$v.email.email">Filed Email is not correct</p>
          <input
              v-model="email"
              :class="{ error: $v.email.$error }"
              @change="$v.email.$touch()"
          >
        </div>
        <!-- Password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Password is required !</p>
          <p class="errorText" v-if="$v.password.$error">Password should be moore then 6</p>

          <div class="input">
            <input
                :type="passwordType"
                v-model="password"
                :class="{ error: $v.password.$error }"
                @change="$v.password.$touch()"
            >
            <div class="icons">
              <img
                  src="https://img.icons8.com/material/24/000000/visible--v1.png"
                  v-if="passwordType === 'password'"
                  @click="passwordType = 'text'"
              />
              <img
                  src="https://img.icons8.com/material-rounded/24/000000/hide.png"
                  v-if="passwordType === 'text'"
                  @click="passwordType = 'password'"
              />
            </div>
          </div>
        </div>
        <button class="btn btnPrimary"
        >Submit</button>
      </form>
      <a @click="showModalView('registration')" >I need an account</a>
    </div>
  </modal>
</template>

<script>
  import { required, minLength, email } from 'vuelidate/lib/validators'
  import modal from '@/components/UI/Modal.vue'

  export default {
    components: {modal},
    data(){
      return{
        email: '',
        password: "",
        repeatPassword: "",
        passwordType: "password",
        repeatType: "password",
      }
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
    },
    methods: {
      onSubmit(){
        this.$v.$touch()
        if(!this.$v.$invalid){
          const user = {
            email: this.email,
            password: this.password
          }
          console.log(user)
          this.email = ''
          this.password = ""
          this.$v.$reset()
          this.$emit('close')
        }
      },
      resetForm(){
        this.email = ''
        this.password = ""
        this.$v.$reset()
        this.$emit("close")
      },
      showModalView(view){
        this.$store.dispatch('setModalView', view)
      }
    }
  }
</script>

<style lang="scss">
  .form-item {
    .errorText{
      display: none;
      margin-bottom: 8px;
      font-size: 13.4px;
      color: #ba3838;
    }
    &.errorInput .errorText{
      display: block;
    }
    input.error{
      border-color: #ba3838;
    }
  }
  .input {
    position: relative;
    .icons {
      position: absolute;
      right: 0;
      top: 30%;
      transform: translate(-50%, -50%);
      z-index: 10;
      & > img {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

</style>