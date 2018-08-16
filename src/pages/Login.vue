<template>
  <div class="Login">
    <AppPopup v-if="error" :message="error" @click="closePopup"/>
    <div class= "Login__Logo">
      <h2>Logo Here</h2>
    </div>
    <div class="Login__Content">
      <div class="Login__Row">
        <input type="text" v-model="email" placeholder="Email"><br>
      </div>
      <div class="Login__Row">
        <input type="password" v-model="password" placeholder="Password"><br>
      </div>
      <div class="Login__Row">
        <AppBtn class="Login__ButtonEmail" @click="signInWithEmail" color="blue">login</AppBtn>
      </div>
      <div class="Login__Row">
        <div class="Login__Divider"></div>
      </div>
      <div class="Login__Row">
        <AppBtn class="Login__ButtonProvider" @click="signInWithProvider" color="orange">login with Google</AppBtn>
      </div>
      <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import * as auth from '../services/auth.js'
import AppBtn from '../components/AppBtn'
import AppPopup from '../components/AppPopup'
export default {
  components: {
    AppBtn,
    AppPopup
  },
  data() {
    return {
      error: null,
      showLinkAccountsMessage: false,
      linkProviders: false,
      email: '',
      password: ''
    }
  },

  methods: {
    async signInWithEmail() {
      const userCredentials = {
        email: this.email,
        password: this.password
      }
      try {
        await auth.signInWithEmailAndPassword(userCredentials)
        if (this.linkProviders) {
          try {
            await auth.linkWithPopup()
          } catch (err) {}
        }
        await this.$store.dispatch('users/setCurrentUser')
      } catch (err) {
        alert(`Oops. ${err.message}`)
      }
    },

    async signInWithProvider() {
      try {
        await auth.signInWithProvider()
        await this.$store.dispatch('users/setCurrentUser')
      } catch (err) {
        if (err.code === 'auth/account-exists-with-different-credential') {
          this.error = 'An account already exists with this email. Sign in to link this account'
          return
        }
        alert(`Oops. ${err.message}`)
      }
    },

    closePopup() {
      this.error = null
      this.linkProviders = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/config';
@require '../styles/app';

.Login {
  &__Logo {
    padding: 50px;
  }

  &__Content {
    display: grid;
    width: 40%;
    margin: auto;
  }

  &__ButtonEmail {
    margin-top: 10px;
    height: 40px;
  }

  &__ButtonProvider {
    width: 70%;
    height: 40px;
  }

  &__Divider {
    border-top: 1px solid #d9dadc;
    margin: 20px 0px;
  }
}

p {
  margin-top: 40px;
  font-size: 13px;
}

p a {
  text-decoration: underline;
  cursor: pointer;
}

input {
  formField();
  height: 40px;
  margin: 10px 0px;
}
</style>
