<template>
  <div id="profile">
    <img :src="this.user.avatar.url" alt="user avatar" style="width: 500px; height: 300px"><br/>
    {{ this.user.about }}<br/>
    <a href="/#/profile/edit">Edit Profile</a>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'Profile',
  data () {
    return {
      user: ''
    }
  },

  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.profilePath())
      .then(response => {
        this.user = response.data
      })
  }
}
</script>
