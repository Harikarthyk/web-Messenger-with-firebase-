
import firebase from 'firebase' ;
const FirebaseConfig = firebase.initializeApp({
//     YOUR FIREBASE CONFIG API 
});

const configFirebase = FirebaseConfig.firestore();

export default configFirebase ;
