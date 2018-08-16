<template>
    <router-link
        v-if="to"
        :to="to"
        class="AppBtn"
        :color="color"
    >
    <span @click="click"></span>
    <slot/>
    </router-link>
    <button 
        v-else
        class="AppBtn"
        :color="color"
        :btnStyle="btnStyle"
        @click="click"
     >
     <slot/>
    </button>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: false
    },
    color: {
      type: String,
      required: false
    },
    btnStyle: {
      type: String,
      required: false
    }
  },

  computed: {
    styleClassName() {
      if (this.btnStyle) return `-${this.btnStyle}`
    }
  },
  methods: {
    click(ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '../styles/app';
@require '../styles/config';

.AppBtn {
  textPrimary();
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;

  &:hover {
    color: $colorOrangeDark;
  }

  &[color='blue'] {
    background-color: blue;
  }

  &[color='orange'] {
    background-color: orange;
  }
}
</style>
