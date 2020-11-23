<template>
  <div class="step">
    <div class="step__header">
      <div class="flex items-center">
        <div>
          <h4 class="text-primary font-bold text-xl mr-4">
            {{step.title}}
          </h4>
          <p class="m-0 text-gray-600">
            {{step.description}}
          </p>
        </div>
        <div class="step__actions flex justify-end items-center">
          <div v-if="!value" class="flex items-center">
            <btn class="actions__btn" type="icon">
              <v-mdi class="actions__icon" name="mdiChevronUp"/>
            </btn>
            <btn class="actions__btn" type="icon">
              <v-mdi class="actions__icon" name="mdiChevronDown"/>
            </btn>
            <btn @click="$emit('input', false)" class="actions__btn" type="icon">
              <v-mdi class="actions__icon" name="mdiFolderEditOutline"/>
            </btn>
          </div>
          
          <btn color="#EDF2F7" font-color="#2D3748" v-if="!!value" @click="$emit('close')" class="actions__btn mr-2 px-2">
            Cancel
          </btn>
          <btn color="#FF0043" v-if="!!value" @click="$emit('close')" class="actions__btn px-2">
            Done
          </btn>
          
        </div>
      </div>

    </div>
    <div class="step__content" v-if="value">
      <text-field label="Identifier" sublabel="A ID that identifies this step" placeholder="MY_STEP"/>
      <text-field label="Title" placeholder="My step title"/>
      <text-field label="Description" placeholder="Step small description"/>
      <hr class="my-2"/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    step: Object
  },

  data: function(){
    return {
      
    }
  },

  methods: {
    
  }
}
</script>

<style lang="sass" scoped>
.step
  border: 1px solid #e2e8f0
  border-radius: 5px
  @apply mb-4 shadow-sm
  .step__header
    border-top-left-radius: 5px
    border-top-right-radius: 5px
    @apply flex flex-col py-2 px-4 justify-center
    .step__actions
      @apply ml-auto
      .actions__btn
        @apply ml-1
        .actions__icon
          transition: all 100ms ease-in
        &:hover
          @apply text-primary
  .step__content
    border-top: 1px solid #e2e8f0
    @apply p-4
</style>