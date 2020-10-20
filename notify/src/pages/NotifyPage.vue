<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="notify__wrapper">
          <div class="notify-title">
            <p>Notify App</p>
            <reload />
          </div>
          <div class="notify-content">
            <preloader
                v-if="getLoading"
                :width="90"
                :height ="90"
            />
            <div class="error" v-if="getError.isError">
              <p class="isError">{{getError.message}}</p>
            </div>
            <notify v-if="!getLoading" :messages="getMessageMain"
            />
          </div>
        </div>        
      </div>
    </section>
  </div>
</template>

<script>

  import notify from '@/components/Notify.vue'
  import reload from '@/components/SVG/Reload.vue'

  import { mapGetters, mapActions } from 'vuex'
  // UI
  import preloader from '@/components/UI/Preloader.vue'

  export default {
    components: {notify, preloader, reload},
    mounted(){
      this.$store.dispatch('getNotifyLazyActions')
      //...mapActions(['getNotifyLazyActions'])
    },
    computed:{
      ...mapActions(['getNotifyLazyActions']),
      ...mapGetters(['getMessageMain','getLoading', 'getError'])
    },
    methods: {


    }
  }
</script>


<style lang="scss" scoped>
  section, .section {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100vh;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }


  .notify__wrapper {
    width: 90%;
    max-width: 700px;
    min-height: 400px;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 16px;
    box-shadow: 0 12px 22px 0 rgba(0,0,0,.1);
    max-height: 80vh;
    //overflow-y: scroll;
    //overflow-y: scroll;
    margin: auto;
  }

  .notify__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 300px;
  }

  .notify-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 24px;
    }
  }

</style>

