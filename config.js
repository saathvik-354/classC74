import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDJmVvKvOJa7hRhtCjxP8F-eGOfdVGbRCM",
    authDomain: "wily-e111a.firebaseapp.com",
    databaseURL: "https://wily-e111a.firebaseio.com",
    projectId: "wily-e111a",
    storageBucket: "wily-e111a.appspot.com",
    messagingSenderId: "792598595849",
    appId: "1:792598595849:web:d7ea56bbf762fb44936bd8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

