export default {
  async reAuth({ commit }, token){
    if(!!token){
      try{
        const res = await this.app.$axios.post(`/users/reauth`, {
          token: token
        })
        const user = res.data
        return user
      }catch(e){
        console.log('reauth', e)
        return false
      }
    }
  }
}