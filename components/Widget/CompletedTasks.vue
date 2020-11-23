<template>
  <div class="onboard__tasks">
    <h4 class="font-bold mb-4">Completed steps</h4>
    <task complete :data="task" :color="color" v-for="task in tasks" :key="task.id"/>
  </div>
</template>

<script>
import Task from './Task'

export default {
  props: {
    tasks: Array,
    color: String
  },

  components: {
    Task
  }
}
</script>

<style lang="sass" scoped>
.onboard__tasks
  padding: 24px
</style>