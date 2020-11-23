export const actions = {
  async nuxtClientInit({ dispatch, commit }, { app, redirect }){
    const token = this.app.$cookie.get('yak_token')
    
    if(process.env.NODE_ENV === 'production'){
      this.app.$axios.setBaseURL('https://api.yak.dev')
    }

    const user = await dispatch('auth/reAuth', token)

    if(!!user && user !== null){
      commit('auth/signIn', user)
    }
  }
}