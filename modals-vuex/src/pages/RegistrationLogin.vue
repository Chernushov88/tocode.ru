<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Popup form HW login registration</h1>

        <div class="flex">
          <!-- HomeWork level-2 -->
          <div class="menu flex">
            <!--Login-->
            <loginButton />
            <!--Registration-->
            <registrationButton />
            <!--notifyComponents-->
            <notifyComponents />



          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

  // UI
  import notifyComponents from '@/components/Notify.vue'
  // controls
  import loginButton from '@/components/UI/controls/buttons/Login.vue'
  import registrationButton from '@/components/UI/controls/buttons/Registration.vue'

  export default {
    components: {loginButton, registrationButton, notifyComponents},
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
    },
  }
</script>

<style scoped>

</style>