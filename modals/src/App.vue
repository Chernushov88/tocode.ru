<template>
  <div class="wrapper">
    <div class="header">
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">MODALS</div>
<!--            <ul class="navbar-list">-->
<!--              <li class="navbar-item" v-for="link in links" :key="link.title">-->
<!--                <router-link-->
<!--                    class="navbar-link"-->
<!--                    :to="link.url"-->
<!--                    :id="link.title"-->
<!--                    :title="link.title"-->
<!--                >{{link.title}}</router-link>-->
<!--              </li>-->
<!--            </ul>-->
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

  </div>
</template>


<script>
  import modals from '@/components/UI/Modal'




  export default {
    components: {modals},
    data() {
      return {
        links: [
          {title: 'Home', url: '/'},
          {title: 'formValidete', url: '/validete'},
          {title: 'formHWValidete', url: '/validete-hw'},
          {title: 'registrationLogin', url: '/registration-login'},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .btn {
    margin: 0.3em;
    &:hover {
      opacity: 0.7;
    }
  }


  .menu {
    justify-content: center;

    a {
      padding: 10px;
      cursor: pointer;

      &:hover {
        color: #494ce8;
      }
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

