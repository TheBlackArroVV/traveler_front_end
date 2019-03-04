<template>
    <div class="sights">
        <h1>Sights</h1>
        <ul class="list-group">
          <div class="row col-sm-12">
            <li v-for="sight in sights" :key="sight.id" class="list-group-item col-sm-4"><br/>
                <div>
                    {{ topic.name }}<br/>
                    {{ topic.description }}<br/>
                    <button type="submit" name="button" @click="deleteSight(sight.id)">Delete</button>
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
  name: 'sights',
  data () {
    return {
      sights: []
    }
  },
  created () {
    this.getSights()
  },
  methods: {
    getSights () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get(Api.sightsPath())
        .then(response => {
          this.sights = response.data
        })
    },
    deleteSight (id) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.delete(Api.sightPath(id))
        .then(() => {
          this.getSights()
        })
    }
  }
}
</script>

<style scoped>
</style>
