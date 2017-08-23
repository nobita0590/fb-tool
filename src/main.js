// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/* import App from './App' */
import App from './Appication.vue'
import router from './router'
import Vuetify from 'vuetify'
import VueBreadcrumbs from 'vue-2-breadcrumbs'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueBreadcrumbs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
