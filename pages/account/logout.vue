<template>
  <div class="logout min-h-screen min-w-screen">
    <loading-overlay :value="true"/>
  </div>
</template>

<script>
export default {
  async created(){
    await this.$store.commit('auth/signOut')

    this.$router.push('/')
  }
}
</script>

<style lang="sass" scoped>
.logout
  position: relative
</style>