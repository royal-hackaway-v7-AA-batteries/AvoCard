import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import TreasureChest from "./pages/TreasureChest";
import MarketPlace from "./pages/MarketPlace";
import AvoCardLogoDark from "../public/assets/AvoCard_Logo_dark.svg";

// import { useAuthState } from "react-firebase-hooks/auth";
import {
  Auth,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import { FaGoogle } from "react-icons/fa";

const firebaseConfig = {
  apiKey: "AIzaSyBFng4SlyrJ33txyWroBuYM5Cyu0ZyQ930",
  authDomain: "royal-hackaway-v7.firebaseapp.com",
  projectId: "royal-hackaway-v7",
  storageBucket: "royal-hackaway-v7.appspot.com",
  messagingSenderId: "792820093216",
  appId: "1:792820093216:web:f396d08687fa7061d48745",
  measurementId: "G-Y069PEEHGX",
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

const db: firebase.firestore.Firestore = firebase.firestore();
const collection: firebase.firestore.CollectionReference<firebase.firestore.DocumentData> =
  db.collection("ideas");
const query: firebase.firestore.Query<firebase.firestore.DocumentData> =
  collection.orderBy("title");

const auth: Auth = getAuth(app);
const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();

// Fetch data in real-time
query.onSnapshot(
  (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  },
  (error) => {
    console.error("Error getting real-time data: ", error);
  },
);

function App() {
  // const [USER] = useAuthState(auth);
  const [user, setUser] = useState(() => auth.currentUser);
  const [initalizing, setInitializing] = useState(true);

  function LoginScreen() {
    return (
      <div id="login-screen" style={{ height: !user ? "100vh" : "0" }}>
        <div id="left-portion">
          <h1>Welcome to AvoCard</h1>
          <h4>Let's get started!</h4>
          <button
            id="google-login"
            onClick={signInWithGoogle}
            style={{ display: !user ? "inline-block" : "none" }}
          >
            <div className="items-center">
              <FaGoogle style={{ marginRight: ".5rem" }} />
              <div>Continue With Google</div>
            </div>
          </button>
        </div>
        <img
          id="logo"
          src={AvoCardLogoDark}
          style={{ display: !user ? "inline-block" : "none" }}
        />
      </div>
    );
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google");
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      if (initalizing) {
        setInitializing(false);
      }
    });
    // cleanup subscription
    return unsubscribe;
  }, [user, initalizing]);

  return (
    <>
      <LoginScreen />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {user ? (
                  <HomeLayout username={user?.displayName} email={user?.email}>
                    <Button main center onClick={handleLogout}>
                      Logout
                    </Button>
                  </HomeLayout>
                ) : (
                  <div className="text-black">test</div>
                )}
              </>
            }
          >
            <Route index element={<MarketPlace />} />
            <Route path="treasure" element={<TreasureChest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
