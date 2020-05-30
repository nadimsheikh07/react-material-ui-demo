import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVAQ3cgvXkrBey-7MGosa-thIK43oWEIg",
    authDomain: "fir-auth-67a18.firebaseapp.com",
    databaseURL: "https://fir-auth-67a18.firebaseio.com",
    projectId: "fir-auth-67a18",
    storageBucket: "fir-auth-67a18.appspot.com",
    messagingSenderId: "831840889704",
    appId: "1:831840889704:web:a57802b6b4901a1a0244dd"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();