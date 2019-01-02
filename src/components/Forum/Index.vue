<template>
  <div class="topics">
    <h1>{{ msg }}</h1>
    <ul class="list-group">
      <div class="row col-sm-12">
        <li v-for="topic in topics" :key = "topic.id" class="list-group-item col-sm-4">
          <div>
            <a :href="'/#/topics/' + topic.id">{{ topic.title }}</a><br>
            {{ topic.description }}
          </div>
        </li>
      </div>
      <a href="/#/topics/new">Create a New Topic</a>
    </ul>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'topics',
  data () {
    return {
      msg: 'Topics',
      topics: '',
      errors: []
    }
  },

  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(`http://localhost:3000/api/v1/topics`)
      .then(response => {
        this.topics = response.data
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
