// Your web app's Firebase configuration
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyD3BIFxCv3CXqyV6QvdkCnB9sJc8ATwapY',
  authDomain: 'avian-branch-269209.firebaseapp.com',
  databaseURL: 'https://avian-branch-269209.firebaseio.com',
  projectId: 'avian-branch-269209',
  storageBucket: 'avian-branch-269209.appspot.com',
  messagingSenderId: '830311878549',
  appId: '1:830311878549:web:40706c48f3b3b2359a709c',
  measurementId: 'G-CVFXQNQ020'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const firestore = firebase.firestore();
export default firebase;
