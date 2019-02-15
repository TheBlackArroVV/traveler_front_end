<template>
  <div class="session">
    <h1>{{ msg }}</h1>
    <h3>{{ errors.length > 0 ? errors : '' }}</h3>
    <form class="new_user_form" v-on:submit.prevent="login()">
      <div class="col-sm-4 offset-sm-4">
        <input type="email" v-model="email" placeholder="your email" class="form-control form-control-lg"><br>
        <input type="password" v-model="password" placeholder="your password" class="form-control form-control-lg"><br>
        <button type="submit" name="button" class="btn btn-primary">Log In</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'session',
  data () {
    return {
      msg: 'Log In',
      email: '',
      password: '',
      errors: []
    }
  },
  beforeCreate () {
    if (this.$session.get('jwt')) {
      this.$router.push('/posts')
    }
  },
  methods: {
    login () {
      axios.post(Api.jwtPath(), {
        user: {
          email: this.email,
          password: this.password
        }
      })
        .then(response => {
          this.$session.set('jwt', response.data.jwt)
          this.$router.go('posts')
        })
        .catch(e => {
          this.errors = []
          console.log(e.response)
          this.errors.push(e.response.data)
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
