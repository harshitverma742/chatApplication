import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCEtbuZ3oIA8amHdyOBXMLLmHCZMuHIPVg",
  authDomain: "react-slack-clone-6284c.firebaseapp.com",
  databaseURL: "https://react-slack-clone-6284c.firebaseio.com",
  projectId: "react-slack-clone-6284c",
  storageBucket: "react-slack-clone-6284c.appspot.com",
  messagingSenderId: "1010926924701",
  appId: "1:1010926924701:web:d5d331af0cfe6fd31db574",
  measurementId: "G-9K7S58J5LF"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
