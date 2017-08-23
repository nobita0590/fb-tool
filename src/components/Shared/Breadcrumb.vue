<template>
  <v-breadcrumbs divider="/">
    <v-breadcrumbs-item v-for="item in breadcrumbs" :key="item.text"
       :disabled="item.disabled"
        :to="item.link">
      {{ item.text }}
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data () {
      window.rt = this.$router
      console.log(this.$router)
      return {
        breadcrumbs: [
          {
            text: 'Dashboard',
            disabled: false,
            link: '/'
          },
          {
            text: 'Link 1',
            disabled: false,
            link: '/test'
          },
          {
            text: 'Link 2',
            disabled: true,
            link: '/test/index'
          }
        ]
      }
    }
  }
</script>
<style scoped="">
  .breadcrumbs{
    justify-content: baseline;
  }
</style>
