import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD5NM4Amo9yqSKgWQBWk9b2SzvPikIFeug",
  authDomain: "attendance-app-d1a31.firebaseapp.com",
  databaseURL: "https://attendance-app-d1a31-default-rtdb.firebaseio.com",
  projectId: "attendance-app-d1a31",
  storageBucket: "attendance-app-d1a31.appspot.com",
  messagingSenderId: "686047046013",
  appId: "1:686047046013:web:633ed85ca11e116e114414"
};

firebase.initializeApp(firebaseConfig)
export default firebase.database()