import React from "react";
import Matchmaking from "./components/Matchmaking";
import Header from "./components/Header";
import FicheTech from "./components/FicheTech";
import OurReco from "./components/OurReco";
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
        <OurReco />
        <FicheTech />
      </div>
    );
  }
}

export default App;
