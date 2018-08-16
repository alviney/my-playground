<template>
  <div class="ContactsItem">
      {{ name }}
      <AppBtn class="ContactsItem__TalkButton">Talk</AppBtn>
      <!-- <button class="ContactsItem__TalkButton" button @click="StartConversation">Talk</button> -->
  </div>
</template>

<script>
import AppBtn from './AppBtn'
export default {
  components: {
    AppBtn
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },

  methods: {
    StartConversation() {
      console.log(`Start conversation with ${name}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/app.styl';

.ContactsItem {
  padding: 20px;
  height: auto;
  border: 1px solid blue;

  &__TalkButton {
    float: right;
  }
}
</style>
