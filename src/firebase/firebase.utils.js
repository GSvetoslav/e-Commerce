import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA7dS1KnAABGva6obkty2KRcB_mPgKvM-4",
    authDomain: "e-commercebd.firebaseapp.com",
    databaseURL: "https://e-commercebd.firebaseio.com",
    projectId: "e-commercebd",
    storageBucket: "e-commercebd.appspot.com",
    messagingSenderId: "838291337672",
    appId: "1:838291337672:web:bf2227745caca9870990fd",
    measurementId: "G-8P6SRL5HXX"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get();

    console.log(snapShot);

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const creatAt = new Date();

      try{
        await userRef.set({
          displayName, email, creatAt, ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;

  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;