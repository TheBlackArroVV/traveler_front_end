<template>
  <div class="new_sight">
    <h1>Create a new sight</h1>
    {{ errors.length > 0 ? errors : 'Your sight was created' }}
    <form class="new_sight_form" v-on:submit.prevent="postSight()">
      <div class="col-sm-12">
        <div class="form-group">
          <input v-model="name" placeholder="name of your sight" class="form-control form-control-lg"><br>
        </div>
        <textarea v-model="description" placeholder="description of your sight" class="form-control form-control-lg"></textarea><br>
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
  name: 'NewSight',
  data () {
    return {
      errors: [],
      name: '',
      description: '',
      cities: [],
      cityId: ''
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
    postSight () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.post(Api.sightsPath(), {
        name: this.name,
        city_id: this.cityId,
        description: this.description
      })
        .then(response => {
          location.href = '/#/sights'
        })
        .catch(e => {
          this.errors.push(e)
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
