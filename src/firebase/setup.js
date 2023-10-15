import { initializeApp } from "firebase/app";
import { firebaseConfigImp } from "../config/config";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: firebaseConfigImp.apiKey,
  authDomain: firebaseConfigImp.authDomain,
  projectId: firebaseConfigImp.projectId,
  storageBucket: firebaseConfigImp.storageBucket,
  messagingSenderId: firebaseConfigImp.messagingSenderId,
  appId: firebaseConfigImp.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider(app);
export const database =  getFirestore(app); 
