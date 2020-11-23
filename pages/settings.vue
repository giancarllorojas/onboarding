<template>
  <div class="app">
    <h1 class="text-primary text-3xl font-bold mb-2">
      Settings
    </h1>
    <text-field label="Title" placeholder="Get started with My Product"/>
    <editor label="Greeting"/>
    <text-field label="Brand color" placeholder="#FF0043"/>
    <loading-overlay :value="loading"/>
    <btn :disabled="loading" @click="save" color="#FF0043">
      Save settings
    </btn>
  </div>
</template>

<script>
export default {
  middleware: 'requireAuth',
  layout: 'app',

  data: function(){
    return {
      loading: false
    }
  },

  methods: {
    async save(){
      this.loading = true
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
