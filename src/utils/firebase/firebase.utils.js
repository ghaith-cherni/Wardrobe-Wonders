import{initializeApp} from 'firebase/app'
import{
    getAuth,
   // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-K-0gTk-HfHNt0ZhIO2P0NLBrlLXLwY8",
    authDomain: "firstniche-4153c.firebaseapp.com",
    projectId: "firstniche-4153c",
    storageBucket: "firstniche-4153c.appspot.com",
    messagingSenderId: "997727114566",
    appId: "1:997727114566:web:5cae8dbe9763a52ac4c147"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider =new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });
  export const auth = getAuth();
  export const signInWithGooglePopup =() => signInWithPopup(auth, provider);
  
  export const db = getFirestore() 
 export const createUserDocumentFromAuth =async (userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid);
    const userSnapshot =await getDoc(userDocRef);
    console.log(userSnapshot)
  }
 