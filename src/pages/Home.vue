<template>
  <div class="Home">
      <div class="Home__Initilize">
        <Initialize/>
      </div>
      <div>
        <!-- <button @click="checkIt">Check it</button> -->
        <ConversationsContainer
          v-for='id in convoIds'
          :conversation='conversations[id]'
          :id='id'
          :key='id'
        />
        <ContactsList/>
      </div>
  </div>
</template>

<script>
import Initialize from '../Initialize.vue'
import ConversationsContainer from '../components/ConversationsContainer'
import ContactsList from '../components/ContactsList'
import { mapState } from 'vuex'

export default {
  components: {
    Initialize,
    ConversationsContainer,
    ContactsList
  },

  computed: {
    ...mapState({
      conversations: (state) => state.conversations.all,
      convoIds: (state) => state.conversations.allIds
    })
  },

  methods: {
    checkIt() {
      console.log(this.convoIds)
    }
  }
}
</script>

<style lang='stylus' scoped>
.Home {
  margin-top: 50px;
}
</style>

