import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueAuthenticate from 'vue-authenticate'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import App from './App'
import router from './router'
import VueSessionStorage from 'vue-sessionstorage'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(VueSessionStorage)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueAuthenticate, {
  baseUrl: 'http://127.0.0.1:3000/api/v1/users/', // Your API domain

  providers: {
    facebook: {
      name: 'facebook',
      url: 'http://127.0.0.1:3000/api/v1/users/auth/facebook/',
      clientId: '532636410508737',
      redirectUri: 'http://127.0.0.1:8080/#/', // Your client app,
      authorizationEndpoint: 'http://www.facebook.com/v3.0/dialog/oauth',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      oauthType: '2.0',
      popupOptions: { width: 580, height: 400 }
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
