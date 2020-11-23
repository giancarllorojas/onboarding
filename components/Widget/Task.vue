<template>
  <div @click="onTaskClick" :class="{'onboard__task--complete': complete, 'onboard__task--active': active}" class="onboard__task">
    <div class="task__head">
      <div :style="iconStyle" class="task__icon">
        <i v-if="!complete" :class="`task__gg gg-${data.icon}`"></i>
        <i v-else class="gg-check text-green-500"></i>
      </div>
      <div class="task__body">
        <h3 :style="titleStyle">
          {{data.title}}
        </h3>
        <span :style="{'text-decoration': complete ? 'line-through': 'none'}">
          {{data.description}}
        </span>
      </div>
    </div>
    <div v-if="active" class="task__content">
      <div class="content__texts">
        <p>
          Hello this is a guide.
        </p>
        <p>Images, videos, etc goes here</p>
      </div>
      <div class="content__actions">
        <btn v-if="false" type="text" class="btn__prev" :color="color">Back</btn>
        <btn class="btn__next" :color="color">Next</btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    data: Object,
    complete: Boolean,
    active: Boolean
  },

  methods: {
    onTaskClick(){
      if(!this.active){
        this.$root.$emit('setTaskActive', this.data)
      }
    }
  },

  computed: {
    iconStyle(){
      return {
        'background-color': this.complete ? '#ECECEC' : this.color,
        'color': !this.active ? 'white' : this.color
      }
    },

    titleStyle(){
      return {
        'color': this.complete ? '#949494' : this.color,
        'text-decoration': this.complete ? 'line-through' : 'none'
      }
    }
  },

  components: {
    
  }
}
</script>

<style lang="sass" scoped>
.onboard__task
  box-shadow: 0px 3px 4px 0px rgba(0,0,0,0.05)
  padding: 16px
  border-radius: 8px
  border: 1px solid #E9E1E1
  transition: all 150ms ease-in
  margin-bottom: 12px
  .task__head
    display: flex
    align-self: flex-start
  .task__icon
    color: white
    display: flex
    justify-content: center
    align-items: center
    width: 40px
    height: 40px
    border-radius: 100%
    margin-right: 12px
  .task__body
    h3
      margin: 0
      font-size: 1.17em
      font-weight: bold
    span
      color: #8D8989
  &:hover
    background-color: #f5f5f5
    cursor: pointer

.onboard__task--complete
  i
    color: #00C853
    font-size: 32px
  .gg-check
    --ggs: 1.8
.onboard__task--active
  .task__content
    margin-top: 16px
    border-top: 1px solid #E9E1E1
    .content__actions
      display: flex
      padding: 12px 16px
      margin: 0 -16px
      margin-bottom: -16px
      margin-top: 32px
      background-color: #F8F8F8
      .btn__next
        margin-left: auto
  .task__icon
    width: 25px
    height: 25px
    background-color: transparent !important
    .task__gg
      --ggs: 1
    
  &:hover
    background-color: white
    cursor: default
</style>