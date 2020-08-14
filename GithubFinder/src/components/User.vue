<template>
  <table class="table">
    <thead>
    <tr>
      <th>login</th>
      <th>avatar</th>
      <th>name</th>
      <th>company</th>
      <th>count-repos</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>{{userInfo.login}}</td>
      <td>

        <a :href="userInfo.html_url" class="avatar" target="_blank">
        <img :src="userInfo.avatar_url" alt=""></a>
      </td>
      <td><a :href="userInfo.html_url" class="name">{{userInfo.name}}</a></td>
      <td>{{userInfo.company}}</td>
      <td>
        <div class="count-repos">{{userInfo.public_repos}}</div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    props: {
      userInfo: {
        type: Object,
        requeired: true
      }
    }
  }
</script>

<style lang="scss">
  .table {
    font-size: 12px;
    td, th {padding: 5px 10px;
      text-align: center;
      img {
        max-width: 150px;
      }
    }
  }
</style>