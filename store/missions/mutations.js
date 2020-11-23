import Vue from 'vue'

export default {
  setCurrentMission(state, mission){
    Vue.set(state, 'currentMission', mission)
  },

  addStep(state, step){
    if(!!state.currentMission && state.currentMission !== null){
      state.currentMission.steps.push({
        title: 'A new step',
        description: 'This is what this step is for'
      })
    }
  },

  delStep(state, stepindex){
    if(!!state.currentMission && state.currentMission !== null){
      Vue.delete(state.currentMission.steps, stepindex)
    }
  },

  setStep(state, { index, data }){
    if(!!state.currentMission && state.currentMission !== null){
      Vue.set(state.currentMission.steps, index, data)
    }
  },

  changePos(state, { index, change }){
    if(!!state.currentMission && state.currentMission !== null){
      Vue.set(state.currentMission.steps, index, data)
    }
  }
}