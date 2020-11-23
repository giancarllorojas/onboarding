<template>
  <label class="inline-flex items-center mt-3">
    <input v-bind="$attrs" type="checkbox" class="form-checkbox h-5 w-5" checked><span class="ml-2 text-gray-700 font-bold">{{label}}</span>
  </label>
</template>

<script>
export default {
  props: {
    label: String
  }
}
</script>

<style lang="sass" scoped>
</style>