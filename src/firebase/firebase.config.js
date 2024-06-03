
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0dDs0jFK8T5YPBjLw_E0qDuOkon5xkhs",
  authDomain: "automotive-artistry-client.firebaseapp.com",
  projectId: "automotive-artistry-client",
  storageBucket: "automotive-artistry-client.appspot.com",
  messagingSenderId: "925719586107",
  appId: "1:925719586107:web:ce57d7b81e6288786e031e"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;