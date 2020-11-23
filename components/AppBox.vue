<template>
  <div class="app-box">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.app-box
  box-shadow: 3px 0px 8px 0px rgba(0,0,0,0.03)
  position: relative
  @apply bg-white w-full p-5 rounded-lg
</style>