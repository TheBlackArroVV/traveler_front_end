<template>
    <div class="cities">
        <h1>Cities</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="city in cities" :key="city.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ city.name }}<br/>
                    <button type="submit" name="button" @click="deleteCity(city.id)">Delete</button>
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
  name: 'cities',
  data () {
    return {
      cities: []
    }
  },
  created () {
    this.getCities()
  },
  methods: {
    deleteCity (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.cityPath(id))
        .then(() => {
          this.getCities()
        })
    },
    getCities () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get(Api.citiesPath())
        .then(response => {
          this.cities = response.data
        })
    }
  }
}
</script>

<style scoped>
</style>
