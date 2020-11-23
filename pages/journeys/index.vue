<template>
  <div class="app">
    <h1 class="text-primary text-3xl font-bold mb-2">
      Journeys
    </h1>
    <btn @click="$router.push('/journeys/add')" color="#FF0043">
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
      return 'Create a Journey'
    }
  },

  methods: {
    ...mapMutations({
      add: 'steps/add'
    }),
    ...mapActions({

    })
  }
}
</script>

<style lang="sass" scoped>

</style>
