import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBkqntlA_dkZwIrvKR7J_oL0U8ZWm_MTxM",
  authDomain: "real-state-project-8f4d2.firebaseapp.com",
  projectId: "real-state-project-8f4d2",
  storageBucket: "real-state-project-8f4d2.firebasestorage.app",
  messagingSenderId: "87357926081",
  appId: "1:87357926081:web:894b311a50aa75a9b7c240",
  measurementId: "G-L2HZ21Z5ZK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export default app; 