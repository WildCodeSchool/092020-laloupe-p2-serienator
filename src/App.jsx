import React from "react";
import MatchmakingMobile from "./components/MatchmakingMobile";
import Matchmaking from "./components/Matchmaking";
import Header from "./components/Header";
import NosReco from "./components/NosReco";
import FicheTech from "./components/FicheTech";
import Lucky from "./components/Lucky";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serieSearch: {
        idS1: 0,
        idS2: 0,
      },
    };
  }

  render() {
    const { serieSearch } = this.state;
    return (
      <div>
        <Header serieSearch={serieSearch} />
        <Matchmaking />
        <NosReco />
        <FicheTech />
        <MatchmakingMobile serieSearch={serieSearch} />
      </div>
    );
  }
}

export default App;
