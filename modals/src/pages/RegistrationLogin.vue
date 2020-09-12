<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Popup form HW login registration</h1>

        <div class="flex">
          <!-- HomeWork level-2 -->
          <div class="menu flex">
            <!--Login-->
            <a class="flex" @click="login = !login">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
              <span>Login</span></a>
            <login
                v-show="login"
                @close='login = false'
                @registrationAccount = 'registrationAccount'
            />

            <!--Registration-->
            <a class="flex" @click="registration = !registration">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Registration</span></a>
            <registration
                v-show="registration"
                @close='registration = false'
                @LoginAccount = 'LoginAccount'
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import login from '@/components/Login'
  import registration from '@/components/Registration.vue'

  export default {
    components: {login, registration},
    data(){
      return{
        login: false,
        registration: false,
      }
    },
    methods: {
      registrationAccount(){
        this.email = ''
        this.password = ''
        this.login = false
        this.registration = true
      },
      LoginAccount(){
        this.registration = false
        this.login = true
      }
    }
  }
</script>

<style scoped>

</style>