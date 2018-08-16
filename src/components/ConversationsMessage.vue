<template>
  <div class="ConversationsMessage">
      <div :class="getPosition">
          {{ message.sender }}
          {{ message.text }}
      </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    getPosition() {
      if (this.message.sender === this.$store.state.users.currentUser) {
        return 'my message'
      } else {
        return 'message'
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
.my.message {
  text-align: right;
}

.ConversationsMessage {
  border: 1px solid grey;
}
</style>

