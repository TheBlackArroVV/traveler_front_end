<template>
  <div class="registration">
    <h1>{{ msg }}</h1>
    <h3>{{ errors.length > 0 ? errors : '' }}</h3>
    <h3>{{ registred ? 'You was succesfuly registred' : '' }}</h3>
    <form class="new_user_form" v-on:submit="register()">
      <div class="col-sm-4">
        <input type="email" v-model="email" placeholder="your email" class="form-control form-control-lg"><br>
        <input type="password" v-model="password" placeholder="your password" class="form-control form-control-lg"><br>
        <input type="password" v-model="password_confirmation" placeholder="password confirmation" class="form-control form-control-lg"><br>
        <button type="submit" name="button" class="btn btn-primary">Register</button>
      </div>
    </form>
    <!-- <button @click="loginOauth('facebook')">Login</button>
    <button @click="registerOauth('facebook')">Register</button> -->
    <button @click="authenticate('facebook')">auth Facebook</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'registration',
  data () {
    return {
      msg: 'Registration Page',
      email: '',
      password: '',
      password_confirmation: '',
      registred: false,
      errors: []
    }
  },
  methods: {
    register () {
      axios.post(`http://localhost:3000/api/v1/users`, {
        user: {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
      })
        .then(response => {
          this.registred = true
          this.erros = []
          location.href = '/'
        })
        .catch(e => {
          this.errors.push(e.response.data)
          this.registred = false
        })
    },
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function () {
        // Execute application logic after successful social authentication
      })
    }
    // loginOauth: function (provider) {
    //   this.$auth.login(provider).then(function () {
    //     // Execute application logic after successful login
    //   })
    // },
    //
    // registerOauth: function (provider) {
    //   this.$auth.register(provider).then(function () {
    //     // Execute application logic after successful registration
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
