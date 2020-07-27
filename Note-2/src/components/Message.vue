<template>
    <div class="message">
        <h3>Message component - {{ message }}</h3>
    </div>
</template>

<script>
    export default {
        props:{
            message: {
                type: String,
                requeired: true,
                //default: 'default message',
            }
        }
    }
</script>

<style scoped>
    .message{
        padding: 2em;
        text-align: center;
    }
    h3 {
        color: #ff1546;
    }
</style>