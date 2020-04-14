import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-DnI70bWyEZONdnP_dT92I_df9GFdUXE",
  authDomain: "redettes-app.firebaseapp.com",
  databaseURL: "https://redettes-app.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
