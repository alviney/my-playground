<template>
  <div>
      <!-- Conversation ID: {{ id }} -->
    <hr>
    <ConversationsMessage 
        v-for='message in conversation.messages'
        :message='message'
        :key='message.created'
    />
    <br />
    <input v-model='newMessageText' @keyup.enter="send" placeholder='Type something...' />
  </div>
</template>

<script>
import ConversationsMessage from './ConversationsMessage'

export default {
  components: {
    ConversationsMessage
  },

  data() {
    return {
      newMessageText: ''
    }
  },

  props: {
    conversation: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  created() {
    this.$store.state.db
      .collection('conversations')
      .doc(this.id)
      .onSnapshot((convo) => {
        let source = convo.metadata.hasPendingWrites ? 'Local' : 'Server'
        console.log(`Source ${source}`)
        if (convo && convo.data()) {
          convo.data().messages.forEach((message) =>
            this.$store.commit('conversations/ADD_MESSAGE', {
              conversationId: this.id,
              message
            })
          )
        }
      })
  },
  methods: {
    send() {
      this.$store.dispatch('conversations/sendMessage', {
        text: this.newMessageText,
        conversationId: this.id,
        sender: this.$store.state.users.currentUser
      })
    }
  }
}
</script>
<style lang='stylus' scoped>
</style>
