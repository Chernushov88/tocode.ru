<template>
  <div class='wrapper'>
    <div class='wrapper-content'>
      <section>
        <div class='container'>
          <!--    message    -->
          <!-- <message v-if='message' message='hello message'/>-->
          <message v-if='message' :message='message'/>
          <!--    new note    -->
          <newNote
                  :note='note'
                  @addNote='addNote'
                  :prioritys='prioritys'
          />

          <div class='note-header'>
            <h1>{{ title }}</h1>

            <!-- search  -->
            <p>{{search}}</p>
            <search
                    :value='search'
                    placeholder='Find your note'
                    @search='search = $event'
            />
            <!-- icons controls-->
            <div class='icons'>
              <svg
                      :class='{active:grid}'
                      @click='grid = true'
                      xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' ><rect x='3' y='3' width='7' height='7'></rect><rect x='14' y='3' width='7' height='7'></rect><rect x='14' y='14' width='7' height='7'></rect><rect x='3' y='14' width='7' height='7'></rect></svg>
              <svg
                      :class='{active: !grid}'
                      @click='grid = false'
                      xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='8' y1='6' x2='21' y2='6'></line><line x1='8' y1='12' x2='21' y2='12'></line><line x1='8' y1='18' x2='21' y2='18'></line><line x1='3' y1='6' x2='3' y2='6'></line><line x1='3' y1='12' x2='3' y2='12'></line><line x1='3' y1='18' x2='3' y2='18'></line></svg>
            </div>
          </div>
          <!--        note list -->
           <notes
             :notes='notesFilter'
             @remove='removeNote'
             @setNoteTitle='setEditNoteTitle'
             @saveNoteTitle='saveNoteTitle'
             @resetNoteTitle='resetNoteTitle'
             @setNoteBody='setEditNoteBody'
             @saveNoteBody='saveNoteBody'
             @resetNoteBody='resetNoteBody'
             :grid='grid'
           />
        </div>
      </section>
    </div>
  </div>
</template>


<script>
  import message from '@/components/Message'
  import newNote from '@/components/NewNote'
  import notes from '@/components/Notes'
  import search from '@/components/Search'
  export default {
  components: {
    message, notes, newNote, search,
  },
  data(){
    return {
      title: 'Note App',
      search: '',
      message: null,
      grid: true,
      prioritys: [
        {
          name: 'standart',
          checked: 'checked',
        },
        {
          name: 'important',
          checked: false,
        },
        {
          name: 'veryImportant',
          checked: false,
        }
      ],
      note: {
        title: '',
        priority: '',
        descr: '',
        isEditTitle: false,
        isEditBody: false,
        filds: {
          titleFild: '',
          descrFild: '',
        },
      },
      notes: [
        {
          title: 'First Note',
          descr: 'descr for First Note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'standart',
          isEditTitle: false,
          isEditBody: false,
          filds: {
            titleFild: '',
            descrFild: '',
          },
        },
        {
          title: 'Second Note',
          descr: 'descr for second Note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'standart',
          isEditTitle: false,
          isEditBody: false,
          filds: {
            titleFild: '',
            descrFild: '',
          },
        },
        {
          title: 'Third Note',
          descr: 'descr for third Note',
          date: new Date(Date.now()).toLocaleString(),
          priority: 'standart',
          isEditTitle: false,
          isEditBody: false,
          filds: {
            titleFild: '',
            descrFild: '',
          },
        }
      ]
    }
  },
  methods: {
    addNote(){
      let {title, descr, priority, isEditTitle, isEditBody, filds} = this.note
      if (title === ''){
        this.message = 'title can`t be blank!'
        return false
      }
      if (priority === ''){
        this.message = 'Select the radio button Status'
        return false
      }
      console.log(priority)

      this.notes.push({
        title,
        descr,
        date: new Date(Date.now()).toLocaleString(),
        priority,
        isEditTitle,
        isEditBody,
        filds
      })

      this.message = null
      this.note.title = ''
      this.note.descr = ''
      this.note.priority = 'standart'
      this.node.isEditTitle = false
      this.node.isEditBody = false
      this.node.filds = {
        titleFild: '',
        descrFild: '',
      }
    },
    removeNote(index){
      this.notes.splice(index, 1)
    },
    setEditNoteTitle(id){
      this.notes[id].isEditTitle = true
    },
    saveNoteTitle(id){
      this.notes[id].date = new Date(Date.now()).toLocaleString()
      this.notes[id].title = this.notes[id].filds.titleFild
      this.notes[id].isEditTitle = false
    },
    resetNoteTitle(id){
      this.notes[id].date = new Date(Date.now()).toLocaleString()
      this.notes[id].isEditTitle = false
    },
    setEditNoteBody(id){
      this.notes[id].isEditBody = true
    },
    saveNoteBody(id){
      this.notes[id].date = new Date(Date.now()).toLocaleString()
      this.notes[id].descr = this.notes[id].filds.descrFild
      this.notes[id].isEditBody = false
    },
    resetNoteBody(id){
      this.notes[id].date = new Date(Date.now()).toLocaleString()
      this.notes[id].isEditBody = false
    }
  },
  computed: {
    notesFilter(){
      let array = this.notes,
          search = this.search
      if(!search) return array
      // Small
      search = search.trim().toLowerCase()
      // Filter
      array = array.filter(function(item){
        if (item.title.toLowerCase().indexOf(search) !== -1){
          return item
        }
      })
      //Error
      return array
    }
  }
}
</script>

<style>
</style>
