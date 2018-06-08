<template>
  <div class="new_post">
    <h1>Write your own blog</h1>
    {{ errors.length > 0 ? errors : 'Your post was create' }}
    <form class="new_post_form" v-on:submit="postPost()">
      <input v-model="title" placeholder="отредактируй меня">
      <input v-model="body" placeholder="отредактируй меня">
      <button type="submit" name="button">postPost</button>
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
        .then(function (response) {
          console.log(response.status)
        })
        .catch(function (error) {
          this.errors.push(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
