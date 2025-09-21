// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1pbeFaCqysqXdxL7CcSlfqmi38YPklNk",
  authDomain: "engagementinvitation-1d16a.firebaseapp.com",
  projectId: "engagementinvitation-1d16a",
  storageBucket: "engagementinvitation-1d16a.firebasestorage.app",
  messagingSenderId: "751357358701",
  appId: "1:751357358701:web:af53f08e8db8fb50f18564",
  measurementId: "G-N97YY2YFS0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
