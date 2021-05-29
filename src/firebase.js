import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


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
 const fbAccess =  firebase.initializeApp(firebaseConfig);





// utils
const db = firebase.firestore()
// const auth = firebase.auth()


// collection references

const postsCollection = db.collection('posts')
const faqsCollection = db.collection('faqs')
const cookieCollection = db.collection('cookie')
const privacyCollection = db.collection('privacy')
const tosCollection = db.collection('tos')
const waitListCollection = db.collection('waitlist')


// export utils/refs
export {fbAccess,
  faqsCollection,
  cookieCollection,
  privacyCollection,
  tosCollection,
    postsCollection,
    waitListCollection
}
