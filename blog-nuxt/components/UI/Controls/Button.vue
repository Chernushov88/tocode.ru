<template>
  <button
    class="btn"
    :class="btnClass"
    v-on="$listeners"
    v-bind="$attrs"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    props:{
      btnClass:{
        type: String,
        default: 'btnPrimary'
      },
      type:{
        type: String,
        default: 'text'
      }
    }
  }
</script>

<style >

</style>
