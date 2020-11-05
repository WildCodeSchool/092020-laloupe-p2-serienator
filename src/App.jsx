import React from "react";
import Header from "./components/Header";
import NosReco from "./components/NosReco";
import "./App.css";
import FicheTech from "./components/FicheTech";
import Autosuggest from "./components/Autosuggest";

function App() {
  return (
    <div>
      <Header />
      <Autosuggest />
      <NosReco />
      <FicheTech />
    </div>
  );
}

export default App;
