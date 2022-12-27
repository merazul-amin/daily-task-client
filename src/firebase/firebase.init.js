// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6zqiV3-UNgkk6SYOxdI2HKZD0JXEEBNY",
    authDomain: "daily-task-ea1fd.firebaseapp.com",
    projectId: "daily-task-ea1fd",
    storageBucket: "daily-task-ea1fd.appspot.com",
    messagingSenderId: "276821593516",
    appId: "1:276821593516:web:73a6fd7997df0419a4be09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;