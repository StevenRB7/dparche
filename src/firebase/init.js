
/* eslint-disable */
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD3A_gRwp7S5HDnUUl6swPtA5KNG8oC5w0",
  authDomain: "deparche-51e93.firebaseapp.com",
  projectId: "deparche-51e93",
  storageBucket: "deparche-51e93.appspot.com",
  messagingSenderId: "1033907722426",
  appId: "1:1033907722426:web:3a2534338c5b2ed8548a83",
}
const app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()

export {
  firebase, db
}
