import firebase from 'firebase'
import 'firebase/firestore'
import { FIREBASE } from '../config'

const app = firebase.initializeApp(FIREBASE)

const db = app.firestore()

const settings = {/* your settings... */ timestampsInSnapshots: true }
db.settings(settings)

export default db
