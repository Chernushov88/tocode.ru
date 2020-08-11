<template>
  <div class="wrapper">
    <div class="header">
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUECLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link
                    class="navbar-link"
                    :to="link.url"
                    :id="link.title"
                    :title="link.title"
                >{{link.title}}</router-link>
              </li>
            </ul>
            <hr>
            <ul class="navbar-list">
              <router-link
                  v-for="link in links"
                  :key="link.url"
                  class="navbar-item"
                  tag="li"
                  exact
                  :to="link.url"
                  active-class="active"
              >
                <a class="navbar-link" >{{link.title}}</a>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- <footer></footer> -->
  </div>
</template>

<script>
  export default {
    data(){
      return{
        links:[
          {title: 'Home', url: '/'},
          {title: 'Notify', url: '/notify'},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .active .navbar-link{
    color: #e006cc;
  }
  .navbar-link{
    &.router-link-exact-active{
      color: #444ce0;
    }
  }
</style>
