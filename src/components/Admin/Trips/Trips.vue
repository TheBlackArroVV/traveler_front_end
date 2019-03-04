<template>
  <div class="trips">
    <h1>Trips</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="trip in trips" :key="trip.id" class="list-group-item col-sm-4"><br/>
                <div>
                    budget: {{ trip.budget }}<br/>
                    description: {{ trip.description }}<br/>
                    max_members: {{ trip.max_members }}<br/>
                    <button type="submit" name="button" @click="deleteTrip(trip.id)">Delete</button>
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
  name: 'trips',
  data () {
    return {
      trips: []
    }
  },

  created () {
    this.getTrips()
  },
  methods: {
    getTrips () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get(Api.tripsPath())
        .then(response => {
          this.trips = response.data
        })
    },
    deleteTrip (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.tripPath(id))
        .then(() => {
          this.getTrips()
        })
    }
  }
}
</script>

<style scoped>
</style>
