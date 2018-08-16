<template>
<header class="TheHeader">
    <div class="TheHeader__Container">
      <h1 class="TheHeader__Logo">Chat App</h1>    
      <span class="TheHeader__Spacer"></span>
      <div class="TheHeader__Nav">
        <AppBtn @click="logout">Logout</AppBtn>
      </div>
    </div>
</header>
</template>

<script>
import firebase from 'firebase'
import AppBtn from './AppBtn.vue'

export default {
  components: {
    AppBtn
  },

  data() {
    return {
      showDropdown: false
    }
  },

  mounted() {
    this.onDocumentClick = this.onDocumentClick.bind(this)
    document.addEventListener('click', this.onDocumentClick)
  },

  destroyed() {
    document.removeEventListener('click', this.onDocumentClick)
  },

  methods: {
    async logout() {
      console.log('Out')
      this.$store.dispatch('users/logout')
      try {
      } catch (err) {
        alert(err.message)
      }
    },
    menuButtonClicked() {
      this.showDropdown = true
    },

    onDocumentClick(ev) {
      if (!this.$el.contains(ev.target)) {
        this.showDropdown = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/container';
@require '../styles/config';

.TheHeader {
  top: 0;
  left: 0;
  background-color: $colorOrange;
  width: 100vw;

  &__Container {
    container();
    display: flex;
    align-items: stretch;
    margin: 0 auto;
    color: $colorWhite;
  }

  &__Logo {
    padding: 1rem 1rem;
    white-space: nowrap;
  }

  &__Spacer {
    flex: 1;
  }
}
</style>
