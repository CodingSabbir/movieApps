import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDWUYQIJpj9iOrHFBZiwgrpnx7JuEXxqB4",
    authDomain: "blog-simple-884f6.firebaseapp.com",
    projectId: "blog-simple-884f6",
    storageBucket: "blog-simple-884f6.appspot.com",
    messagingSenderId: "554004057374",
    appId: "1:554004057374:web:91e3073cdc2cad87c84d0f"
  };

  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app)
  
  export default auth;
 



