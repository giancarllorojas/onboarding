<template>
  <div class="progress">
    <span :style="{'color': color}" class="progress__content">
      {{width}}%
    </span>
    <div :style="style" class="progress__percentage">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    total: Number | String,
    completed: Number | String
  },

  computed: {
    style(){
      return {
        'background-color': this.color,
        'width': `${this.width}%`
      }
    },

    width(){
      return ((parseInt(this.completed) / parseInt(this.total))*100).toFixed(0)
    }
  }
}
</script>

<style lang="sass" scoped>
.progress
  width: 100%
  height: 6px
  background-color: rgba(0,0,0,0.2)
  position: relative
  .progress__percentage
    height: 100%
    transition: all 200ms ease-in-out
  .progress__content
    position: absolute
    right: 0
    top: -22px
    font-size: 12px
    font-weight: bold
    letter-spacing: 0.8px
</style>