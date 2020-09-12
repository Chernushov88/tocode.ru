<template>
  <div class='wrapper'>
    <div class='wrapper-content'>
      <section>
        <div class='container'>
          <!--    message    -->
          <!-- <message v-if='message' message='hello message'/>-->
          <message v-if='getNotes.message'/>
          <!--    new note    -->
          <newNote />

          <div class='note-header'>
            <h1>{{ getNotes.title }}</h1>

            <!-- search  -->
            <p>{{getNotes.note.search}}</p>
            <search
                :value='getNotes.search'
                placeholder='Find your note'
                @search='searchActions($event)'
            />
            <!-- icons controls-->
            <div class='icons'>
              <svg
                  :class='{active:getNotes.grid}'
                  @click='getNotes.grid = true'
                  xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'
                  stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <rect x='3' y='3' width='7' height='7'></rect>
                <rect x='14' y='3' width='7' height='7'></rect>
                <rect x='14' y='14' width='7' height='7'></rect>
                <rect x='3' y='14' width='7' height='7'></rect>
              </svg>
              <svg
                  :class='{active: !getNotes.grid}'
                  @click='getNotes.grid = false'
                  xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'
                  stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                <line x1='8' y1='6' x2='21' y2='6'></line>
                <line x1='8' y1='12' x2='21' y2='12'></line>
                <line x1='8' y1='18' x2='21' y2='18'></line>
                <line x1='3' y1='6' x2='3' y2='6'></line>
                <line x1='3' y1='12' x2='3' y2='12'></line>
                <line x1='3' y1='18' x2='3' y2='18'></line>
              </svg>
            </div>
          </div>
          <!--        note list -->
          <notes  />
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

  import { mapGetters, mapActions } from 'vuex'


  export default {
    components: {
      message, notes, newNote, search,
    },
    methods: {
      ...mapActions(['searchActions','gridActions'])
    },
    computed: {
      ...mapGetters(['getNotes']),
    }
  }
</script>

<style>
</style>
