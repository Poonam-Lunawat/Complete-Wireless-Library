
import * as firebase from 'firebase';
//import {firebase} from '@firebase/app';
//require('@firebase/firestore')
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyCNMgtvnYKn0SFioQ8T41HGdCigOHjcwEs",
  authDomain: "wily-new-e3f5e.firebaseapp.com",
  projectId: "wily-new-e3f5e",
  storageBucket: "wily-new-e3f5e.appspot.com",
  messagingSenderId: "914008716078",
  appId: "1:914008716078:web:810868cd09d0244b01c0bf"
};
  // Initialize Firebase
  if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();