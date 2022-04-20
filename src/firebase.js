import { useEffect, useState } from "react";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut} from "firebase/auth";
// import {useEffect, useState } from 'react';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN1zklf2vifFyBxH2WDc7jlztnrk0b7HA",
  authDomain: "fir-signin-95d30.firebaseapp.com",
  projectId: "fir-signin-95d30",
  storageBucket: "fir-signin-95d30.appspot.com",
  messagingSenderId: "792000402685",
  appId: "1:792000402685:web:06242d5adc675b9e1f9a94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export function signup(email,password) {
    return createUserWithEmailAndPassword(auth,email,password);

}

export function login(email,password) {
    return signInWithEmailAndPassword(auth,email,password);

}

export function logout() {
    return signOut(auth);
}


// custom Hook
export function useAuth() {
    const [currentUser,setCurrentUser] = useState();  
    useEffect(() => {
       const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
       return unsub;
    },[])
    
    return currentUser;
}