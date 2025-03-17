import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider, signInWithCredential } from "firebase/auth";

// Config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDImblWbrXse80d8hW0MoBrmf3oRWa-h98",
  authDomain: "food-delivery-app-fea70.firebaseapp.com",
  projectId: "food-delivery-app-fea70",
  storageBucket: "food-delivery-app-fea70.appspot.com",
  messagingSenderId: "1077560406644",
  appId: "1733166257546670"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, FacebookAuthProvider, signInWithCredential };
