// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzxoeLKZDNsfva4dj3zvFqvJO-M-8OFlw",
    authDomain: "myproject-c8a08.firebaseapp.com",
    projectId: "myproject-c8a08",
    storageBucket: "myproject-c8a08.firebasestorage.app",
    messagingSenderId: "114293422439",
    appId: "1:114293422439:web:7314f915bca444a76897c2",
    measurementId: "G-WZHZVWH2L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and Google provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/**
 * Sign in with Google using popup and return the result.
 * Caller should handle success/failure and any navigation.
 */
export async function signInWithGoogle() {
    return await signInWithPopup(auth, provider);
}

export { app, analytics, auth, provider };