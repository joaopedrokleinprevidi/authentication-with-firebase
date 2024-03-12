import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaxHajP8xUoNQ594qKAxjludkyFAP6uB4",
  authDomain: "auth-yt-eaf10.firebaseapp.com",
  projectId: "auth-yt-eaf10",
  storageBucket: "auth-yt-eaf10.appspot.com",
  messagingSenderId: "257779467725",
  appId: "1:257779467725:web:93d559dad229f93f243084",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
