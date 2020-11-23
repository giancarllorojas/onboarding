export default {
  isLoggedIn(state){
    return state.token !== null
  },

  currentUser(state){
    return state.user
  }
}