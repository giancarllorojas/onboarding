<template>
  <div class="app-title">
    <div class="app-title__content flex items-center flex-wrap">
      <h1 class="text-primary text-2xl font-bold leading-tight">
        <slot/>
      </h1>
      <div class="ml-auto">
        <slot name="buttons"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
.app-title
  @apply mb-4
  .app-title__content
    @apply pb-2
</style>