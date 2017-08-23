
<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <h5>Essential Links</h5>
    <h2>User {{ $route.params.id }}</h2>
    <ul>
      <router-link to="/test/abc">Abc</router-link>
      <router-link to="/test/list">List</router-link>
    </ul>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
