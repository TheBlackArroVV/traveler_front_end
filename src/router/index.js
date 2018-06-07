import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Posts from '@/components/Posts'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    }
  ]
})
