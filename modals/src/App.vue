<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">

          <div class="flex">
            <!-- HomeWork level-1 -->
            <button
                class="btn btnPrimary"
                @click="modalValidateNew = !modalValidateNew"
            >Modal validate HW
            </button>
            <modalValidateNew
                v-show="modalValidateNew"
                @close='modalValidateNew = false'
            />
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
          <br/><br/>
          <hr/>
          <br/><br/>

          <!--First Modal-->
          <button
              class="btn btnPrimary"
              @click="modalFirst = !modalFirst"
          >Show First Modal
          </button>
          <modals
              title="First Modal"
              v-show="modalFirst"
              @close="modalFirst = false"
          >
            <div slot="body">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid architecto dolor eaque esse
                excepturi exercitationem id laudantium libero, nam porro possimus qui, quis saepe sunt unde velit
                veritatis voluptate.</p>
              <br>
              <button
                  class="btn btnPrimary"
                  @click="modalFirst = false"
              >Well Done!
              </button>
            </div>
            <div slot="footer">
              <p>Footer</p>
            </div>
          </modals>
          <!--Second Modal-->
          <button
              class="btn btnPrimary"
              @click="modalSecond.show = !modalSecond.show"
          >Show Modal with form
          </button>
          <modals
              title="Modal with form"
              v-show="modalSecond.show"
              @close="modalSecond.show = false"
          >
            <div slot="body">
              <form @submit.prevent="submitSecondForm">
                <label>Name:</label>
                <input type="text" required v-model="modalSecond.name">
                <label>Email:</label>
                <input type="email" required v-model="modalSecond.email">
                <button class="btn btnPrimary"
                >Submit
                </button>
              </form>
            </div>
          </modals>
          <!-- Modal with validate-->
          <button
              class="btn btnPrimary"
              @click="modalValidate = !modalValidate"
          >Show Modal with form + validate
          </button>
          <modalValidate
              v-show="modalValidate"
              @close='modalValidate = false'
          />


        </div>
      </section>
    </div>
  </div>
</template>


<script>
  import modals from '@/components/UI/Modal'
  import modalValidate from '@/components/ModalValidate'

  import modalValidateNew from '@/pages/ModalValidateNew.vue'
  import login from '@/components/Login'
  import registration from '@/components/Registration.vue'

  export default {
    components: {modals, modalValidate, modalValidateNew, login, registration},
    data() {
      return {
        modalFirst: false,
        modalSecond: {
          show: false,
          name: '',
          email: '',
        },
        modalValidate: false,
        modalValidateNew: false,
        login: false,
        registration: false,
      }
    },
    methods: {
      submitSecondForm() {
        console.log({
          name: this.modalSecond.name,
          email: this.modalSecond.email,
        })
        this.modalSecond.name = ''
        this.modalSecond.email = ''
        this.modalSecond.show = false
      },
      registrationAccount(){
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

<style lang="scss">
  .btn {
    margin: 0.3em;
    &:hover {
      opacity: 0.7;
    }
  }


  .menu {
    justify-content: center;

    a {
      padding: 10px;
      cursor: pointer;

      &:hover {
        color: #494ce8;
      }
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

