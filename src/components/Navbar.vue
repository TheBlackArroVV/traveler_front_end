<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
