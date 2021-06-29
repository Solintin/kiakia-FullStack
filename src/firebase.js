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
const dbWeb = firebase.firestore().collection('Web').doc('Gas360-Web-Backend');
// const dbMobile = firebase.firestore().collection('Mobile');
// const auth = firebase.auth()


// collection references

const postsCollection = dbWeb.collection('posts')
const faqsCollection = dbWeb.collection('faqs')
const cookieCollection = dbWeb.collection('cookie')
const privacyCollection = dbWeb.collection('privacy')
const tosCollection = dbWeb.collection('tos')
const waitListCollection = dbWeb.collection('waitlist')
//User App Management
const users = firebase.firestore().collection('Mobile').doc('users');
const orders = firebase.firestore().collection('Mobile').doc('orders').collection("userOrders");


// export utils/refs
export {fbAccess,
  faqsCollection,
  cookieCollection,
  privacyCollection,
  tosCollection,
    postsCollection,
    waitListCollection,
    users,
    orders
}
