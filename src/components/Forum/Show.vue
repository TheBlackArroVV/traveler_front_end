<template>
  <div class="topic">
    <h1>{{ topic.title }}</h1>
    <h4>{{ topic.description }}</h4>
      <!-- <a :href="'/#/posts/' + post.id + '/edit'">Edit this Post</a><br> -->
      <a href="/#/forum" @click="deleteTopic()">Delete this topic</a>
      <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'topic',
  data () {
    return {
      topic: '',
      errors: []
    }
  },

  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(`http://localhost:3000/api/v1/topics/` + this.$route.params.id)
      .then(response => {
        this.topic = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    deleteTopic () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(`http://localhost:3000/api/v1/topics/` + this.$route.params.id)
    }
  }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  a {
    color: #42b983;
  }
</style>
