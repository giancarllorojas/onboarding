<template>
  <div>
    <auth-template title="Create an account">
      <text-field icon="mdiAccountOutline" @enter="signUp" v-model="values.fullname" label="Name"/>
      <text-field icon="mdiEmailOutline" @enter="signUp" v-model="values.email" label="E-mail"/>
      <text-field icon="mdiFingerprint" @enter="signUp" v-model="values.password" type="password" label="Password"/>

      <div class="mt-5 signin__actions flex justify-end">
        <btn block @click="signUp" color="#FF0043">
          Create account 
        </btn>
      </div>
      <hr class="my-5"/>
      <div class="flex justify-center">
        <nuxt-link class="text-primary font-bold" to="/signin">
          Already have an account? Sign in
        </nuxt-link>
      </div>
      <loading-overlay :value="loading"/>
    </auth-template>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: function(){
    return {
      loading: false,
      values: {
        name: '',
        fullname: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapMutations({
      signIn: 'auth/signIn'
    }),

    async signUp(){
      this.loading = true
      try{
        const r = await this.$axios.post('/users/add', this.values)

        this.signIn(r.data)
        this.$router.push('/')
      }catch(e){
        console.log(e)
        this.$toast.error(`An error occurred when trying to create your account. `)
      }
      this.loading = false
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
