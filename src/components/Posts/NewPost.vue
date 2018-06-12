<template>
  <div class="new_post">
    <h1>Write your own blog</h1>
    {{ errors.length > 0 ? errors : 'Your post was create' }}
    <form class="new_post_form" v-on:submit="postPost()">
      <div class="col-sm-12">
        <input v-model="title" placeholder="title of your post" class="form-control form-control-lg"><br>
        <textarea v-model="body" placeholder="body of your post" class="form-control form-control-lg"></textarea><br>
        <button type="submit" name="button" class="btn btn-primary">Register</button>
      </div>
    </form>
    <!-- <button v-on:click="postPost()">postPost</button> -->
  </div>
</template>

<script>
import axios from 'axios'

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
      axios.post(`http://localhost:3000/v1/posts/`, {
        title: this.title,
        body: this.body
      })
        .then(response => {
          console.log(response.status)
        })
        .catch(e => {
          this.errors.push(e)
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
