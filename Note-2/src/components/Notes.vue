<template>
    <div class='notes'>
        <div
            class='note'
            v-for='(note, id) in notes' :key='id'
            :class='[{full: !grid},
                     {
                       standart: note.priority === standart,
                       important: note.priority === important,
                       veryImportant: note.priority === veryImportant,
                     }
            ]'
        >
            <div class='note-header'>
                <p v-if='note.isEditTitle === false'  @click="setEditTitle(id)">
                    {{ note.title }}
                </p>
                <div v-if='note.isEditTitle === true' class='inputNoteEditeTitle'>
                    <input
                        type='text'
                        v-model='note.filds.titleFild'
                        @keyup.esc='resetNoteTitle(id)'
                        @blur='resetNoteTitle(id)'
                        @keyup.enter='saveNoteTitle(id)'
                        @mouseover='mouseOver'
                    />
                </div>
                <span @click='removeNote(id)' class='close'>X</span>
            </div>
            <div class='note-body'>
                <p v-if='note.isEditBody === false'  @click="setEditBody(id)">{{ note.descr }}</p>
                <div v-if='note.isEditBody === true' class='inputNoteEditeBody'>
                    <input
                            type='text'
                            v-model='note.filds.descrFild'
                            @keyup.esc='resetNoteBody(id)'
                            @blur='resetNoteBody(id)'
                            @keyup.enter='saveNoteBody(id)'
                            @mouseover='mouseOver'
                    />
                </div>
                <br>{{note.date}}
                <hr>
                <span>{{note.priority}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                standart: 'standart',
                important: 'important',
                veryImportant: 'veryImportant',
                copy: ''
            }
        },
        props: {
            notes: {
                type: Array,
                requeired: true
            },
            grid: {
                type: Boolean,
                requeired: true
            },
        },
        methods: {
            removeNote(id) {
                console.log(`Note id - ${id} remove`)
                this.$emit('remove', id)
            },
            setEditTitle(id) {
                this.$emit('setNoteTitle', id)
            },
            resetNoteTitle(id) {
                this.$emit('resetNoteTitle', id)
            },
            saveNoteTitle(id) {
                this.$emit('saveNoteTitle', id)
            },
            setEditBody(id) {
                this.$emit('setNoteBody', id)
            },
            resetNoteBody(id) {
                this.$emit('resetNoteBody', id)
            },
            saveNoteBody(id) {
                this.$emit('saveNoteBody', id)
            },
            mouseOver: function(){
                event.target.focus()
            },
        }
    }
</script>
<style lang='scss'>
    .notes {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 40px 0;
    }

    .note {
        width: 48%;
        padding: 18px 20px;
        margin-bottom: 20px;
        background-color: #ffffff;
        transition: all .25s cubic-bezier(.02, .01, .47, 1);
        box-shadow: 0 30px 30px rgba(0, 0, 0, .02);

        &.standart {
            background-color: #fff;
        }

        &.important {
            background-color: #fffa27;
        }

        &.veryImportant {
            background-color: #ff131c;
        }

        &.full {
            width: 100%;
        }

        &:hover {
            box-shadow: 0 30px 30px rgba(0, 0, 0, .04);
            transform: translate(0, -6px);
            transition-delay: 0s !important;
        }

        &.full {
            width: 100%;
            text-align: center;
        }
    }

    .note-header {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .inputNoteEditeTitle {
            font-size: 22px;
            input{
                position: absolute;
                left: 0;
                top: 0;
                margin: 0;
                padding: 0px 0 0 0;
                width: auto;
                border: 0;
                color: #402caf;
            }
        }

        h1 {
            font-size: 32px;
        }

        p {
            font-size: 22px;
            color: #402caf;
        }

        svg {
            margin-right: 12px;
            color: #999999;
            cursor: pointer;

            &.active {
                color: #402caf;
            }

            &:last-child {
                margin-right: 0;
            }
        }

        &.full {
            justify-content: center;

            p {
                margin-right: 16px;

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .note-body {
        position: relative;
        .inputNoteEditeBody {
            position: relative;
            min-height: 25px;
            margin: 20px 0;
            font-size: 20px;
            input{
                position: absolute;
                left: 0;
                top: 0;

                padding: 0px 0 0 0;
                width: auto;
                border: 0;
                color: #000;
            }
        }
        p {
            min-height: 25px;
            margin: 20px 0;
        }

        span {
            font-size: 14px;
            color: #999999;
        }
    }

    .close {
        float: right;
        cursor: pointer;
    }
</style>