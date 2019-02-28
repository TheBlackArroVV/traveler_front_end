import Vue from 'vue'
import Router from 'vue-router'
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
import NewTopic from '@/components/Forum/New'
import Trips from '@/components/Trips/Index'
import Trip from '@/components/Trips/Show'
import NewTrip from '@/components/Trips/New'
import EditTrip from '@/components/Trips/Edit'
import Recommendations from '@/components/Sights/Recommendations'
import Cities from '@/components/Admin/Cities/Index'
import AdminTrips from '@/components/Admin/Trips/Trips'
import AdminTopics from '@/components/Admin/Topics/Topics'
import AdminSights from '@/components/Admin/Sights/Sights'
import AdminPosts from '@/components/Admin/Posts/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Session',
      component: Session
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
      path: '/sights/recommendations',
      name: 'Recommendations',
      component: Recommendations
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
      path: '/topics/new',
      name: 'NewTopic',
      component: NewTopic
    },
    {
      path: '/topics/:id',
      name: 'Topic',
      component: Topic
    },
    {
      path: '/trips',
      name: 'Trips',
      component: Trips
    },
    {
      path: '/trips/new',
      name: 'NewTrip',
      component: NewTrip
    },
    {
      path: '/trips/:id',
      name: 'Trip',
      component: Trip,
      children: [
        {
          path: 'edit',
          name: 'EditTrip',
          component: EditTrip
        }
      ]
    },
    {
      path: '/admin/cities',
      name: 'cities',
      component: Cities
    },
    {
      path: '/admin/trips',
      name: 'trips',
      component: AdminTrips
    },
    {
      path: '/admin/topics',
      name: 'topics',
      component: AdminTopics
    },
    {
      path: '/admin/sights',
      name: 'sights',
      component: AdminSights
    },
    {
      path: '/admin/posts',
      name: 'posts',
      component: AdminPosts
    }
  ]
})
