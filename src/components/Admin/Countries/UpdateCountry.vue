<template>
  <div class="new_country">
    <h1>Edit Country</h1>
    <li v-for="error in errors[0]" :key="error[0]">
      <h5>{{ error[0] }} {{ error[1][0] }}</h5><br/>
    </li>
    <form class="new_country_form" @submit.prevent="createCountry()">
      <div class="col-sm-12">
        <input type="text" v-model="name" class="form-control" placeholder="Name of country"><br/>
        <button type="submit" name="button" class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../../backend/AdminApi.js'

export default {
  name: 'edit_country',
  data () {
    return {
      name: '',
      errors: [],
    }
  },
  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.countryPath(this.$route.params.id))
      .then(response => {
        this.name = response.data.name
      })
  },
  methods: {
    createCountry () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.countryPath(this.$route.params.id), {
        country: {
          name: this.name
        }
      })
        .then(() => {
          location.href = '/#/admin/countries'
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
