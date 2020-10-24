<template>
  <div class="message" :class="mesClass">
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    props:{
      mesClass:{
        type: String,
        default: 'success'
      },
      message:{
        type: String,
        default: true
      }
    }
  }
</script>

<style lang="scss">
  .message{
    font-size: 22px;
    &.success{
      color: #07e017;
    }
    &.error{
      color: #e0122d;
    }
  }
</style>

