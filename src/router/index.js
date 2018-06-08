import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Posts from '@/components/Posts'
import Post from '@/components/Post'
import NewPost from '@/components/NewPost'

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
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    }
  ]
})
