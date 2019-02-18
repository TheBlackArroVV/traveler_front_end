<template>
  <div class="edit_post">
    <h1>Edit this post</h1>
    {{ errors.length > 0 ? errors : 'Your post was updated' }}
    <form class="edit_post_form" v-on:submit.prevent="updatePost()">
      <div class="col-sm-12">
        <input v-model="title" placeholder="title of your post" class="form-control form-control-lg"><br>
        <textarea v-model="body" placeholder="body of your post" class="form-control form-control-lg"></textarea><br>
        <button type="submit" name="button" class="btn btn-primary">Update Post</button>
      </div>
    </form>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'edit_post',
  data () {
    return {
      errors: [],
      title: '',
      body: ''
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.postPath(this.$route.params.id))
      .then(response => {
        this.title = response.data.title
        this.body = response.data.body
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    updatePost () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.postPath(this.$route.params.id), {
        post: {
          title: this.title,
          body: this.body
        }
      })
        .then(response => {
          location.reload()
        })
        .catch(e => {
          this.errors.push(e.response.data.errors.text)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea{
    height: 338px;
  }
</style>
