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
      <a :href="'/#/posts/' + post.id + '/edit'">Edit this Post</a><br>
      <a href="/#/posts" @click="deletePost()">Delete this post</a>

      <ul class="list-group">
          <li v-for="comment in comments" :key = "comment.id" class="list-group-item col-sm-4"><br/>
            <div>
              {{ comment.user_name }}<br/>
              {{ comment.body }}
              <button type="submit" name="button" @click="deleteComment(comment.id)">Delete comment</button>
            </div>
          </li>
      </ul>
      <form class="new_message_form" v-on:submit.prevent="createComment()">
        <input type="text" v-model="text">
        <button type="submit" name="button">Create message</button>
       </form>
      <router-view></router-view>
      <!-- <router-link @click.native="deletePost()" :to="{ name: 'Posts' }">Delete this post</router-link> -->
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'post',
  data () {
    return {
      msg: 'Blog posts',
      post: '',
      errors: [],
      text: '',
      comments: []
    }
  },

  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(`http://localhost:3000/api/v1/posts/` + this.$route.params.id)
      .then(response => {
        this.post = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    this.getComments()
  },

  methods: {
    deletePost () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(`http://localhost:3000/api/v1/posts/` + this.$route.params.id)
        .then(response => {
          console.log(response)
          console.log(`http://localhost:3000/api/v1/posts/` + this.$route.params.id)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    createComment () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.post(`http://localhost:3000/api/v1/comments/`, {
        post_id: this.$route.params.id,
        comment: {
          body: this.text
        }
      })
        .then(() => {
          this.getComments()
        })
    },
    getComments () {
      axios.get(`http://localhost:3000/api/v1/comments?post_id=` + this.$route.params.id)
        .then(response => {
          this.comments = response.data
        })
    },
    deleteComment (id) {
      axios.delete(`http://localhost:3000/api/v1/comments/` + id)
        .then(() => {
          this.getComments()
        })
    }
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
