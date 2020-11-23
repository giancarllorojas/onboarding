export default {
  data(state){
    return state.steps
  },
  pending(state){
    const p = state.steps.find(s => !!s.pending) 
    return !!p && p !== null
  }
}