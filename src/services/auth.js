import Firebase from 'firebase'


const provider = new Firebase.auth.GoogleAuthProvider()
provider.addScope(
  [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ].join(',')
)

export const signInWithEmailAndPassword = async (user) => Firebase.auth().signInWithEmailAndPassword(user.email, user.password)

export const signInWithProvider = async () => Firebase.auth().signInWithPopup(provider)

export const signOut = async () => Firebase.auth().signOut()

export const currentUser = () => Firebase.auth().currentUser

export const linkWithPopup = async () => currentUser().linkWithPopup(provider)


export const getCurrentUser = () => {
  const authUser = currentUser()
  if (authUser) {
    return Promise.resolve(authUser)
  }

  return new Promise((resolve, reject) => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user)
      } else {
        reject('No authenticated user found')
      }
    })
  })
}
