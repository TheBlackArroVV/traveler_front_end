<template>
  <div class="sight">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        {{ sight.name }}
      </li>
      <li>
        {{ sight.description }}
      </li>
      <a :href="'/#/sights/' + sight.id + '/edit'">Edit this Sight</a><br>
      <a href="/#/sights" @click="deleteSight()">Delete this Sight</a><br/>
      <button type="button" @click="likeSight()">Like</button>
      <button type="button" @click="dislikeSight()">Dislike</button>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'Sight',
  data () {
    return {
      msg: 'Sights',
      sight: '',
      errors: []
    }
  },

  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.sightPath(this.$route.params.id))
      .then(response => {
        this.sight = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    deleteSight () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.sightPath(this.$route.params.id))
        .catch(e => {
          this.errors.push(e)
        })
    },
    likeSight () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.sightLikePath(this.$route.params.id))
    },
    dislikeSight () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.sightDislikePath(this.$route.params.id))
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
