<template>
  <div class="authtemplate">
    <div class="authtemplate__head">
      <img src="@/assets/images/logo.svg"/>
      <h1>
        {{title}}
      </h1>
    </div>
    <div class="authtemplate__body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="sass" scoped>
.authtemplate
  background-color: rgba(255, 213, 179, 0.75)
  @apply min-h-screen min-w-full flex flex-col items-center justify-center p-5
  .authtemplate__head
    @apply flex flex-col items-center
    h1
      @apply text-4xl font-bold text-gray-900 mt-4
    img
      height: 80px
  .authtemplate__body
    width: 400px
    position: relative
    @apply rounded bg-white p-5 max-w-full my-3
</style>