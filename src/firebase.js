import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC2Sbx8oBJIbKKJZf4JhSHFxPKaxJsrH4g",
    authDomain: "project-auth-crud-2021.firebaseapp.com",
    projectId: "project-auth-crud-2021",
    storageBucket: "project-auth-crud-2021.appspot.com",
    messagingSenderId: "62539735620",
    appId: "1:62539735620:web:0f23f0c2cf287dd036d211"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth, firebase}
