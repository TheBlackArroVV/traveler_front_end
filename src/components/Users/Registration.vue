<template>
  <div class="registration">
    <h1>{{ msg }}</h1>
    <li v-for="error in errors[0]" :key="error">
      <h5>{{ error[0] }} {{ error[1][0] }}</h5>
    </li>
    <h3>{{ registred ? 'You was succesfuly registred' : '' }}</h3>
    <form class="new_user_form" v-on:submit.prevent="register()">
      <div class="col-sm-4 offset-sm-4">
        <input type="email" v-model="email" placeholder="your email" class="form-control form-control-lg"><br>
        <input type="password" v-model="password" placeholder="your password" class="form-control form-control-lg"><br>
        <input type="password" v-model="password_confirmation" placeholder="password confirmation" class="form-control form-control-lg"><br>
        <button type="submit" name="button" class="btn btn-primary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

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
      axios.post(Api.registrationsPath(), {
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
          this.errors = []
          this.errors.push(Object.entries(e.response.data.errors))
          this.registred = false
        })
    }
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
