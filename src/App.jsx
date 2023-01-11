import { Home, Exercises, Program, Videos } from "./pages";
import Navbar from "./components/navbar/navbar";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Exercises />
      <Program />
      <Videos />
      {/* 🟡Features🟡
      1. Add themes
      */}
    </div>
  );
}

export default App;
