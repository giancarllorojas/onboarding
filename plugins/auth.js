export default async (context) => {
  const {store, app: { $axios }} = context
  
  if(store.getters['auth/currentUser'] !== null){
    $axios.setToken(store.getters['auth/currentUser'].token)
  }

  if(process.env.NODE_ENV === 'production'){
    $axios.setBaseURL('https://api.yak.dev')
  }else{
    $axios.setBaseURL('http://localhost:8000')
  }

  await store.dispatch('nuxtClientInit', context)
}