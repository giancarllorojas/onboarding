<template>
  <div :class="{'bg-info': type === 'info'}" class="alert p-5 rounded-lg text-blue-800 flex">
    <div v-if="!hideIcon" class="text-blue-500 mr-2">
      <v-mdi name="mdiInformationOutline"/>
    </div>
    <div>
      <h3 class="font-bold text-lg">{{title}}</h3>
      <p class="m-0">
        <slot/>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    title: String,
    hideIcon: Boolean
  }
}
</script>

<style lang="sass" scoped>
.bg-info
  background-color: #E8F4FD
</style>