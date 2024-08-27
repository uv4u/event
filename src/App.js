import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Layout from "./Pages/RootLayout";
import Login from "./Pages/Login";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      <Route exact path="/" element={<Layout />}></Route>
      <Route path="/signin" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
