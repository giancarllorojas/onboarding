<template>
  <transition name="exit">
    <div v-if="visible" class="onboard__panel">
      <div :style="{'background-color': value.headerColor, 'color': value.headerTextColor}" class="onboard__head">
        {{value.title}}
      </div>
      <div class="onboard__body">
        <div class="onboard__greeting">
          <span class="text-md block pb-4" v-html="value.greeting">
          </span>
          <line-progress :color="value.primaryColor" :total="value.steps.length" :completed="completedTasks.length"/>
        </div>
        <tasks :active="currentActive" v-if="remainingTasks.length > 0" :tasks="remainingTasks" :color="value.primaryColor"/>
        <completed-tasks-component v-if="completedTasks.length > 0" :tasks="completedTasks" :primaryColor="value.primaryColor"/>
      </div>
    </div>
  </transition>
</template>

<script>
import Tasks from './Tasks'
import LineProgress from './LineProgress'
import CompletedTasksComponent from './CompletedTasks'

import { mapState, mapGetters } from 'vuex'

export default {
  props: {
    value: Object
  },

  data: function(){
    return {
      visible: true,
      loading: false,
      currentActive: null
    }
  },

  created(){
    this.visible = true

    this.$root.$on('hide', () => {
      this.visible = false
    })

    this.$root.$on('show', () => {
      this.visible = true
    })

    this.$root.$on('stepCompleted', (stepId) => {
      const step = this.tasks.find(m => m.id == stepId)

      if(step !== null){
        step.completedActions += 1

        if(this.remainingTasks.length === 0){
          this.visible = false
        }
      }
    })

    this.$root.$on('setMissionActive', (data) => {
      this.currentActive = data.id
    })

    if(this.remainingTasks.length > 0) this.currentActive = this.remainingTasks[0].id
  },

  computed: {
    completedTasks(){
      return this.value.steps.filter(m => m.totalActions === m.completedActions)
    },

    remainingTasks(){
      return this.value.steps.filter(m => m.totalActions !== m.completedActions)
    },
  },

  components: {
    Tasks,
    LineProgress,
    CompletedTasksComponent
  }
}
</script>

<style lang="sass">
@import url('https://css.gg/css')

.onboard__panel
  display: flex
  flex-direction: column
  position: relative
  align-self: flex-start
  background-color: white
  right: 0
  top: 0
  width: 400px
  max-width: 100%
  border-radius: 5px
  border: 1px solid #E9E1E1
  box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.1)
  .panel__preview
    position: absolute
    left: 24px
    top: 8px
    background-color: #FF5500
    border-radius: 8px
    @apply text-white font-bold px-5 text-xs
  .onboard__body
    overflow: auto
    max-height: calc(100vh - 70px)
  ::-webkit-scrollbar 
    width: 10px
  ::-webkit-scrollbar-track 
    background: #f1f1f1
  ::-webkit-scrollbar-thumb 
    background: #b8b8b8
  ::-webkit-scrollbar-thumb:hover 
    background: #a1a1a1

  .onboard__head
    border-bottom: 1px solid #D5D1D1
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    font-size: 22px
    padding: 24px
    font-weight: bold
    @apply text-white
  .onboard__greeting
    padding: 12px 24px
    margin-bottom: 24px
    span
      word-wrap: break-word

.exit-enter-active
  animation: exit .25s reverse ease-in-out
.exit-leave-active
  animation: exit .25s ease-in-out
@keyframes exit
  0%
    right: 0
  100%
    right: -400px
</style>