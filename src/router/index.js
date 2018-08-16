import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/pages/Signup.vue'
import Home from '@/pages/Home.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: './'
    },

    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/',
      name: 'Home',
      component: Home
      // meta: {
      //   requiresAuth: true
      // }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('/')
//   else next()
// })

export default router
