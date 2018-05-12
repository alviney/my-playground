<template>
  <div class="Login">
      <h2>Sign In</h2>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button @click="signIn">Connection</button>
      <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
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
        async signIn() {
        try {
            const auth = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            this.$router.push("/")            
        } catch(err) {
            alert('Oops. ' + err.message)
        } 
        }
    }
}
</script>

<style lang="stylus" scoped>
.Login {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 10%;
    cursor: pointer;
}

p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>
