<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">



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



      </div>
    </section>
  </div>
</template>

<script>

  import modals from '@/components/UI/Modal.vue'

  export default {
    components: {modals},
    data(){
      return{
        modalFirst: false,
        modalSecond: {
          show: false,
          name: '',
          email: '',
        }
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
      }
    }
  }
</script>

<style scoped>

</style>