<template>
  <div class="general">
    <text-field v-model="identifier" label="Identifier" sublabel="An ID to identifies this Journey" placeholder="MY_JOURNEY"/>
    <text-field v-model="description"  sublabel="A small description of the Journey" label="Description" placeholder="My user Journey"/>
    <text-field v-model="title" label="Title" placeholder="Get started with My Product"/>
    <editor placeholder="This is the Greeting message" v-model="greeting" label="Greeting"/>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      setCurrentMission: 'missions/setCurrentMission'
    })
  },

  computed: {
    ...mapState({
      currentMission: state => state.missions.currentMission,
    }),

    title: {
      get(){
        return this.currentMission.title
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          title: v
        })
      }
    },

    identifier: {
      get(){
        return this.currentMission.identifier
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          identifier: v
        })
      }
    },

    greeting: {
      get(){
        return this.currentMission.greeting
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          greeting: v
        })
      }
    },

    primaryColor: {
      get(){
        return this.currentMission.primaryColor
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          primaryColor: v
        })
      }
    },

    description: {
      get(){
        return this.currentMission.description
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          description: v
        })
      }
    },
  }
}
</script>

<style lang="sass" scoped>
.general
  @apply mb-5
</style>