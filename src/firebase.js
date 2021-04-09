import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'


 // Your web app's Firebase configuration
 const  firebaseConfig = {
    apiKey: "AIzaSyBEVkdDRVdzEPn6-6-lGRHOPbMcXSJwqRo",
    authDomain: "kiakia360-eb0b5.firebaseapp.com",
    projectId: "kiakia360-eb0b5",
    storageBucket: "kiakia360-eb0b5.appspot.com",
    messagingSenderId: "550754392383",
    appId: "1:550754392383:web:364affda325d63e8491b8a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);





// utils
const db = firebase.firestore()
// const auth = firebase.auth()


// collection references

const postsCollection = db.collection('posts')


// export utils/refs
export {
  postsCollection,
}



















