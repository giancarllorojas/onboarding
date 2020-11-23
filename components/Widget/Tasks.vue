<template>
  <div class="onboard__tasks">
    <h4 class="font-bold mb-4">Next steps</h4>
    <task :active="active === task.id" :data="task" :color="color" v-for="task in tasks" :key="task.id"/>
  </div>
</template>

<script>
import Task from './Task'

export default {
  props: {
    tasks: Array,
    color: String,
    active: String
  },

  components: {
    Task
  }
}
</script>

<style lang="sass" scoped>
.onboard__tasks
  padding: 0 24px
</style>