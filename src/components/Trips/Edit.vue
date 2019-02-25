<template>
  <div class="edit_trip">
    <h1>Edit this trip</h1>
    <li v-for="error in errors[0]" :key="error[0]">
      <h5>{{ error[0] }} {{ error[1][0] }}</h5><br/>
    </li>
    <form class="edit_trip_form" v-on:submit.prevent="updateTrip()">
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
  name: 'EditTrip',
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
    axios.get(Api.tripPath(this.$route.params.id))
      .then(response => {
        this.description = response.data.description
        this.budget = response.data.budget
        this.maxMembers = response.data.max_members
        this.cityId = response.data.city_id
      })
      .catch(e => {
        this.errors.push(e)
      })
    axios.get(Api.citiesIndexPath())
      .then(response => {
        this.cities = response.data
      })
  },
  methods: {
    updateTrip () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.tripPath(this.$route.params.id), {
        trip: {
          description: this.description,
          budget: this.budget,
          max_members: this.maxMembers,
          city_id: this.cityId
        }
      })
        .then(response => {
          location.reload()
        })
        .catch(e => {
          this.errors.push(e.data.errors)
          console.log(this.errors)
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
