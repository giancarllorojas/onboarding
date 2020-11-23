<template>
  <nav class="navbar">
    <nuxt-link to="/">
      <img class="navbar__logo" src="@/assets/images/logo.svg"/>
    </nuxt-link>
    <p class="text-gray-600 text-center">
      Engage & Retain your users
    </p>

    <hr class="my-8"/>
    <h5 class="font-bold text-gray-600 mb-4">Menu</h5>
    <ul class="navmenu">
      <li>
        <nuxt-link to="/journeys">
          <v-mdi size="24" class="nav__icon" name="mdiFileTree"></v-mdi>
          <span>
            Journeys
          </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/integration">
          <v-mdi size="22" class="nav__icon" name="mdiFileTree"></v-mdi>
          <span>
            Integration
          </span>
        </nuxt-link>
      </li>
    </ul>
    <h5 class="font-bold text-gray-600 my-4">Account</h5>
    <ul class="navmenu">
      <li>
        <nuxt-link to="/account/profile">
          <v-mdi size="24" class="nav__icon" name="mdiAccountOutline"></v-mdi>
          <span>
            Profile
          </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/account/logout">
          <v-mdi size="22" class="nav__icon" name="mdiLogoutVariant"></v-mdi>
          <span>
            Logout
          </span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.navbar
  width: 280px
  height: 100vh
  
  background-color: #F4F4F6
  @apply px-6
  .navbar__logo
    width: 150px
    margin: 0 auto
    @apply pt-8
  .navmenu
    li
      margin-bottom: 6px
      .nav__icon
        @apply ml-4 mr-3
      a
        border-left: 3px solid
        border-color: transparent
        height: 32px
        transition: all 200ms ease
        @apply flex items-center font-bold
      .nuxt-link-active
        @apply border-primary text-primary
</style>