import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYuzW-IwaKeRk-PTsNz2Kr3KFBsY64xDU",
    authDomain: "loanapp-72199.firebaseapp.com",
    projectId: "loanapp-72199",
    storageBucket: "loanapp-72199.firebasestorage.app",
    messagingSenderId: "740235378106",
    appId: "1:740235378106:web:c2aa7a3aae5c1b9519f183"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);