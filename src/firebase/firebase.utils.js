import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// web app config
let firebaseConfig = {
  apiKey: 'AIzaSyAmMu5y7RRxaxgD1-8m_GyGUPbozUVszyY',
  authDomain: 'panda-shop-react.firebaseapp.com',
  projectId: 'panda-shop-react',
  storageBucket: 'panda-shop-react.appspot.com',
  messagingSenderId: '1028701547227',
  appId: '1:1028701547227:web:d9158e00bc923f3515fafe',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.timeLog('error creating user', err.message);
    }
  }

  return userRef;
};

//   initialize firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
