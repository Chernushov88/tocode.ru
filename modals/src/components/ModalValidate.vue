<template>
  <modal
      title="Modal with form + Validate"
      @close='$emit("close")'
  >
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- Name -->
        <div class="form-item" :class="{errorInput: $v.name.$error}">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required"> Filed is required! </p>
          <p class="errorText" v-if="!$v.name.minLength"> Name must have at least {{ $v.name.$params.minLength.min }} !</p>
          <input
            v-model="name"
            :class="{ error: $v.name.$error }"
            @change="$v.name.$touch()"
          >
        </div>
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
        <!-- Repeat password -->
        <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
          <label>Repeat Password:</label>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</p>
          <div class="input">
            <input
                :type="repeatType"
                v-model="repeatPassword"
                :class="{ error: $v.repeatPassword.$error }"
                @change="$v.repeatPassword.$touch()"
            />
            <div class="icons">
              <img
                  src="https://img.icons8.com/material/24/000000/visible--v1.png"
                  v-if="repeatType === 'password'"
                  @click="repeatType = 'text'"
              />
              <img
                  src="https://img.icons8.com/material-rounded/24/000000/hide.png"
                  v-if="repeatType === 'text'"
                  @click="repeatType = 'password'"
              />
            </div>
          </div>
        </div>




        <button class="btn btnPrimary"
        >Submit</button>
      </form>
    </div>
  </modal>
</template>

<script>
  import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
  import modal from '@/components/UI/Modal.vue'

  export default {
    components: {modal},
    data(){
      return{
        name: '',
        email: '',
        password: "",
        repeatPassword: "",
        passwordType: "password",
        repeatType: "password",
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword:{
        sameAsPassword: sameAs("password")
      }
    },
    methods: {
      onSubmit(){
        this.$v.$touch()
        if(!this.$v.$invalid){
          const user = {
            name: this.name,
            email: this.email,
            password: this.password
          }
          console.log(user)
          this.name = ''
          this.email = ''
          this.password = ""
          this.repeatPassword = ""
          this.$v.$reset()
          this.$emit('close')
        }
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