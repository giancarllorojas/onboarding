<template>
  <div class="app">
    <h1 class="text-primary text-3xl font-bold mb-2">
      Profile
    </h1>
    <text-field label="Name"/>
    <text-field label="E-mail"/>
    <text-field label="Password"/>
    <btn color="#FF0043">Update profile</btn>
  </div>
</template>

<script>
export default {
  middleware: 'requireAuth',

  layout: 'app'
}
</script>

<style lang="sass" scoped>

</style>
