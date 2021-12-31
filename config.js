import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAamlV1dUEzNA_GKmnUAPxWCgbhSOYkJrE",
  authDomain: "let-s-ride-32a2e.firebaseapp.com",
  projectId: "let-s-ride-32a2e",
  storageBucket: "let-s-ride-32a2e.appspot.com",
  messagingSenderId: "916586811788",
  appId: "1:916586811788:web:62202e63080f3a9397c6a9"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

