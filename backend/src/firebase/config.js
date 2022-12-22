import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBmY56W2k8vv99WN-iZxkOeZdz8mS77XhU",
  authDomain: "eshop-4a91e.firebaseapp.com",
  projectId: "eshop-4a91e",
  storageBucket: "eshop-4a91e.appspot.com",
  messagingSenderId: "718768515220",
  appId: "1:718768515220:web:0e5f2155ed0a731d3b2c81"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
