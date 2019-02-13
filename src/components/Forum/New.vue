<template lang="html">
  <div id="new_topic">
    <h1>Describe your problem</h1>
    {{ errors.length > 0 ? errors : 'Topic was created' }}
    <form class="new_topic_form" v-on:submit.prevent="createTopic()">
      <div class="col-sm-12">
        <input type="text" v-model="title" placeholder="title">
        <textarea v-model="description" placeholder="description of your topic" class="form-control form-control-lg"></textarea><br>
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
import Api from '../../backend/Api'

export default {
  name: 'new_topic',
  data () {
    return {
      errors: [],
      title: '',
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
    createTopic () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.post(Api.topicsCreatePath(), {
        topic: {
          title: this.title,
          description: this.description,
          city_id: this.cityId
        }
      })
        .then(response => {
          location.href = '/#/forum'
        })
        .catch(e => {
          this.errors = e
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
