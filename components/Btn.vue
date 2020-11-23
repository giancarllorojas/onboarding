<template>
  <button v-bind="$attrs" :class="{'btn--icon': type === 'icon', 'btn--block': !!block}" v-on="$listeners" :style="styles" class="btn">
    <span class="btn__slot">
      <slot/>
    </span>
    <div class="btn__overlay"></div>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => 'default',
      validator: function (value) {
        return ['default', 'text', 'icon'].indexOf(value) !== -1
      }
    },
    block: Boolean,
    color: String,
    fontColor: String
  },

  computed: {
    styles(){
      if(this.type === 'text'){
        return {
          'background-color': 'transparent',
          'color': this.color
        }
      }else if(this.type === 'icon'){
        return {
          'color': this.color
        }
      }else{
        return {
          'background-color': this.color,
          'color': !!this.fontColor ? this.fontColor : 'white'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.btn
  height: 38px
  padding: 0 18px
  border: 0
  border-radius: 4px
  cursor: pointer
  outline: none
  font-weight: bold
  position: relative
  @apply shadow-sm
  .btn__loading
    pass
  .btn__slot
    position: relative
    z-index: 5
  .btn__overlay
    background-color: white
    opacity: 0
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    z-index: 1
    transition: all 200ms ease
  &:hover
    .btn__overlay
      opacity: 0.2
.btn:disabled,
.btn[disabled]
  background-color: #cccccc !important
  color: #666666 !important
  cursor: default

.btn--icon
  @apply flex items-center justify-center rounded-lg
  padding: 6px !important
  &:hover
    background-color: #ebebeb !important
.btn--block
  @apply w-full
</style>