<template>
    <div class="topics">
        <h1>Topics</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="topic in topics" :key="topic.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ topic.title }}<br/>
                    {{ topic.description }}<br/>
                    <button type="submit" name="button" @click="deleteTopic(topic.id)">Delete</button>
                </div>
            </li>
          </div>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
import Api from '../../../backend/AdminApi.js'

export default {
  name: 'topics',
  data () {
    return {
      topics: []
    }
  },
  created () {
    this.getTopics()
  },
  methods: {
    getTopics () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get(Api.topicsPath())
        .then(response => {
          this.topics = response.data
        })
    },
    deleteTopic (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.topicPath(id))
        .then(() => {
          this.getTopics()
        })
    }
  }
}
</script>

<style scoped>
</style>
