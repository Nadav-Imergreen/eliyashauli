// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGdxRYaY29fSK9tBO4ZzndbunkvBnP4co",
    authDomain: "eliyaart-15aa2.firebaseapp.com",
    projectId: "eliyaart-15aa2",
    storageBucket: "eliyaart-15aa2.firebasestorage.app",
    messagingSenderId: "939018632285",
    appId: "1:939018632285:web:c775d70a6644f4a07b61b4",
    measurementId: "G-V91ERJDG30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);