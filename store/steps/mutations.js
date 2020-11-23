import Vue from 'vue'

export default {
  add(state, stepData){
    const hasPending = state.steps.find(s => s.pending === true)

    if(hasPending && stepData.pending) return
    
    state.steps.push(stepData)
  },
  update(state, stepData){
    const stepIndex = state.steps.findIndex(s => s.id === stepData.id)

    if(stepIndex > -1){
      Vue.$set(state.steps, stepIndex, stepData)
    }
  },
  delete(state, stepIndex){
    if(stepIndex > -1){
      Vue.$delete(state.steps, stepIndex)
    }
  },
  up(state, stepData){

  },
  down(state, stepData){

  }
}