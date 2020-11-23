<template>
  <div class="text-field">
    <div class="text-field__container flex flex-col">
      
      <span class="text-field__label">
        {{label}}
      </span>
      <span class="text-gray-600">
        {{sublabel}}
      </span>
      <div class="text-field__inputcontainer">
        <div @click="$refs.input.focus()" v-if="!!icon" class="text-field__icon">
          <v-mdi :class="{'text-primary': focused}" :name="icon"></v-mdi>
        </div>
        <input ref="input" :class="{'text-field--hasvalue': !!value, 'text-field--hasicon': !!icon}" v-bind="$attrs" @keydown.enter="$emit('enter')" :value="value" @input="onInput" @focus="focused = true" @blur="focused = false" :type="type"/>
        <div v-if="!!$slots['append-left']" class="inputcontainer__leftslot">
          <slot name="append-left"/>
        </div>
      </div>
    </div>
    <div class="text-field__messages">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: () => 'text'
    },

    label: String,
    sublabel: String,

    value: {
      type: String,
      default: () => ''
    },
    
    icon: String
  },

  data: function(){
    return {
      focused: false,
      model: ''
    }
  },

  methods: {
    onInput(v){
      this.$emit('input', v.target.value)
    }
  }
}
</script>

<style lang="sass" scoped>
.text-field
  position: relative
  @apply rounded-lg outline-none
  .text-field__container
    input
      height: 42px
      transition: all 150ms ease-in-out
      padding-left: 42px
      font-weight: 500
      @apply border-2 w-full bg-gray-200 rounded-lg outline-none px-5

      &:hover
        @apply bg-gray-100
      &:focus
        @apply bg-gray-100 border-2 border-primary
    .text-field--hasvalue
      @apply bg-gray-100
    .text-field--hasicon
      @apply pl-12
    .text-field__label
      @apply font-bold
    .text-field__icon
      position: absolute
      left: 12px
      .mdi-icon
        transition: all 150ms ease-in-out
    .text-field__inputcontainer
      @apply flex items-center mt-1
      .inputcontainer__leftslot
        @apply ml-4
  .text-field__messages
    height: 16px
    width: 100%
</style>