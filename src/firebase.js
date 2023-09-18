import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAeUzBNsoooh-oU6d_ZLm1BMWZiAex_TUY",
	authDomain: "blog-f5947.firebaseapp.com",
	projectId: "blog-f5947",
	storageBucket: "blog-f5947.appspot.com",
	messagingSenderId: "609489116357",
	appId: "1:609489116357:web:f24aa9b9a5c68846c624ac"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth,provider,db };