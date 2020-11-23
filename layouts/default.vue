<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      loaded: false
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
      this.loadStyles('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap'),
      new Promise(resolve => setTimeout(resolve, 1000))
    ])
    this.loaded = true
  }
}
</script>

<style lang="sass">

</style>
