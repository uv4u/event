import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Homepage />
    </React.Fragment>
  );
}

export default App;
