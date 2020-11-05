import React from "react";
import MatchmakingMobile from "./components/MatchmakingMobile";
import NosReco from "./components/NosReco";
import "./App.css";
import FicheTech from "./components/FicheTech";
import Autosuggest from "./components/Autosuggest";

function App() {
  return (
    <div>
      <MatchmakingMobile />
      <Autosuggest />
      <NosReco />
      <FicheTech />
    </div>
  );
}

export default App;
