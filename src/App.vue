<template>
  <div id="app">
    <TheHeader/>
    <Login v-if='!currentUser'/>
    <router-view v-else/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import Login from './pages/Login.vue'
import AppBtn from './components/AppBtn.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    TheHeader,
    Login,
    AppBtn
  },
  computed: {
    ...mapGetters('users', ['currentUser'])
  },
  created() {
    this.$store.dispatch('users/loadCurrentUser')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
body,
input,
html,
h1,
h2,
h3 {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-size: 1.4rem;
}
a {
  text-decoration: none;
  color: inherit;
}
:focus {
  box-shadow: none;
  outline: 0;
}
</style>
