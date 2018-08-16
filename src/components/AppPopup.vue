<template>
   <div class="AppPopup">   
        <div v-if="message" class="AppPopup__Container">
           <h3>{{ message }}</h3> 
        </div>
        <slot/>
        <AppBtn @click="click()">OK</AppBtn>
        <!-- <div class="AppPopup__Buttons">
            <AppBtn @click="click(true)">YES</AppBtn>
            <AppBtn @click="click(false)">NO</AppBtn>
        </div> -->
    </div> 
</template>

<script>
import AppBtn from './AppBtn'
export default {
  components: {
    AppBtn
  },

  props: {
    message: {
      type: String,
      required: false
    }
  },

  methods: {
    click(event) {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/app';

.AppPopup {
  absoluteCenter();
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  background-color: grey;
  color: white;

  &__Container {
    flex: 1;
  }

  &__Buttons {
    display: flex;
    height: 50px;
    background-color: red;
  }
}
</style>
