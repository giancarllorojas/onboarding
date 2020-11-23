<template>
  <div v-if="value" class="loading-overlay text-primary flex items-center justify-center">
    <v-mdi size="62" class="btn__loading" name="mdi-loading"></v-mdi>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  }
}
</script>

<style lang="sass" scoped>
.loading-overlay
  position: absolute
  height: 100%
  width: 100%
  top: 0
  left: 0
  background-color: rgba(255,255,255,0.5)
  .btn__loading
    animation: loading 1s infinite linear

@keyframes loading
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
</style>