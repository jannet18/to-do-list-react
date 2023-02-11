// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAckasvUpqnF4zCJfwZlDVvqyzUNZpvB5o",
  authDomain: "todos-react-49318.firebaseapp.com",
  projectId: "todos-react-49318",
  storageBucket: "todos-react-49318.appspot.com",
  messagingSenderId: "629732386661",
  appId: "1:629732386661:web:4a8ad130f289d922f6e38c",
  measurementId: "G-EF6N0JJK7R"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  // const auth = firebase.auth();
  export { db };