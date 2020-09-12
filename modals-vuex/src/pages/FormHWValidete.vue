<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1 class="title">Popup form HW Validate</h1>
        <div class="flex">
          <!-- validateButton -->
          <buttonSlote><div slot="text">Show Modal with form + validateteButton HW</div></buttonSlote>
          <!--notifyComponents-->
          <notifyComponents />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  // UI
  import notifyComponents from '@/components/Notify.vue'
  // controls
  import buttonSlote from '@/components/UI/controls/buttons/ButtonSlote.vue'


  export default {
    components: {notifyComponents, buttonSlote},
  }
</script>

<style scoped>

</style>