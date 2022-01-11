import firebase from 'firebase'
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyB5i_D7iCD6lL_91t5BolPee17ivpuSpTE",
  authDomain: "complaint-forum-b7ea3.firebaseapp.com",
  projectId: "complaint-forum-b7ea3",
  storageBucket: "complaint-forum-b7ea3.appspot.com",
  messagingSenderId: "642071775535",
  appId: "1:642071775535:web:e5fcc2387c7223043139da"
};
  
  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

