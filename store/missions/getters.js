export default {
  currentSteps(state){
    if(!state.currentMission.steps || state.currentMission.steps.length === 0) return [
      {
        id: '1',
        title: 'This is a step',
        description: 'Small step description',
        totalActions: 1,
        active: true,
        completedActions: 0,
        icon: 'user-add',
        actionType: 'url',
        steps: []
      },
      {
        id: '2',
        title: 'A completed step',
        description: 'This is a completed step',
        totalActions: 1,
        completedActions: 1,
        icon: 'pen',
        actionType: 'callback',
        steps: []
      }
    ]

    return state.currentMission.steps
  },

  currentTitle(state){
    return !!state.currentMission.title ? state.currentMission.title : 'Get started with my product'
  },

  currentGreeting(state){
    return !!state.currentMission.greeting ? state.currentMission.greeting : '<p>This is the <b>Greeting</b> message.</p><p>Optional, but cool, right?</p>'
  },

  currentPrimaryColor(state){
    return !!state.currentMission.primaryColor ? state.currentMission.primaryColor : '#FF0043'
  },

  currentHeaderColor(state){
    return !!state.currentMission.headerColor ? state.currentMission.headerColor : '#FF0043'
  },

  currentTextHeaderColor(state){
    return !!state.currentMission.headerTextColor ? state.currentMission.headerTextColor : '#FFFFFF'
  }
}