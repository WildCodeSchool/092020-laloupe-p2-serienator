import React from "react";
import Matchmaking from "./components/Matchmaking";
import Header from "./components/Header";
import NosReco from "./components/NosReco";
import Autosuggest from "./components/Autosuggest";
import FicheTech from "./components/FicheTech";
import Lucky from "./components/Lucky";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Autosuggest />
      <Matchmaking />
      <Lucky />
      <NosReco />
      <FicheTech />
    </div>
  );
}

export default App;
