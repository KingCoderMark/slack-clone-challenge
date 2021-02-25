import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBMKH37tnTdRzcACymo_3Myecu0e8V6a6Q",
    authDomain: "slack-clone-challenge-b94e0.firebaseapp.com",
    projectId: "slack-clone-challenge-b94e0",
    storageBucket: "slack-clone-challenge-b94e0.appspot.com",
    messagingSenderId: "502805326600",
    appId: "1:502805326600:web:d010dbbac82be0cf38dabd"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export default db;