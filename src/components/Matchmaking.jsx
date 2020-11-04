import React from "react";
import "./matchmaking.css";
import imgDefault from "../images/questioncard3.jpeg";
import MatchmakingCard from "./MatchmakingCard";
import TvDisplay from "./TvDisplay";

class Matchmaking extends React.Component {
  constructor() {
    super();
    this.state = {
      firstSeries: {
        name: "question mark card",
        poster_path: imgDefault,
      },
      secondSeries: {
        name: "question mark card",
        poster_path: imgDefault,
      },
    };
  }

  render() {
    const { firstSeries, secondSeries } = this.state;
    return (
      <section className="matchmaking">
        <h2>Quelles sont les 2 dernières séries que tu as regardées ?</h2>
        <div className="matchmaking-container">
          <MatchmakingCard card={firstSeries} />
          <TvDisplay />
          <MatchmakingCard card={secondSeries} />
        </div>
      </section>
    );
  }
}

export default Matchmaking;
