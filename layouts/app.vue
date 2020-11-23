<template>
  <div class="app flex">
    <nav-bar class="hidden sm:block"/>
    <div class="app__content sm:px-5 md:px-10 lg:px-12 py-5 flex-1 md:mr-5 lg:mr-6">
      <Nuxt />
    </div>
    <div v-if="showWidget" class="widget-menu hidden md:block md:pr-5 lg:pr-6 py-10">
      <widget :value="missionOptions"/>
    </div>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Panel'
import { mapGetters } from 'vuex'

export default {
  data: function(){
    return {
      loaded: false,
      showWidget: false
    }
  },

  watch: {
    $route(){
      this.showWidget = false
    }
  },

  methods: {
    loadStyles(src){
      return new Promise( resolve => {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.onload = function() {
          console.log('loaded', src)
          resolve()
        };
        link.href = src
        document.getElementsByTagName( "head" )[0].appendChild( link );
      })
    }
  },

  async mounted(){
    await Promise.all([
      this.loadStyles('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap'),
      new Promise(resolve => setTimeout(resolve, 1000))
    ])
    this.loaded = true
  },

  created(){
    this.$root.$on('showWidget', () => this.showWidget = true)
  },

  computed: {
    ...mapGetters({
      title: 'missions/currentTitle'
    }),
    missionOptions(){
      return {
        title: this.title,
        greeting: this.$store.getters['missions/currentGreeting'],
        primaryColor: this.$store.getters['missions/currentPrimaryColor'],
        headerColor: this.$store.getters['missions/currentHeaderColor'],
        headerTextColor: this.$store.getters['missions/currentTextHeaderColor'],
        steps: this.$store.getters['missions/currentSteps']
      }
    }
  },

  components: {
    Widget
  }
}
</script>

<style lang="sass">
@import url('https://css.gg/css');


html
  @apply text-gray-800
  font-family: 'Inter', sans-serif
  max-width: 100vw
  overflow-x: none
  background-color: #F4F4F6
  --text-opacity: 1
  --scrollbarBG: #e6e6e6
  --thumbBG: #b5b5b5

.app__content
  background-color: #fff
  max-height: 95vh
  margin-top: 2.5vh
  transition: max-height 1500ms ease
  @apply mb-auto shadow-md rounded overflow-auto
.app__content::-webkit-scrollbar
  width: 11px
.app__content
  scrollbar-width: thin
  scrollbar-color: var(--thumbBG) var(--scrollbarBG)
.app__content::-webkit-scrollbar-track
  background: var(--scrollbarBG)
.app__content::-webkit-scrollbar-thumb
  background-color: var(--thumbBG)
  border-radius: 6px
  border: 3px solid var(--scrollbarBG)
.widget-menu
  background-color: #F4F4F6
</style>
