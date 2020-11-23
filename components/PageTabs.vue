<template>
  <div class="tabs">
    <div ref="container" class="tabs__container">
      <div @click="$emit('input', i)" :class="{'tab--active': value == i}" v-for="(t,i) in tabs" :key="i" class="tab">
        <span class="flex items-center">
          <v-mdi size="18" v-if="!!t.icon" class="tab__icon mr-1" :name="t.icon"/>
          <span>{{t.name}}</span>
        </span>
      </div>
    </div>
    <div :style="sliderStyle" class="tabs__slider"></div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: () => 0
    },
    tabs: Array
  },

  data: function(){
    return {
      sliderStyle: {
        width: 0,
        left: 0
      }
    }
  },

  watch: {
    value(){
      this.genSliderStyle()
    }
  },

  mounted(){
    this.genSliderStyle()
  },

  methods: {
    genSliderStyle(){
      if(this.value > -1 && !!this.$refs.container){
        const tabEl = this.$refs.container.children[this.value]

        this.sliderStyle = {
          'width': tabEl.offsetWidth + 'px',
          'left': tabEl.offsetLeft + 'px'
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.tabs
  border-bottom: 1px solid #e2e8f0
  position: relative
  @apply mb-6 select-none max-w-full
  .tabs__container
    position: relative
    @apply flex max-w-full overflow-x-auto
    .tab
      cursor: pointer
      height: 36px
      @apply mr-6 font-bold text-gray-600 flex items-start
      .tab__icon
        margin-left: -2px
    .tab--active
      @apply text-primary
  .tabs__slider
    height: 3px
    position: absolute
    transition: all 200ms ease-out
    @apply bg-primary
</style>