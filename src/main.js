// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import TheContainer from './the-container'
import firebase from './plugins/firebase'
import router from './router'

Vue.use(firebase, { router })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { TheContainer },
  template: '<the-container/>'
})
