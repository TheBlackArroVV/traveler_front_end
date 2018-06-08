<template>
  <div class="posts">
    <h1>{{ msg }}</h1>
    <ul class="list-group">
      <div class="row col-sm-12">
        <li v-for="post in posts" :key = "post.id" class="list-group-item col-sm-4">
          <div>
            {{ post.title }}
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
    axios.get(`http://localhost:3000/v1/posts/`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
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
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
