import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "./App.scss";
// @ts-expect-error Will implement later
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";

const firebaseConfig = {
  apiKey: "AIzaSyBFng4SlyrJ33txyWroBuYM5Cyu0ZyQ930",
  authDomain: "royal-hackaway-v7.firebaseapp.com",
  projectId: "royal-hackaway-v7",
  storageBucket: "royal-hackaway-v7.appspot.com",
  messagingSenderId: "792820093216",
  appId: "1:792820093216:web:f396d08687fa7061d48745",
  measurementId: "G-Y069PEEHGX",
};

firebase.initializeApp(firebaseConfig);
const db: firebase.firestore.Firestore = firebase.firestore();
const collection: firebase.firestore.CollectionReference<firebase.firestore.DocumentData> =
  db.collection("ideas");
const query: firebase.firestore.Query<firebase.firestore.DocumentData> =
  collection.orderBy("title");

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
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomeLayout />
              </>
            }
          >
            <Route
              path="treasure"
              element={
                <>
                  <div> HI </div>
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
