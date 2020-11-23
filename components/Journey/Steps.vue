<template>
  <div class="steps">
    <step @close="stepOpen = -1" :step="step" @input="stepOpen = i" :value="stepOpen === i" v-for="(step, i) in steps" :key="i"/>
    <div @click="addStep" class="steps__add">
      <h4 class="font-bold text-xl mr-4">
        <v-mdi name="mdiShapeRectanglePlus"/> Add step
      </h4>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  data: function(){
    return {
      stepOpen: -1
    }
  },
  methods: {
    ...mapMutations({
      addStep: 'missions/addStep'
    })
  },

  computed: {
    ...mapState({
      steps: state => state.missions.currentMission.steps
    })
  }
}
</script>

<style lang="sass" scoped>
.steps
  @apply mb-5
  .steps__add
    border: 1px dashed #e2e8f0
    transition: all 150ms ease
    @apply p-4 flex justify-center items-center cursor-pointer select-none
    &:hover
      @apply bg-gray-100 text-primary
</style>