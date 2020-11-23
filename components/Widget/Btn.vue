<template>
  <button :style="styles" class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => 'default',
      validator: function (value) {
        return ['default', 'text'].indexOf(value) !== -1
      }
    },
    color: String
  },

  computed: {
    styles(){
      return {
        'background-color': this.type !== 'text' ? this.color : 'transparent',
        'color': this.type !== 'text' ? 'white' : this.color
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.btn
  height: 38px
  padding: 0 12px
  border: 0
  border-radius: 4px
  cursor: pointer
  outline: none
  font-weight: bold
</style>