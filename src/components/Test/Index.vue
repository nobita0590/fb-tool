<template>
  <div class="hello">
    <p>{{ msg }}</p>
    <p>Index</p>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      console.log('index')
      return {
        msg: 'Welcome to Index page'
      }
    }
  }
</script>
