import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJH9wfL4E88DL8ZUD0qW9AzGlujFyCmZo",
  authDomain: "netflix-clone-1a3ec.firebaseapp.com",
  projectId: "netflix-clone-1a3ec",
  storageBucket: "netflix-clone-1a3ec.appspot.com",
  messagingSenderId: "881193913896",
  appId: "1:881193913896:web:ba3f4d6562a6532900ef1d",
  measurementId: "G-5HR0LE50K8"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
