import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDZYu88s2BQWybizImvzQftilgLGFmB7mU",
  authDomain: "gfragrances-b10eb.firebaseapp.com",
  projectId: "gfragrances-b10eb",
  storageBucket: "gfragrances-b10eb.firebasestorage.app",
  messagingSenderId: "726428017380",
  appId: "1:726428017380:web:0dcd2afb0bf0a4f9a702f1",
  measurementId: "G-QY2RB84YHN",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const analytics = getAnalytics(app);