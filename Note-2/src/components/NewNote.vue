<template>
    <div class='new-note'>

        <div class='flex'>
            <div class='block-title'>
                <label for='input-title'>Title</label>
                <input type='text' v-model='note.title' id='input-title'>
            </div>
            <div class='block-status'>
                <label>Status</label>
                <ul>
                    <li v-for='(item, id) in prioritys' :key='id'>
                        <label>
                            <input
                                type='radio'
                                name='radio'
                                :checked='item.checked'
                                :id='item.name'
                                :value='item.name'
                                v-model='note.priority'

                            />
                            {{item.name}}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <label>Descriptiom</label>
        <div><textarea v-model='note.descr'></textarea></div>
        <button
                @click='addNote'
                class='btn btnPrimary'> New Note
        </button>
    </div>
</template>

<script>

    export default {
        props: {
            note: {
                type: Object,
                requeired: true,
            },
            prioritys: {
                type: Array,
                requeired: true,
            }
        },
        methods: {
            addNote() {
                console.log(this.note)
                this.$emit('addNote', this.note)
            },
        }
    }

</script>

<style lang='scss'>
    label{
        font-weight: bold;
    }
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .new-note {
        text-align: center;
        .block-title{
            width: 48%;
            min-width: 360px;
        }
        .block-status{
            width: 48%;
            min-width: 360px;
            margin-bottom: 30px;

            label{
                text-align: left;
            }
            ul{
                li{
                    display: flex;
                    align-items: center;
                    input{
                        width: auto;
                        margin: 0 5px 0;
                        padding: 0;
                    }
                    label{
                        margin: 0;
                        font-weight: normal;
                    }
                }
            }
        }
    }

    .btn {
        margin: 20px 0;
    }
</style>