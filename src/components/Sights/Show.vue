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
    axios.get(`http://localhost:3000/api/v1/sights/` + this.$route.params.id)
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
      axios.delete(`http://localhost:3000/api/v1/sights/` + this.$route.params.id)
        .then(response => {
          console.log(response)
          console.log(`http://localhost:3000/api/v1/sights/` + this.$route.params.id)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    likeSight () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(`http://localhost:3000/api/v1/sights/` + this.$route.params.id + '/like')
    },
    dislikeSight () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(`http://localhost:3000/api/v1/sights/` + this.$route.params.id + '/dislike')
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
