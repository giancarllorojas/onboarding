export default {
  signIn(state, user){
    state.user = user
    state.token = user.token

    this.app.$cookie.set('yak_token', state.token, {
      maxAge: 60 * 60 * 24 * 7
    })
    this.app.$axios.setToken(state.token)
  },

  signOut(state){
    state.user = null
    state.token = null

    this.app.$cookie.del('yak_token')
    this.app.$axios.setToken(false)
  }
}