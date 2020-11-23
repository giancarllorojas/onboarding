<template>
  <div v-click-outside="close" class="popover">
    <div @click="switchState" class="popover__activator">
      <slot name="activator"/>
    </div>
    <div :style="contentStyle" v-if="value" class="popover__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },

  data: function(){
    return {
      
    }
  },

  methods: {
    switchState(){
      this.$emit('input', !this.value)
    },

    close(){
      this.$emit('input', false)
    }
  },

  computed: {
    contentStyle(){
      const left = 0
      return {
        'right': `${left}px`
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.popover
  @apply relative
  .popover__content
    z-index: 10
    @apply absolute bg-white p-5 rounded shadow-2xl mt-2 border-2
</style>