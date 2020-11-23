<template>
  <div class="add">
    <div class="add__header">
      <app-title>
        Creating a Journey
        <template #buttons>
          <btn color="#FF0043">
            Save changes
          </btn>

        </template>
      </app-title>
      <tabs v-model="tab" :tabs="tabs"/>
    </div>
    <div class="tabs__content overflow-auto">
      <keep-alive>
        <general v-if="tab == 0"/>
        <steps v-if="tab == 1"/>
        <customization v-if="tab == 2"/>
      </keep-alive>
    </div>
    <div class="add__btns flex pt-2">
      <btn @click="tab -= 1" v-if="tab > 0" color="#EDF2F7" font-color="#2D3748">Back</btn>
      <btn @click="tab += 1" class="ml-auto" v-if="tab < 3" color="#EDF2F7" font-color="#2D3748">Next</btn>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
import Widget from '@/components/Widget/Panel'
import General from '@/components/Journey/General'
import Customization from '@/components/Journey/Customization'
import Steps from '@/components/Journey/Steps'

export default {
  middleware: 'requireAuth',
  layout: 'app',

  data: function(){
    return {
      tab: 1,
      tabs: [
        {
          name: 'General',
          icon: 'mdiCogOutline'
        },
        {
          name: 'Steps',
          icon: 'mdiFormatListChecks'
        },
        {
          name: 'Customization',
          icon: 'mdiShapeOutline '
        },
        {
          name: 'Setup',
          icon: 'mdiPowerPlugOutline'
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      steps: 'steps/data',
      pending: 'steps/pending'
    }),

    btnLabel(){
      return 'Add new mission'
    }
  },

  methods: {
    ...mapMutations({
      add: 'steps/add'
    }),
    ...mapActions({

    }),
    addStep(){
      
    }
  },

  beforeCreate(){
    this.$root.$emit('showWidget')
  },

  components: {
    Widget,
    General,
    Customization
  }
}
</script>

<style lang="sass" scoped>
.add
  @apply pb-20
  .add__header
    position: sticky
    top: -20px
    margin-top: -20px
    padding-top: 20px
    z-index: 10
    @apply bg-white
</style>
