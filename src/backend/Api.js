export default {
  topicsIndexPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/topics`
  },
  topicsCreatePath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/topics`
  },
  topicPath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/topics/` + id
  },
  citiesIndexPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/cities`
  },
  messagesPath (topicId) {
    return `https://travelerapiapp.herokuapp.com//api/v1/topics/` + topicId + `/messages`
  },
  postPath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/posts/` + id
  },
  postsPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/posts`
  },
  commentPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/comments`
  },
  commentDeletePath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/comments` + id
  },
  commentsPath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/comments?post_id=` + id
  },
  sightPath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/sights/` + id
  },
  sightsPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/sights`
  },
  recommendationSightPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/sights/recommended`
  },
  sightLikePath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/sights/` + id + '/like'
  },
  sightDislikePath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/sights/` + id + '/dislike'
  },
  tripPath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/trips/` + id
  },
  tripsPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/trips/`
  },
  joinTripPath (id) {
    return `https://travelerapiapp.herokuapp.com//api/v1/trips/` + id + '/join'
  },
  profilePath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/users/profiles`
  },
  registrationsPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/users`
  },
  jwtPath () {
    return `https://travelerapiapp.herokuapp.com//api/v1/user_token`
  }
}
