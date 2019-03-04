<template>
  <div class="new_city">
    <h1>New City</h1>
    <li v-for="error in errors[0]" :key="error[0]">
      <h5>{{ error[0] }} {{ error[1][0] }}</h5><br/>
    </li>
    <form class="new_city_form" @submit.prevent="createCity()">
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
        <button type="submit" name="button" class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../../backend/AdminApi.js'

export default {
  name: 'new_city',
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
  },
  methods: {
    createCity () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.post(Api.citiesPath(), {
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
