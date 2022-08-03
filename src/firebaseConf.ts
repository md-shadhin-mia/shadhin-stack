// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTscCFvKKY_U9NAwWUFuS9l9eSTNSBuT8",
  authDomain: "shadhin-stack.firebaseapp.com",
  projectId: "shadhin-stack",
  storageBucket: "shadhin-stack.appspot.com",
  messagingSenderId: "1005542093810",
  appId: "1:1005542093810:web:2ee27e380be617c4ef316b",
  measurementId: "G-EB4Z9G7019"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);