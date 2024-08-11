// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-auth-39612.firebaseapp.com',
  projectId: 'mern-auth-39612',
  storageBucket: 'mern-auth-39612.appspot.com',
  messagingSenderId: '1079686029876',
  appId: '1:1079686029876:web:9cce550d1a2675f88ca061',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
