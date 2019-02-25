<template>
  <div class="new_post">
    <h1>Write your own blog</h1>
    <li v-for="error in errors[0]" :key="error[0]">
      <h5>{{ error[0] }} {{ error[1][0] }}</h5><br/>
    </li>
    <form class="new_post_form" v-on:submit.prevent="postPost()">
      <div class="col-sm-12">
        <input v-model="title" placeholder="title of your post" class="form-control form-control-lg"><br>
        <textarea v-model="body" placeholder="body of your post" class="form-control form-control-lg"></textarea><br>
        <button type="submit" name="button" class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'new_post',
  data () {
    return {
      errors: [],
      title: '',
      body: ''
    }
  },
  methods: {
    postPost () {
      this.errors = []
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.post(Api.postsPath(), {
        title: this.title,
        body: this.body
      })
        .then(_ => {
          location.href = '/#/posts'
        })
        .catch(e => {
          this.errors.push(Object.entries(e.response.data))
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea{
    height: 338px;
  }
</style>
