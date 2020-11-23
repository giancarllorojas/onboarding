<template>
  <div class="accordion" :class="{'accordion--open': isOpen}">
    <div @click="doSwitch" class="accordion__header select-none">
      <div v-if="!!icon" class="header__icon mr-1">
        <v-mdi size="18" :name="icon"/>
      </div>
      <div class="header__title">
        {{title}}
      </div>
      <div class="header__collapse">
        <v-mdi name="mdiChevronDown"/>
      </div>
    </div>
    <div v-if="isOpen" class="accordion__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String
  },

  data: function(){
    return {
      isOpen: false
    }
  },

  methods: {
    doSwitch(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="sass" scoped>
.accordion
  border: 1px solid #e2e8f0
  border-radius: 5px
  @apply bg-white mb-2 shadow-sm
  .accordion__content
    border-top: 1px solid #e2e8f0
    @apply p-4
  .accordion__header
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    transition: all 150ms ease
    @apply flex py-2 px-4 cursor-pointer items-center
    .header__title
      @apply font-bold
    .header__collapse
      transition: all 200ms ease
      @apply ml-auto
    &:hover
      @apply bg-gray-100 text-primary
.accordion--open
  .accordion__header
    .header__collapse
      transform: rotate(180deg)
</style>