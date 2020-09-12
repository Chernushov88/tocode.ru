<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Popup form Validate</h1>

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
</template>

<script>
  import modalValidate from '@/components/ModalValidate'

  export default {
    components: {modalValidate},
    data(){
      return{
        modalValidate: false,
      }
    }
  }
</script>

<style scoped>

</style>