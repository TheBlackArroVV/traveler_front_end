<template>
    <div class="messages">
        <h1>Posts</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="message in messages" :key="message.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ message.text }}<br/>
                    <button type="submit" name="button" @click="deleteMessage(message.id)">Delete</button>
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
  name: 'messages',
  data () {
    return {
      messages: []
    }
  },
  created () {
    this.getMessages()
  },
  methods: {
    getMessages () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get(Api.messagesPath())
        .then(response => {
          this.messages = response.data
        })
    },
    deleteMessage (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.messagePath(id))
        .then(() => {
          this.getMessages()
        })
    }
  }
}
</script>

<style scoped>
</style>
