import { initializeApp } from 'firebase/app';
import { CACHE_SIZE_UNLIMITED, enableIndexedDbPersistence, getFirestore, initializeFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB3F5ZdFlEMHM10Lz8H6kx0ErqZS27690k",
    authDomain: "gepov-b6ac6.firebaseapp.com",
    databaseURL: "https://gepov-b6ac6-default-rtdb.firebaseio.com",
    projectId: "gepov-b6ac6",
    storageBucket: "gepov-b6ac6.appspot.com",
    messagingSenderId: "116484976084",
    appId: "1:116484976084:web:e66a903e2927910873fa41",
    measurementId: "G-ZVN8N3F96G"
};

export const app = initializeApp(firebaseConfig);

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
