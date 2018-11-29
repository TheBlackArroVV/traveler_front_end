<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Footer, Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
