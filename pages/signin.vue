<template>
  <div>
    <auth-template title="Sign in">
      <text-field @enter="signIn" v-model="values.email" icon="mdiEmailOutline" label="E-mail"/>
      <text-field type="password" @enter="signIn" v-model="values.password" icon="mdiFingerprint" label="Password"/>

      <div class="mt-5 signin__actions flex justify-end">
        <btn block @click="signIn" color="#FF0043">Sign in</btn>
      </div>
      <hr class="my-5"/>
      <div class="flex justify-center">
        <nuxt-link class="text-primary font-bold" to="/signup">
          Don't have an account? Create one
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
        email: '',
        password: ''
      }
    }
  },

  methods: {
    ...mapMutations({
      signInMutation: 'auth/signIn'
    }),

  //   async signIn(){
  //     this.loading = true
  //     try{
  //       const r = await this.$axios.post('/users/login/local', this.values)

  //       this.signInMutation(r.data)
  //       this.$router.push('/')
  //     }catch(e){
  //       console.log(e)
  //       this.$toast.error(`An error occurred while trying to Sign In.`)
  //     }
  //     this.loading = false
  //   }
  // },

    async signIn(){
      this.loading = true
      setTimeout(() => {
        this.signInMutation({
          fullname: 'Giancarllo Rojas',
          email: 'giancarllor@gmail.com'
        })
        this.loading = false
        this.$router.push('/')
      }, 1500)
      
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
