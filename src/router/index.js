import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Posts from '@/components/Posts/Posts'
import Post from '@/components/Posts/Post'
import NewPost from '@/components/Posts/NewPost'
import EditPost from '@/components/Posts/EditPost'
import Registration from '@/components/Users/Registration'
import Session from '@/components/Users/Session'
import Profile from '@/components/Users/Profile'
import EditProfile from '@/components/Users/EditProfile'
import Sights from '@/components/Sights/Index'
import Sight from '@/components/Sights/Show'
import NewSight from '@/components/Sights/New'
import EditSight from '@/components/Sights/Edit'
import Topics from '@/components/Forum/Index'
import Topic from '@/components/Forum/Show'

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
      component: Post,
      children: [
        {
          path: 'edit',
          name: 'EditPost',
          component: EditPost
        }
      ]
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'Session',
      component: Session
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile/edit',
      name: 'EditProfile',
      component: EditProfile
    },
    {
      path: '/sights',
      name: 'Sights',
      component: Sights
    },
    {
      path: '/sights/new',
      name: 'NewSight',
      component: NewSight
    },
    {
      path: '/sights/:id',
      name: 'Sight',
      component: Sight,
      children: [
        {
          path: 'edit',
          name: 'EditSight',
          component: EditSight
        }
      ]
    },
    {
      path: '/forum',
      name: 'Topics',
      component: Topics
    },
    {
      path: '/topics/:id',
      name: 'Topic',
      component: Topic
    }
  ]
})
