
import firebase from 'firebase' ;
const FirebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAfbER9Ob_c6BDCKLsXOgve9Q-p91KBcc0",
    authDomain: "web-messager.firebaseapp.com",
    databaseURL: "https://web-messager.firebaseio.com",
    projectId: "web-messager",
    storageBucket: "web-messager.appspot.com",
    messagingSenderId: "287319364970",
    appId: "1:287319364970:web:cc6aacf8b4d705f20e4113",
    measurementId: "G-GFQCP9Y81M"
});

const configFirebase = FirebaseConfig.firestore();

export default configFirebase ;