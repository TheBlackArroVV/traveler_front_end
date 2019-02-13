<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <ul class="list-group">
      <div class="row col-sm-12">
        <li v-for="post in posts" :key = "post.id" class="list-group-item col-sm-4">
          <div>
            <a :href="'/#/posts/' + post.id">{{ post.title }}</a><br>
            {{ post.body }}
          </div>
        </li>
      </div>
      <a href="/#/posts/new">Create a New Post</a>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'posts',
  data () {
    return {
      msg: 'Blog posts',
      posts: [],
      errors: []
    }
  },

  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.postsPath())
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
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
