<template>
  <div class="post">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        {{ post.title }}
      </li>
      <li>
        {{ post.body }}
      </li>
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
      post: '',
      errors: []
    }
  },

  created () {
    axios.get(`http://localhost:3000/v1/posts/` + this.$route.params.id)
      .then(response => {
        this.post = response.data
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
