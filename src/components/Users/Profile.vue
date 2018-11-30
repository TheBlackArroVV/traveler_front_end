<template>
  <div id="profile">
    <img :src="this.user.avatar.url" alt="user avatar" style="width: 500px; height: 300px"><br/>
    {{ this.user.about }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Profile',
  data () {
    return {
      user: ''
    }
  },

  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(`http://localhost:3000/api/v1/users/profiles`)
      .then(response => {
        console.log(response.data)
        this.user = response.data
      })
  }
}
</script>
