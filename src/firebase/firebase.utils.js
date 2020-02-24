import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDet3zIca1gVrE3QP9C0sLb9RSVwinmDgA',
  authDomain: 'clothing-db-1e91e.firebaseapp.com',
  databaseURL: 'https://clothing-db-1e91e.firebaseio.com',
  projectId: 'clothing-db-1e91e',
  storageBucket: 'clothing-db-1e91e.appspot.com',
  messagingSenderId: '565504095078',
  appId: '1:565504095078:web:4c8e796cfe80ba28eecea7',
  measurementId: 'G-19PY084G8Q'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUser = async (userAuth, data) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = Date.now();

    try {
      await userRef.set({ displayName, email, createdAt, ...data });
    } catch (error) {
      console.log('CANNOT CREATE USER:', error.message);
    }
  }

  return userRef;
};

export default firebase;
