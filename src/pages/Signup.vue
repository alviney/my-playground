<template>
  <div class="Signup">
      <p>Let's create a new account !</p>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button @click="signUp">Sign Up</button>
      <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async signUp() {
      try {
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        // create user in database.
      } catch (err) {
        alert(err.message)
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.signUp {
  margin-top: 40px;
}

input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}

span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
