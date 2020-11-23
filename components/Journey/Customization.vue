<template>
  <div class="customization">
    <alert type="info" class="mb-4" hide-icon>
      Customize the widget look and feel.
    </alert>
    <accordion icon="mdiCogOutline" title="General">
      hello
    </accordion>
    <accordion icon="mdiInvertColors" title="Colors">
      <color-picker defaultColor="#FF0043" v-model="primaryColor" label="Primary color" placeholder="#FF0043"/>
      <color-picker defaultColor="#FF0043" v-model="headerColor" label="Header color" placeholder="#FF0043"/>
      <color-picker defaultColor="#FFFFFF" v-model="headerTextColor" label="Header text color" placeholder="#FFFFFF"/>
    </accordion>
    <accordion icon="mdiFormatText " title="Texts">
      <text-field label="Tasks title" placeholder="Next tasks"/>
    </accordion>

    

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

    primaryColor: {
      get(){
        return this.currentMission.primaryColor
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          primaryColor: v
        })
      },
    },

    headerColor: {
      get(){
        return this.currentMission.headerColor
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          headerColor: v
        })
      }
    },

    headerTextColor: {
      get(){
        return this.currentMission.headerTextColor
      },

      set(v){
        this.setCurrentMission({
          ...this.currentMission,
          headerTextColor: v
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.customization
  @apply mb-5
</style>