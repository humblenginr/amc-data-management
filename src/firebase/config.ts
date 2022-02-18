// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyCD_1KLOD1ze1NUnIbEHdz9ixsS2RlwRC0",

  authDomain: "data-management-amc.firebaseapp.com",

  projectId: "data-management-amc",

  storageBucket: "data-management-amc.appspot.com",

  messagingSenderId: "362635392646",

  appId: "1:362635392646:web:30f20208b70f726e76c307",

  databaseURL:
    "https://data-management-amc-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
