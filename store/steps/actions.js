export default {
  save({commit}, stepData){
  /*
    TODO: update Step on database
  */
    if(stepData.id === null){
      commit('add', stepData)
    }else{
      commit('update', stepData)
    }
    
  },
  delete({commit}, stepData){
    /*
      TODO: delete Step on database
    */
   commit('delete', stepData)
  }
}