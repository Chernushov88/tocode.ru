<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <table>
            <thead>
            <tr>
              <th>thumbnail</th>
              <th @click="sortAction('email')"
                :class="currentUserSort === 'email' ? 'arrow' : ''">
                <span :class="currentUserSortDir === 'asc' ? 'arrow_down' : 'arrow_up'"></span>
                Email </th>
              <th @click="sortAction('phone')"
                :class="currentUserSort === 'phone' ? 'arrow' : ''">
                <span :class="currentUserSortDir === 'asc' ? 'arrow_down' : 'arrow_up'"></span>
                Phone </th>
              <th @click="sortAction('gender')"
                :class="currentUserSort === 'gender' ? 'arrow' : ''">
                <span :class="currentUserSortDir === 'asc' ? 'arrow_down' : 'arrow_up'"></span>
                Gender </th>
            </tr>
            </thead>

          <tbody>
          <tr v-for="user in usersSort" :key="user.id.value">
            <td><img :src="user.picture.medium" alt=""></td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.gender }}</td>
          </tr>
          </tbody>
        </table>

        <div style="text-align:center;">
          <p><span> debug: sort: <b> {{ currentUserSort }}</b>, dir: <b>{{ currentUserSortDir }}</b> </span></p>

          <p><span> page: <b> {{ currentUser }}</b>, pages: <b> {{ pagesLangth }}</b> </span></p>
        </div>

      </div>
    </section>
    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPageMutations"> &#8592;</div>
          <div class="btn btnPrimary" @click="nextPageMutations"> &#8594;</div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>

  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    created() {
      this.$store.getters.loadUsers
    },
    computed: {
      ...mapGetters([
        'usersSort',
        'currentUser',
        'currentUserSort',
        'currentUserSortDir',
        'pagesLangth',
      ]),
    },
    methods: {
      ...mapActions(['sortAction']),
      ...mapMutations(['prevPageMutations', 'nextPageMutations'])
    }
  }
</script>

<style lang="scss" scoped>

    .arrow {
      .arrow_up::before {
        content: '\2191';
      }

      .arrow_down::before {
        content: '\2193';
      }
    }


  .button-list {
    width: 100%;
    text-align: center;

    .btn {
      border-radius: 60px;
      margin: 0 20px;
    }
  }

  img {
    display: block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  td {
    background: #f0effa;
    vertical-align: middle;
  }
</style>

