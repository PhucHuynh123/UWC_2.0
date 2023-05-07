import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
 
const firebaseConfig = {
    apiKey: "AIzaSyDcunBTomgHJ52g2Xo4T0Z8HYFxenIo-6U",
    authDomain: "cnpm-uwc2.firebaseapp.com",
    projectId: "cnpm-uwc2",
    storageBucket: "cnpm-uwc2.appspot.com",
    messagingSenderId: "741725357387",
    appId: "1:741725357387:web:5649afbfeb79d924c214ce"
  };

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app