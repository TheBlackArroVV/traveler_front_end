<template>
    <div id="recommendations">
      <h1>Sights</h1>
      <ul class="list-group">
      <div class="row col-sm-12">
        <li v-for="sight in sights" :key = "sight.id" class="list-group-item col-sm-4">
          <div>
            <a :href="'/#/sights/' + sight.id">{{ sight.name }}</a><br>
            {{ sight.description }}
          </div>
        </li>
      </div>
    </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Recommendations',
  data () {
    return {
      sights: []
    }
  },
  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(`http://localhost:3000/api/v1/sights/recommended`)
      .then(response => {
        this.sights = response.data
      })
  }
}
</script>

<style scoped>
</style>
