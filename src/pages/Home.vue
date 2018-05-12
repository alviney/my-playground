<template>
  <div>
      <h2>Home</h2>
      <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
      async logout() {
          try {
            await firebase.auth().signOut();
            this.$router.replace('login')
          } catch (err) {
              alert(err.message)
          }
      }
  }
}
</script>

<style>

</style>

