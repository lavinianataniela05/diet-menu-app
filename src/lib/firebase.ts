import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAwre7p6lORc-he_aGc5Z2DJp81tX6rppA",
  authDomain: "dietmenuapp.firebaseapp.com",
  projectId: "dietmenuapp",
  storageBucket: "dietmenuapp.firebasestorage.app",
  messagingSenderId: "345775852706",
  appId: "1:345775852706:web:793f7f49098536ceb69bfb",
  measurementId: "G-9JTKT3EV6K"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
