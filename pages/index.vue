<template>
  <div class="app">
    <h1 class="text-primary text-3xl font-bold mb-2">
      Steps
    </h1>
    
    <btn @click="addStep" color="#FF0043">
      {{btnLabel}}
    </btn>
  </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  middleware: 'requireAuth',
  layout: 'app',

  data: function(){
    return {
      
    }
  },

  computed: {
    ...mapGetters({
      steps: 'steps/data',
      pending: 'steps/pending'
    }),

    btnLabel(){
      return this.pending ? 'Save step' : 'Add new step'
    }
  },

  methods: {
    ...mapMutations({
      add: 'steps/add'
    }),
    ...mapActions({

    }),
    addStep(){
      this.add({
        id: '',
        title: '',
        description: '',
        icon: '',
        hasGuide: true,
        actionType: '', // 'url', 'callback'
        pending: true,
        editing: true
      })
    }
  },

  async asyncData({ redirect }){
    redirect('/journeys')
  }
}
</script>

<style lang="sass" scoped>

</style>
