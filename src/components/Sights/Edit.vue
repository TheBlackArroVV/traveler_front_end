<template>
    <div id="edit_sight">
    <h1>Edit this post</h1>
    {{ errors.length > 0 ? errors : 'Your sight was updated' }}
    <form class="edit_post_form" v-on:submit.prevent="updateSight()">
      <div class="col-sm-12">
        <input v-model="name" placeholder="name of your sight" class="form-control form-control-lg"><br>
        <textarea v-model="description" placeholder="description of your sight" class="form-control form-control-lg"></textarea><br>
        <div class="form-group">
                    <select v-model="cityId" style="width: 93%">
                    <option value='' disabled selected>City</option>
                    <option v-for="city in cities" :key="city.id" :value="city.id">
                        {{ city.name }}
                    </option>
                    </select>
        </div>
        <button type="submit" name="button" class="btn btn-primary">Update Sight</button>
      </div>
    </form>
    </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'EditSight',
  data () {
    return {
      name: '',
      description: '',
      errors: [],
      cities: [],
      cityId: ''
    }
  },
  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.citiesIndexPath())
      .then(response => {
        this.cities = response.data
      })
    axios.get(Api.sightPath(this.$route.params.id))
      .then(response => {
        this.name = response.data.name
        this.cityId = response.data.city_id
        this.description = response.data.description
      })
  },
  methods: {
    updateSight () {
      axios.patch(Api.sightPath(this.$route.params.id), {
        sight: {
          name: this.name,
          description: this.description,
          city_id: this.cityId
        }
      })
        .then(() => {
          this.$router.push('/sights')
        })
        .catch(e => {
          this.errors = e
        })
    }
  }
}
</script>

<style scoped>

</style>
