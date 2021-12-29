import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyBlGhwGo6-SZpLWV8V5PmB-oIhn0w_IrTQ",
  authDomain: "react-4cbd3.firebaseapp.com",
  projectId: "react-4cbd3",
  storageBucket: "react-4cbd3.appspot.com",
  messagingSenderId: "771343164036",
  appId: "1:771343164036:web:8e6e96dfdbe6c28dbe98d1",
  measurementId: "G-9G2SCM8NRL",
};
firebase.initializeApp(config);
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/login",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};
function LoginScreen() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log(
          "----------------User--------------",
          user.multiFactor.user.email
        );
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <center>
          <h1>
            Avec Contactini, partagez et restez en contact avec votre entourage.
          </h1>
        </center>
        <center>
          <h2>Please sign-in:</h2>
        </center>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>
        Welcome {firebase.auth().currentUser.displayName}! You are now
        signed-in!
      </p>
      <button onClick={() => firebase.auth().signOut()}>Sign-out</button>
    </div>
  );
}

export default LoginScreen;
