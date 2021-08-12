<template>
  <!-- note list -->
  <transition-group
    tag = "div"
    class = "notes"
    name = "note"
    @after-enter = "afterEnter"
    mode = "in-out"
    appear
  >
    <div
      class = "note"
      :class = "{ full: !grid, [`note_${types[note.type].color}`]: true,
      'note-hover': !animation }"
      v-for = "(note, index) in notes" :key = "note.date">
      <div class = "note-header" :class = "{ full: !grid }">
        <p
          @click = "editValue($event)"
          @keyup.enter = "saveNewValue($event, index, 'title')"
          @keyup.esc = "resetNewValue($event, index, 'title')"
          @blur = "saveNewValue($event, index, 'title')"
          @keydown.enter.prevent.exact = "e => e.target.blur()"
        >{{ note.title }}</p>
        <span style = "cursor: pointer;" @click = "removeNote(index, note)">✖</span>
      </div>
      <div class = "note-body">
        <p
          class = "inputNoteEditeBody"
          @click = "editValue($event)"
          @keyup.esc = "resetNewValue($event, index, 'descr')"
          @blur = "saveNewValue($event, index, 'descr')"
          @keydown.enter.prevent.exact = "e => e.target.blur()"
        >{{ note.descr }}</p>

        </div>
        <hr>
      <span>{{ note.date }}</span>
    </div>
  </transition-group>
</template>

<script>
export default {
 props: {
  notes: {
   type: Array,
   required: true
  },
  grid: {
   type: Boolean,
   required: true
  },
  types: {
   type: Object,
   required: true,
  }
 },
 data() {
  return {
   animation: true
  }
 },
 methods: {
  afterEnter() {
   this.animation = false;
  },
  saveChangesInLocalStorage() {
   this.$emit('saveNewChangesInLocalStorage');
  },
  removeNote(index, note) {
   this.$emit('remove', index, note)
  },
  editValue(e) {
   const target = e.target;
    console.log('target',target.innerHTML)
   if (!target.hasAttribute('contenteditable')) {
    target.setAttribute('contenteditable', 'true');
    target.innerHTML = target.innerText.trim();
    const range = document.createRange();
    range.selectNodeContents(target);
    range.collapse(false);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    target.focus();
   }
   
  },
  saveNewValue(e, index, element) {
   const target = e.target;

   if (this.notes[index][element] === target.innerText.trim()) {
    target.innerHTML = target.innerText.trim();
    target.removeAttribute('contenteditable');
   } else {
    this.notes[index][element] = target.innerText;
    this.notes[index].date = new Date(Date.now()).toLocaleString();
    target.removeAttribute('contenteditable');
   }
   this.saveChangesInLocalStorage();
  },
  resetNewValue(e, index, element) {
   const target = e.target;
    console.log('target',target)
    console.log('target.hasAttribute',target.hasAttribute)
    console.log('this.notes[index][element]',this.notes[index][element])
    target.innerHTML = this.notes[index][element]
    this.notes[index].date = new Date(Date.now()).toLocaleString()
    target.removeAttribute('contenteditable')
   this.saveChangesInLocalStorage();
  },
 }
}
</script>

<style lang = 'scss'>
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
        &.note_gray {
            background-color: #fff;
        }
        &.note_yellow {
            background-color: #fffa27;
        }
        &.note_red {
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
            input {
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
            input {
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
