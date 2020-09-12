<template>
    <div class='new-note'>

        <div class='flex'>
            <div class='block-title'>
                <label for='input-title'>Title</label>
                <input type='text' v-model='getNotes.note.title' id='input-title'>
            </div>
            <div class='block-status'>
                <label>Status</label>
                <ul>
                    <li v-for='(item, id) in getNotes.prioritys' :key='id'>
                        <label>
                            <input
                                type='radio'
                                name='radio'
                                :checked='item.checked'
                                :id='item.name'
                                :value='item.name'
                                v-model='getNotes.note.priority'
                            />
                            {{item.name}}
                        </label>
                    </li>
                </ul>
            </div>
        </div>
        <label>Descriptiom</label>
        <div><textarea v-model='getNotes.note.descr'></textarea></div>
        <button
                @click='addNote'
                class='btn btnPrimary'> New Note
        </button>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'removeNoteActions',
            ]),
            addNote() {
                let {title, descr, id, priority, isEditTitle, isEditBody, filds} = this.getNotes.note
                if (title === '') {
                    this.getNotes.message = 'title can`t be blank!'
                    return false
                }
                if (priority === '') {
                    this.getNotes.message = 'Select the radio button Status'
                    return false
                }
                console.log(this.getNotes.note)

                this.getNotes.notes.push({
                    title,
                    descr,
                    id: Date.now(),
                    date: new Date(Date.now()).toLocaleString(),
                    priority,
                    isEditTitle,
                    isEditBody,
                    filds
                })

                this.getNotes.message = null
                this.getNotes.note.title = ''
                this.getNotes.note.descr = ''
                this.getNotes.note.id = Date.now()
                this.getNotes.note.priority = 'standart'
                this.getNotes.node.isEditTitle = false
                this.getNotes.node.isEditBody = false
                this.getNotes.node.filds = {
                    titleFild: '',
                    descrFild: '',
                }
            },
        },
        computed: {
            ...mapGetters(['getNotes']),
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