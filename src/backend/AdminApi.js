export default {
  citiesPath () {
    return `http://localhost:3000/api/admin/cities`
  },
  cityPath (id) {
    return `http://localhost:3000/api/admin/cities/` + id
  },
  countriesPath () {
    return `http://localhost:3000/api/admin/countries`
  },
  countryPath (id) {
    return `http://localhost:3000/api/admin/country/` + id
  },
  usersPath () {
    return `http://localhost:3000/api/admin/users`
  },
  userPath (id) {
    return `http://localhost:3000/api/admin/users/` + id
  },
  commentsPath () {
    return `http://localhost:3000/api/admin/comments`
  },
  commentPath (id) {
    return `http://localhost:3000/api/admin/comments/` + id
  },
  messagesPath () {
    return `http://localhost:3000/api/admin/messages`
  },
  messagePath (id) {
    return `http://localhost:3000/api/admin/messages/` + id
  },
  postsPath () {
    return `http://localhost:3000/api/admin/posts`
  },
  postPath (id) {
    return `http://localhost:3000/api/admin/post/` + id
  },
  sightsPath () {
    return `http://localhost:3000/api/admin/sights`
  },
  sightPath (id) {
    return `http://localhost:3000/api/admin/sights/` + id
  },
  topicsPath () {
    return `http://localhost:3000/api/admin/topics`
  },
  topicPath (id) {
    return `http://localhost:3000/api/admin/topics/` + id
  },
  tripsPath () {
    return `http://localhost:3000/api/admin/trips`
  },
  tripPath (id) {
    return `http://localhost:3000/api/admin/trips/` + id
  }
}
