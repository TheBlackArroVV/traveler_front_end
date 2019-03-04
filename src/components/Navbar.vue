<template>
    <nav class="navbar navbar-inverse navbar-expand-md navbar-light bg-light">
      <div class="w3-bar w3-white w3-border-bottom w3-xlarge">
        <a href="/" class="w3-bar-item w3-button w3-text-red w3-hover-red"><b><i class="fa fa-map-marker w3-margin-right"></i>Traveler</b></a>
        <a href="#" class="w3-bar-item w3-button w3-right w3-hover-red w3-text-grey"><i class="fa fa-search"></i></a>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto" v-if="this.$session.get('jwt')">
                <li class="nav-item">
                  <a class="nav-link" href="/#/posts">Posts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#/profile">Profile</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/sights">Sights</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/forum">Forum</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/trips">Trips</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/sights/recommendations">Recommendations</a>
                </li>
            </ul>
          <ul class="navbar-nav mr-auto" v-else>
                <li class="nav-item">
                  <a class="nav-link" href="/#/login" v-if="!this.$session.get('jwt')">Login</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/#/registration" v-if="!this.$session.get('jwt')">Registration</a>
                </li>
          </ul>
          <ul class="navbar-nav mr-auto" v-show="isAdmin()">
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/cities">Cities</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/comments">Comments</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/messages">Messages</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/posts">POsts</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/sights">Sights</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/topics">Topics</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/trips">Trips</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/#/admin/users">Users</a>
                  </li>
          </ul>
          </div>
      </div>
    </nav>
</template>

<script>
import axios from 'axios'
import Api from '../backend/Api.js'

export default {
  name: 'Navbar',
  data () {
    return {
      admin: false
    }
  },
  methods: {
    isAdmin () {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get(Api.profilePath())
        .then(response => {
          this.admin = response.data.admin
        })

      return this.admin
    }
  }
}
</script>
