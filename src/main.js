// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App'
import router from './router'
import VueSessionStorage from 'vue-sessionstorage'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueSessionStorage)
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  if (Vue.prototype.$session.exists('jwt')) {
    next()
  } else {
    if (to.name === 'Session' || to.name === 'Registration') {
      next()
    } else {
      next('/')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
