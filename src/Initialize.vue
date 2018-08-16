<template>
  <div>
      <button @click='init'>Load seeds</button>
      <!-- <button @click='get'>Get Conversations</button>       -->
  </div>
</template>

<script>
export default {
  methods: {
    init() {
      this.$store.dispatch('users/seed')
      // this.$store.dispatch('conversations/seed')
    },
    get() {
      // this.$store.dispatch('users/get')
      // this.$store.dispatch('conversations/get')
    }
  }
}
</script>
