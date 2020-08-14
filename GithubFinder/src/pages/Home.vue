<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <search
            :value="search"
            placeholder="Find user github.com"
            @search="search = $event"
        />

        <button v-if="!repos" class="btn btnPrimary" @click="getRepos">Search !</button>
        <button v-else class="btn btnPrimary" @click="getRepos">Search again !</button>
        <div v-if="userInfo" class="user-info">
          <user :userInfo="userInfo"/>
        </div>

        <div class="repos repos_wrapper" v-if="repos">

          <table class="table">
            <thead>
            <tr>
              <sortBy
                  text="Name"
                  field="name"
                  :currentSort="currentSort.field"
                  :currentSortDir="currentSort.dir"
                  @sort="sort"
              />

              <sortBy
                  text="Clone_url"
                  field="clone_url"
                  :currentSort="currentSort.field"
                  :currentSortDir="currentSort.dir"
                  @sort="sort"/>
              <sortBy
                  text="created_at"
                  field="created_at"
                  :currentSort="currentSort.field"
                  :currentSortDir="currentSort.dir"
                  @sort="sort"/>
              <sortBy
                  text="Stars"
                  field="stargazers_count"
                  :currentSort="currentSort.field"
                  :currentSortDir="currentSort.dir"
                  @sort="sort"/>
            </tr>
            </thead>
            <tbody v-for="repo in reposSort" :keu="repo.id">
              <tr>
                <td>
                  <a :href="repo.html_url" target="_blank" class="link">{{repo.name}}</a>
                </td>
                <td>
                  <span> {{repo.clone_url}} </span>
                </td>
                <td>
                  <span> {{repo.created_at}} </span>
                </td>
                <td>
                  <span> {{repo.stargazers_count}} ⭐</span>
                </td>
              </tr>
            </tbody>
          </table>


        </div>
        <div class="error" v-if="error">
          <br><br>
          <p>{{error}}</p>
        </div>
        <pagination
            v-if="repos"
            :current="pageCurrent"
            :total="repos.length"
            :itemPerPage="itemPerPage" @setPage="setPage"/>
      </div>
    </section>
  </div>
</template>

<script>
  import search from '@/components/Search.vue'
  import user from '@/components/User.vue'
  import sortBy from '@/components/UI/SortBy.vue'
  import pagination from '@/components/UI/Pagination.vue'


  export default {
    components: {search, user, sortBy, pagination},
    data() {
      return {
        search: ''
      }
    },
    methods: {
      getRepos() {
        if (this.search) {
          this.$store.dispatch('getReposActions', this.search)
        } else {
          this.$store.commit('setError', 'Cant`t empty  user');
        }
      },
      sort(e) {
        this.$store.commit('sortReposMutations', e)
      },
      setPage(page) {
        this.$store.commit('setPageMutations', page);
      }
    },
    computed: {
      error() {
        return this.$store.getters.getError
      },
      userInfo() {
        return this.$store.getters.getUser
      },
      repos() {
        return this.$store.getters.getRepos
      },
      reposSort() {
        return this.$store.getters.getReposSorted
      },
      pageCurrent() {
        return this.$store.getters.getPage
      },
      itemPerPage() {
        return this.$store.getters.getItemPerPage
      },
      currentSort() {
        return this.$store.getters.getSort
      }
    }
  }
</script>
<style lang="scss" scoped>
  .user-info {
    padding: 30px 0;


  }


  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .btn {
    margin-top: 20px;
  }

  .repos__wrapper {
    width: 400px;
    margin: 30px 0;
  }

  .repos-info {
    display: flex;
    min-width: 300px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #dbdbdb;
  }
</style>
