<template>
  <div class="ContactsList">
    <ContactsItem
      v-for='contact in contacts'
      :key='contact.id'
      :name='contact.name'
    />
  </div>
</template>

<script>
import ContactsItem from './ContactsItem'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('users', ['allUsers'])
  },

  components: {
    ContactsItem
  },

  created() {
    console.log('Hey')
    this.$store.dispatch('users/getAll')
    console.log(this.allUsers)
  },

  data() {
    return {
      contacts: [
        {
          name: 'Rick',
          id: 1
        },
        {
          name: 'Morty',
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.ContactsList {
  width: 200px;
  height: 200px;
  border: 1px solid grey;
}
</style>
