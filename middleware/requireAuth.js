export default function ({ store, redirect }) {
  // If the user is not authenticated
  const user = store.getters['auth/currentUser']
  if (!user || user === null) {
    return redirect('/signin')
  }
}