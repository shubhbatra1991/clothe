import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC_fud_yCjxMn9h5BdZOjNG53MKMnnTSsQ",
    authDomain: "clothing-db-4bbd3.firebaseapp.com",
    projectId: "clothing-db-4bbd3",
    storageBucket: "clothing-db-4bbd3.appspot.com",
    messagingSenderId: "972183047493",
    appId: "1:972183047493:web:885ca70a1bbce1b878c22c"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

