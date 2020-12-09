import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../components/Signup.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import(/* webpackChunkName: "about" */ '../components/Courses.vue')
  },
  {
    path: '/course/:id',
    name: 'CourseDetail',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../components/CourseDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
