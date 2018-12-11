<template>
    <div id="sights">
      {{ this.sights }}
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Sights',
  data () {
    return {
      sights: []
    }
  },
  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(`http://localhost:3000/api/v1/sights`)
      .then(response => {
        this.sights = response.data
      })
  }
}
</script>

<style scoped>
</style>
