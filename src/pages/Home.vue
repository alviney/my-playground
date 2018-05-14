<template>
  <div class="Home">
      <h2>Home</h2>
      <button @click="logout">Logout</button>
      <div class="Home__Initilize">
        <Initialize/>
      </div>
      <div>
        <button @click="checkIt">Check it</button>
        <ConversationsContainer
          v-for='id in convoIds'
          :conversation='conversations[id]'
          :id='id'
          :key='id'
        />
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import Initialize from '../Initialize.vue'
import ConversationsContainer from '../components/ConversationsContainer'
import { mapState } from 'vuex'

export default {
  components: {
    Initialize,
    ConversationsContainer
  },

  computed: {
    ...mapState({
      conversations: (state) => state.conversations.all,
      convoIds: (state) => state.conversations.allIds
    })
  },

  methods: {
    async logout() {
      try {
        await firebase.auth().signOut()
        this.$router.replace('login')
      } catch (err) {
        alert(err.message)
      }
    },

    checkIt() {
      console.log(this.convoIds)
    }
  }
}
</script>

<style lang='stylus' scoped>
.Home__Initilize {
  margin-top: 100px;
}
</style>

