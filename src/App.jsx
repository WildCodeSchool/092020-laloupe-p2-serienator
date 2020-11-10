import React from "react";
import Matchmaking from "./components/Matchmaking";
import Header from "./components/Header";
import NosReco from "./components/NosReco";
import FicheTech from "./components/FicheTech";
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
      </div>
    );
  }
}

export default App;
