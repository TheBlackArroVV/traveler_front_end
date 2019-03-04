<template>
    <div class="posts">
        <h1>Posts</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="post in posts" :key="post.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ post.title }}<br/>
                    {{ post.body }}<br/>
                    <button type="submit" name="button" @click="deletePost(post.id)">Delete</button>
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
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get(Api.postsPath())
        .then(response => {
          this.posts = response.data
        })
    },
    deletePost (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.postPath(id))
        .then(() => {
          this.getPosts()
        })
    }
  }
}
</script>

<style scoped>
</style>
