<template>
    <div class="message">
        <h3>Message component - {{ getNotes.message }}</h3>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    export default {
        computed: {
            ...mapGetters([
                "getNotes"
            ]),
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