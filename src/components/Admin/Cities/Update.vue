<template>
  <div class="update_city">
    <h1>Update City</h1>
    <li v-for="error in errors[0]" :key="error[0]">
      <h5>{{ error[0] }} {{ error[1][0] }}</h5><br/>
    </li>
    <form class="update_city_form" @submit.prevent="updateCity()">
      <div class="col-sm-12">
        <input type="text" v-model="name" class="form-control" placeholder="Name of country"><br/>
        <div class="form-group">
                    <select v-model="countryId" style="width: 93%">
                    <option value='' disabled selected>Country</option>
                    <option v-for="country in countries" :key="country.id" :value="country.id">
                        {{ country.name }}
                    </option>
                    </select>
        </div>
        <button type="submit" name="button" class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../../backend/AdminApi.js'

export default {
  name: 'update_city',
  data () {
    return {
      name: '',
      errors: [],
      countryId: '',
      countries: []
    }
  },
  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.countriesPath())
      .then(response => {
        this.countries = response.data
      })
    axios.get(Api.cityPath(this.$route.params.id))
      .then(response => {
        this.name = response.data.name
        this.countryId = response.data.country_id
      })
  },
  methods: {
    createCity () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.cityPath(this.$route.params.id), {
        city: {
          name: this.name,
          country_id: this.countryId
        }
      })
        .then(() => {
          location.href = '/#/admin/cities'
        })
        .catch(e => {
          this.errors.push(Object.entries(e.response.data))
        })
    }
  }
}
</script>

<style scoped>
</style>
