// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBYMbyUDz5b6Iu-XHWR9kzBCQzyRuQqfTY",
    authDomain: "to-do-list-react-1411c.firebaseapp.com",
    projectId: "to-do-list-react-1411c",
    storageBucket: "to-do-list-react-1411c.appspot.com",
    messagingSenderId: "244701184572",
    appId: "1:244701184572:web:147b1629a8abfa33bdf939",
    measurementId: "G-M2V02H9WM7"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  // const auth = firebase.auth();
  export { db };