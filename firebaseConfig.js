import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCLfspKykJ_Os3d2zRUlJobyfWqH3iVF8M",
    authDomain: "signal-clone-7d3e2.firebaseapp.com",
    projectId: "signal-clone-7d3e2",
    storageBucket: "signal-clone-7d3e2.appspot.com",
    messagingSenderId: "380261943303",
    appId: "1:380261943303:web:5294bad0bcbbe3c4d902a2"
};
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);
export {app,auth,db}