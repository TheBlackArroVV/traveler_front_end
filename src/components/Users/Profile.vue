<template>
  <div id="profile">
    <img :src="this.userAvatar()" style="width: 300; height: 300px"><br/>
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
  },

  methods: {
    userAvatar () {
      return this.user.avatar.url || '/static/images/personal_default_avatar_for_mobile_phone_app__146524.png'
    }
  }
}
</script>
