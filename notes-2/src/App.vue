<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
          <transition name="fade">
            <message v-if="message" :message="message"/>
          </transition>

          <newNote
            :note="note"
            @addNote="addNote"
            :types='types'/>
          

          <div class="note-header" style="margin: 36px 0;">
            <h1> {{ title }} </h1>
            <search :value="search" placeholder="Find your note" @search="search = $event"/>
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- note list -->
          <notes
            :notes="notesFilter"
            :grid="grid"
            :types="types"
            @saveNewChangesInLocalStorage="saveNotesInLocalStorage"
            @remove="removeNote"
            @resetNoteDescr="resetNoteDescr"
            />

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
import search from '@/components/Search.vue'


export default {
  components: {
    message, notes, newNote, search
  },
  data () {
    return {
      title: 'Notes App',
      search: '',
      message: null,
      grid: true,
      prevGrid: null,
      types: {
        normal: {
          type: 'normal',
          color: 'gray',
        },
        high: {
          type: 'high',
          color: 'yellow',
        },
        veryHigh: {
          type: 'very high',
          color: 'red',
        },
      },
      note: {
        title: '',
        descr: '',
        type: 'normal',
        color: 'gray',
      },
      notes: []
    }
  },
  
  mounted() {
    if (localStorage.getItem('notes')) {
      try {
        this.notes = JSON.parse(localStorage.getItem('notes'));
      } catch (e) {
        localStorage.removeItem('notes');
      };
    };
    if (localStorage.getItem('grid')) {
      this.grid = localStorage.grid === 'true' ? true : false;
      this.prevGrid = this.grid;
    };
  },
  computed: {
    notesFilter () {
      let array = this.notes,
        search = this.search
      if (!search) return array

      search = search.trim().toLowerCase()
     
      array = array.filter(function (item) {
        if (item.title.toLowerCase().indexOf(search) !== -1) {
          return item
        }
      })
      // Error
      return array
    }
  },
  methods: {
    addNote () {
      let {title, descr, type, color } = this.note
      
      if (title === '') {
        this.message = 'title can`t be blank!'
        setTimeout(()=>{
          this.message = ''
        }, 5000)
        return false
      }
      
      this.notes.push({
        title,
        descr,
        type,
        color,
        date: new Date(Date.now()).toLocaleString(),
        id: this.notes.length + 1,
      })
      this.message = null
      this.note.title = ''
      this.note.descr = ''
      this.note.type = 'normal'
      this.saveNotesInLocalStorage()
    },
    removeNote (index, note) {
      if (this.search.trim() === ''){
        this.notes.splice(index, 1)
      }else{
        this.notes.splice(note.id - 1, 1)
      }
      this.saveNotesInLocalStorage()
    },
    saveNotesInLocalStorage() {
      const parsed = JSON.stringify(this.notes);
      localStorage.setItem('notes', parsed);
    },
    resetNoteDescr (index){
      this.notes[index].date = new Date(Date.now()).toLocaleString()
      this.notes[index].descr = this.notes[index].descr
      this.notes[index].isEditDescr = false
    }
  },
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
