export default {
  topicsIndexPath () {
    return `http://localhost:3000/api/v1/topics`
  },
  topicsCreatePath () {
    return `http://localhost:3000/api/v1/topics`
  },
  topicPath (id) {
    return `http://localhost:3000/api/v1/topics/` + id
  },
  citiesIndexPath () {
    return `http://localhost:3000/api/v1/cities`
  },
  messagesPath (topicId) {
    return `http://localhost:3000/api/v1/topics/` + topicId + `/messages`
  },
  postPath (id) {
    return `http://localhost:3000/api/v1/posts` + id
  },
  postsPath () {
    return `http://localhost:3000/api/v1/posts`
  },
  commentPath () {
    return `http://localhost:3000/api/v1/comments`
  },
  commentDeletePath (id) {
    return `http://localhost:3000/api/v1/comments` + id
  },
  commentsPath (id) {
    return `http://localhost:3000/api/v1/comments?post_id=` + id
  },
  sightPath (id) {
    return `http://localhost:3000/api/v1/sights/` + id
  },
  sightsPath () {
    return `http://localhost:3000/api/v1/sights`
  },
  recommendationSightPath () {
    return `http://localhost:3000/api/v1/sights/recommended`
  },
  sightLikePath (id) {
    return `http://localhost:3000/api/v1/sights/` + id + '/like'
  },
  sightDislikePath (id) {
    return `http://localhost:3000/api/v1/sights/` + id + '/dislike'
  },
  tripPath (id) {
    return `http://localhost:3000/api/v1/trips/` + id
  },
  tripsPath () {
    return `http://localhost:3000/api/v1/trips/`
  },
  joinTripPath (id) {
    return `http://localhost:3000/api/v1/trips/` + id + '/join'
  },
  profilePath () {
    return `http://localhost:3000/api/v1/users/profiles`
  },
  registrationsPath () {
    return `http://localhost:3000/api/v1/users`
  },
  jwtPath () {
    return `http://localhost:3000/api/v1/user_token`
  }
}
