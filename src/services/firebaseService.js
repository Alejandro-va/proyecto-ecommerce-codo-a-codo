import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInAnonymously, signOut, reset, sendPasswordResetEmail } from "firebase/auth";
import { clearStorage, setRefreshToken, setToken, setUser } from "./localStorageService";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAYQ52sYFGylIN0cqmMurVcFYQNK52Y4Q8",
  authDomain: "codoacodo-ecommerce.firebaseapp.com",
  projectId: "codoacodo-ecommerce",
  storageBucket: "codoacodo-ecommerce.appspot.com",
  messagingSenderId: "883293342589",
  appId: "1:883293342589:web:7a2e58b78c6b2e27b95a14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// FIrebase Authentication methods
/**
 * Creates a new user with the providen email and password. 
 * If the operation ends up successfully the user is automatically logged in
 * 
 * @param email string
 * @param password string
 * @returns 
 */
export const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in User
      const { user: { accessToken, displayName, email, emailVerified, uid, stsTokenManager: { refreshToken }}} = userCredential.user;
      // After successfull creating the user, redirect to the login page
      console.log("single items", accessToken, displayName, email, emailVerified, uid, refreshToken )
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error in anonymous session. Code:', errorCode, errorMessage)
    });
}

/**
 * Signs in the given user if the password is correct.
 * 
 * @param email string
 * @param password string
 * @returns 
 */
export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      // nothing to do here, the listener onAuthStateChanged handles the storage of the information
      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error in anonymous session. Code:', errorCode, errorMessage)
      return false;
    });
}


/**
 * This is a listener on Auth state to check when a user logs in or out
 */
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const { accessToken, displayName, email, emailVerified, uid, stsTokenManager: { refreshToken }} = user;

    setToken(accessToken);
    setRefreshToken(refreshToken);
    setUser({
      displayName: displayName,
      email: email,
      emailVerified: emailVerified,
      uid: uid
    })
    // and then we'll have to check when app opens up again, that token data is stored or not.
  } else {
    // User is signed out
    clearStorage();
  }
});

/**
 * This method allows ur application to permit Anonymous navigation
 */
export const anonymousNavigation = () => {
  signInAnonymously(auth)
    .then(() => {
      // Signed in..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error in anonymous session. Code:', errorCode, errorMessage)
    });
}

/**
 * Logs out the user and ends up the session
 */
export const logout = async () => {
  return await signOut(auth).then(() => {
    // Sign-out successful.
    return true;
  }).catch((error) => {
    // An error happened.
    console.log('error login out', error);
    return false;
  });
}

// Password recovery methods
export const sendResetEmail = (email) => {
  sendPasswordResetEmail(email)
  .then(() => console.log('Recovery email sent'))
  .catch(error => console.log("Error sending email", error))
}

export const confirmPasswordReset = async (code, email) => {
  return await confirmPasswordReset(code, email)
  .then(() => console.log('User reseted successfully'))
  .catch(error => console.log("Error reseting account", error))
}