// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsomDF3HztH9u4DGaOgTCQpXK04Vdg7ZU",
    authDomain: "service-provider-assignment.firebaseapp.com",
    projectId: "service-provider-assignment",
    storageBucket: "service-provider-assignment.appspot.com",
    messagingSenderId: "669058887507",
    appId: "1:669058887507:web:74cae60e092f10268e3ba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;