// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAoP-h6oIvjTKfC8bM-JBx4CTxlUMoOyz8',
    authDomain: 'bitkong-a8894.firebaseapp.com',
    projectId: 'bitkong-a8894',
    storageBucket: 'bitkong-a8894.appspot.com',
    messagingSenderId: '541294246919',
    appId: '1:541294246919:web:eb764bfd58868028e5bea2',
    measurementId: 'G-K6WW04P4NX',
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const DB = getFirestore();
