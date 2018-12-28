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
      <a href="/#/sights" @click="deleteSight()">Delete this Sight</a>
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
