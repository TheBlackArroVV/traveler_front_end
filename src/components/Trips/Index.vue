<template>
  <div class="trips">
    <h1>{{ msg }}</h1>
    <ul class="list-group">
      <div class="row col-sm-12">
        <li v-for="trip in trips" :key = "trip.id" class="list-group-item col-sm-4">
          <div>
            <a :href="'/#/trips/' + trip.id">{{ trip.description }}</a><br>
            {{ trip.user_id }}
          </div>
        </li>
      </div>
      <a href="/#/trips/new">Create a New trip</a>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Trips',
  data () {
    return {
      msg: 'trip',
      trips: [],
      errors: []
    }
  },

  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(`http://localhost:3000/api/v1/trips/`)
      .then(response => {
        this.trips = response.data
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
