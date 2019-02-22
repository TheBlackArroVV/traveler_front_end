<template>
  <div class="NewTrip">
    <h1>Create your own trip</h1>
    <li v-for="error in errors" :key="error[0]">
      <h5>{{ error[0] }} {{ error[1][0] }}</h5><br/>
    </li>
    <form class="new_trip_form" v-on:submit.prevent="postTrip()">
      <div class="col-sm-12">
        <input v-model="description" placeholder="description of your trip" class="form-control form-control-lg"><br>
        <input v-model="budget" placeholder="budget of your trip" class="form-control form-control-lg"><br>
        <input v-model="maxMembers" placeholder="max members of your trip" class="form-control form-control-lg"><br>
        <div class="form-group">
                    <select v-model="cityId" style="width: 93%">
                    <option value='' disabled selected>City</option>
                    <option v-for="city in cities" :key="city.id" :value="city.id">
                        {{ city.name }}
                    </option>
                    </select>
        </div>
        <button type="submit" name="button" class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'NewTrip',
  data () {
    return {
      errors: [],
      description: '',
      budget: '',
      maxMembers: '',
      cityId: '',
      cities: []
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.citiesIndexPath())
      .then(response => {
        this.cities = response.data
      })
  },
  methods: {
    postTrip () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.post(Api.tripsPath(), {
        description: this.description,
        budget: this.budget,
        max_members: this.maxMembers,
        city_id: this.cityId
      })
        .then(response => {
          location.href = '/#/trips'
        })
        .catch(e => {
          this.errors = Object.entries(e.response.data)
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
