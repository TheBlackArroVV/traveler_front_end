<template>
  <div class="trip">
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        {{ trip.description }}
      </li>
      <li>
        {{ trip.user_id }}
      </li>
      <a href="/#/trips" @click="joinTrip()">Join a trip</a><br>
      <a :href="'/#/trips/' + trip.id + '/edit'">Edit this trip</a><br>
      <a href="/#/trips" @click="deleteTrip()">Delete this trip</a>
      <router-view></router-view>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'Trip',
  data () {
    return {
      msg: 'trip',
      trip: '',
      errors: []
    }
  },

  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.tripPath(this.$route.params.id))
      .then(response => {
        this.trip = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    deleteTrip () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.tripPath(this.$route.params.id))
        .then(response => {
          location.href = '/#/trips'
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    joinTrip () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.joinTripPath(this.$route.params.id))
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
