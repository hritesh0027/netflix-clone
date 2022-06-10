import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB3f2TWf4bTDBX-UfIyoTpuBh6EYg8VSYI",
  authDomain: "netflix-clone-hr0027.firebaseapp.com",
  projectId: "netflix-clone-hr0027",
  storageBucket: "netflix-clone-hr0027.appspot.com",
  messagingSenderId: "518441095757",
  appId: "1:518441095757:web:ad247ebf3b2e691b6d4204"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;