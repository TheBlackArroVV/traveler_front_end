<template>
  <div id="edit-profile">
    <div class="form-group">
      <textarea name="" id="" cols="30" rows="10" v-model="about" placeholder="About"
                      class="form-contol form-contol-lg"></textarea>
    </div>
    <div class="form-group">
      <input type="file" class="form-control form-control-lg" @change="processFile($event)">
    </div>
    <button @click="updateProfile">Update Profile</button>
  </div>
</template>

<script>
import axios from 'axios'
import Api from '../../backend/Api.js'

export default {
  name: 'EditProfile',
  data () {
    return {
      about: '',
      avatar: ''
    }
  },
  beforeCreate () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
    axios.get(Api.profilePath())
      .then(response => {
        this.about = response.data.about
      })
  },
  methods: {
    processFile (event) {
      this.avatar = event.target.files[0]
    },
    updateProfile () {
      let formData = new FormData()
      formData.append('profile[avatar]', this.avatar)
      formData.append('profile[about]', this.about)

      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.patch(Api.profilePath(), formData)
        .then(response => {
          this.$router.go('profile')
        })
    }
  }
}
</script>
