<template>
  <div class="color-picker">
    <text-field v-model="color" v-bind="$attrs">
      <template #append-left>
        <popover v-model="isOpen">
          <template #activator>
            <div :style="{'background-color': color}" class="color-picker__btn">
              <i class="gg-color-picker"></i>
            </div>
          </template>
          <div>
            <picker class="picker" v-model="color"/>
          </div>
        </popover>
        
      </template>
    </text-field>
  </div>
</template>

<script>
import { Swatches } from 'vue-color'

export default {
  props: {
    value: String,
    defaultColor: ''
  },

  data: function(){
    return {
      isOpen: false
    }
  },

  computed: {
    color: {
      get(){
        return !!this.value ? this.value : this.defaultColor
      },
      
      set(v){
        if(typeof v === 'object' && v !== null){
          v = v.hex
        }
        this.$emit('input', v)
      }
    }
  },
  
  components: {
    'picker': Swatches
  }
}
</script>

<style lang="sass">
.color-picker
  .color-picker__btn
    width: 40px
    height: 40px
    border-color: #E2E8F0
    @apply border-2 rounded-md cursor-pointer flex items-center justify-center text-white
    .gg-color-picker
      --ggs: 0.8
  .picker
    box-shadow: none !important
    padding: 0 !important
    .vc-swatches-box
      padding: 0 !important
      
  .picker::-webkit-scrollbar
    width: 11px
  .picker
    scrollbar-width: thin
    scrollbar-color: var(--thumbBG) var(--scrollbarBG)
  .picker::-webkit-scrollbar-track
    background: var(--scrollbarBG)
  .picker::-webkit-scrollbar-thumb
    background-color: var(--thumbBG)
    border-radius: 6px
    border: 3px solid var(--scrollbarBG)
</style>