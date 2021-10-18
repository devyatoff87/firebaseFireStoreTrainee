// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyDeJRFDYxTWXhdzFwznREPEBRfjnunHPiU",
  authDomain: "colors-c579d.firebaseapp.com",
  projectId: "colors-c579d",
  storageBucket: "colors-c579d.appspot.com",
  messagingSenderId: "1043857857788",
  appId: "1:1043857857788:web:2b91303dd3806810d50b79",
};

const app = initializeApp(config);
export default getFirestore();
