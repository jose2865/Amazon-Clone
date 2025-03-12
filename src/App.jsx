import { useEffect, useState, useContext } from "react";
import "./App.css";
import Routing from "./Router";
import { Type } from "./Utility/Action.type";
import { auth } from "./Utility/firebase.js";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);

  return (
    <>
      {/* <Header />
      <Carousel />
      <Category />
      <Product /> */}
      <Routing />
    </>
  );
}

export default App;
