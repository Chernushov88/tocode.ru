<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <table>
          <thead>
          <tr>
            <th>thumbnail</th>
            <th @click="sort('email')">Email &#8593;	</th>
            <th @click="sort('phone')">Phone &#8595;	</th>
            <th @click="sort('gender')">Gender</th>
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
        <p style="text-align:center;">
          <span> debug: sort: {{ currentSort }}, dir: {{ currentSortDir }} </span>
          <span> page: {{ this.page.current }}, length: {{ this.page.length }} </span>
        </p>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="button-list">
          <div class="btn btnPrimary" @click="prevPage"> &#8592; </div>
          <div class="btn btnPrimary" @click="nextPage"> &#8594; </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        users: [],
        currentSort: 'email',
        currentSortDir: 'asc',
        page: {
          current: 1,
          length: 4
        }
      }
    },
    created() {
      axios
        .get('https://randomuser.me/api/?results=14')
        .then(response => {
          //console.log(response.data.results)
          this.users = response.data.results
        })
        .catch(error => {
          console.log(error)
        })
    },
    computed: {
      usersSort() {
        return this.users.sort((a, b) => {
          let mod = 1
          if (this.currentSortDir === 'desc') mod = -1
          if (a[this.currentSort] < b[this.currentSort]) return -1 * mod
          if (a[this.currentSort] > b[this.currentSort]) return 1 * mod
          return 0
        }).filter((row, index) => {
          let start = (this.page.current-1)*this.page.length
          let end = this.page.current * this.page.length
          if (index >= start && index < end) return true
        })
      }
    },
    methods: {
      sort(e) {
        //console.log('e - ', e)
        if (e === this.currentSort) {
          this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
        }
        this.currentSort = e
      },
      // Pagination
      prevPage () {
        if (this.page.current > 1) this.page.current -=1
      },
      nextPage () {
        if ((this.page.current * this.page.length) < this.users.length) this.page.current +=1
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button-list{
    width: 100%;
    text-align: center;
    .btn{
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
    vertical-align: middle;
  }
</style>

