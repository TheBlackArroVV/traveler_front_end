<template>
  <div class="topic">
    <h1>{{ topic.title }}</h1>
    <h4>{{ topic.description }}</h4>
    <a href="/#/forum" @click="deleteTopic()">Delete this topic</a>
    <ul class="list-group">
        <li v-for="message in messages" :key = "message.id" class="list-group-item col-sm-4"><br/>
          <div>
            {{ message.user_name }}<br/>
            {{ message.text }}
          </div>
        </li>
    </ul>
    <form class="new_message_form" v-on:submit.prevent="createMessage()">
      <input type="text" v-model="text">
      <button type="submit" name="button">Create message</button>
    </form>
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
      errors: [],
      messages: [],
      text: ''
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
    this.getMessages()
  },

  methods: {
    getMessages () {
      axios.get(`http://localhost:3000/api/v1/topics/` + this.$route.params.id + `/messages`)
        .then(response => {
          this.messages = response.data
        })
    },
    deleteTopic () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(`http://localhost:3000/api/v1/topics/` + this.$route.params.id)
    },
    createMessage () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.post(`http://localhost:3000/api/v1/topics/` + this.$route.params.id + `/messages`, {
        message: {
          text: this.text
        }
      })
        .then(() => {
          this.getMessages()
        })
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
