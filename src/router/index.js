import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Home from '@/pages/Home';
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '*',
      redirect: './login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },

    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('/')
  else next()
})

export default router;
