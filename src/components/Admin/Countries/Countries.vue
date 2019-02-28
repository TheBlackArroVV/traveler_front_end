<template>
    <div class="countries">
        <h1>Posts</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="country in countries" :key="country.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ country.name }}<br/>
                    <button type="submit" name="button" @click="deleteCountry(country.id)">Delete</button>
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
	name: 'countries',
	data () {
		return {
			countries: []
		}
	},
	created () {
		this.getCountries()
	},
	methods: {
		getCountries () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
			axios.get(Api.countriesPath())
				.then(response => {
					this.countries = response.data
				})			
		},
		deleteCOuntry (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
			axios.delete(Api.countryPath(id))
				.then(() => {
					this.getCountries()
				})
		} 
	}
}
</script>

<style scoped>
</style>
