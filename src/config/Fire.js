import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAUJyckRg47f7Qv6K_Ixx-fHpEkVgw_qmQ",
  authDomain: "e-fining-sep.firebaseapp.com",
  databaseURL: "https://e-fining-sep.firebaseio.com",
  projectId: "e-fining-sep",
  storageBucket: "e-fining-sep.appspot.com",
  messagingSenderId: "511891416337",
  appId: "1:511891416337:web:42c215c79152d6f2ca58b0",
  measurementId: "G-XM779TVR7Z"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase;
