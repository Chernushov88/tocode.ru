<template>
  <div>
    <loginModal v-show="showModalView === 'login'" @close="closeModalView"/>
    <registrationModal v-show="showModalView === 'registration'" @close="closeModalView" />
    <validationModal v-show="showModalView === 'validation'" @close="closeModalView" />
  </div>

</template>

<script>
  import loginModal from '@/components/UI/modals/Login.vue'
  import registrationModal from '@/components/UI/modals/Registration.vue'
  import validationModal from '@/components/UI/modals/Validate.vue'

  export default {
    components: {loginModal, registrationModal, validationModal,},
    computed:{
      showModalView(){
        return this.$store.getters.getModalView
      }
    },
    methods:{
      closeModalView(){
        this.$store.dispatch('setModalView', null)
      }
    }
  }
</script>


<style scoped></style>


