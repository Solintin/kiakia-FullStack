import firebase from 'firebase/app'
// import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBl6ETkWrG8yKavRxB_9CjkMsGkJkOr2Gs",
  authDomain: "gas360-6aedd.firebaseapp.com",
  projectId: "gas360-6aedd",
  storageBucket: "gas360-6aedd.appspot.com",
  messagingSenderId: "566916684999",
  appId: "1:566916684999:web:63d0808dc440fce3da32e2",
  measurementId: "G-8N49YD9ZSS"
};


// Initialize Firebase
const fbAccess =  firebase.initializeApp(firebaseConfig);





// utils
const db = firebase.firestore().collection('Web').doc('Gas360-Web-Backend')
// const auth = firebase.auth()


// collection references

const postsCollection = db.collection('posts')
const faqsCollection = db.collection('faqs')
const cookieCollection = db.collection('cookie')
const privacyCollection = db.collection('privacy')
const tosCollection = db.collection('tos')
const waitListCollection = db.collection('waitlist')
//User App Management
const users = firebase.firestore().collection('users')
const cards = firebase.firestore().collection('cards')
const orders = firebase.firestore().collection('orders')


// export utils/refs
export {fbAccess,
  faqsCollection,
  cookieCollection,
  privacyCollection,
  tosCollection,
    postsCollection,
    waitListCollection,
    users,
    cards,
    orders
}
