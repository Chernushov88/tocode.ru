<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Popup form HW Validate</h1>

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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import modalValidateNew from '@/components/ModalValidateNew.vue'


  export default {
    components: {modalValidateNew},
    data(){
      return{
        modalValidateNew: false,
      }
    }
  }
</script>

<style scoped>

</style>