import firebase from "firebase";
import "firebase/firestore";
import "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBehENZGmPCb7IjGGaaJoZws8iAVvzHMQc",
  authDomain: "my-portfolio-986db.firebaseapp.com",
  databaseURL: "my-portfolio-986db",
  projectId: "my-portfolio-986db",
  storageBucket: "my-portfolio-986db.appspot.com",
  messagingSenderId: "1044178099208",
  appId: "1:1044178099208:web:6503ba091332208d6545bd",
  measurementId: "G-GLV1SQT78Z",
};

firebase.initializeApp(config);

export default firebase;
