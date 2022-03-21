import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOuBQdjsK-8cIFZ5qzW854ivMlt_vKdLg",
    authDomain: "twitch-family-project.firebaseapp.com",
    projectId: "twitch-family-project",
    storageBucket: "twitch-family-project.appspot.com",
    messagingSenderId: "481621139130",
    appId: "1:481621139130:web:cdd6ffc9a866c683e9ac83"
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
