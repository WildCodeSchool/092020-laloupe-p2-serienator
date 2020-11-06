import React from "react";
import MatchmakingMobile from "./components/MatchmakingMobile";
import Matchmaking from "./components/Matchmaking";
import Header from "./components/Header";
import NosReco from "./components/NosReco";
import Autosuggest from "./components/Autosuggest";
import FicheTech from "./components/FicheTech";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Autosuggest />
      <Matchmaking />
      <NosReco />
      <FicheTech />
      <MatchmakingMobile />
    </div>
  );
}

export default App;
