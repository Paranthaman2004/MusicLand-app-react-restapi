import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBTIqGMtIPTgJiq8Za5haty28KEK7xTxXQ",
  authDomain: "musicplayer-2004.firebaseapp.com",
  projectId: "musicplayer-2004",
  storageBucket: "musicplayer-2004.appspot.com",
  messagingSenderId: "919263059455",
  appId: "1:919263059455:web:b6e57dd5db6576713edbca",
  measurementId: "G-XS1JV0QYGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {app,auth,provider}