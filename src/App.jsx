import React from "react";
import NosReco from "./components/NosReco";
import "./App.css";
import FicheTech from "./components/FicheTech";
import Autosuggest from "./components/Autosuggest";

function App() {
  return (
    <div>
      <Autosuggest />
      <NosReco />
      <FicheTech />
    </div>
  );
}

export default App;
