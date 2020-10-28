import React from "react";
import "./matchmaking.css";
import MatchmakingCard from "./MatchmakingCard";

class Matchmaking extends React.Component {
  constructor() {
    super();
    this.state = {
      className: "matchmaking",
    };
  }

  render() {
    const { className } = this.state;
    return (
      <section className={className}>
        <h2>Quelles sont les 2 dernières séries que tu as regardées ?</h2>
        <div className="matchmaking-display">
          <MatchmakingCard />
          <MatchmakingCard />
        </div>
      </section>
    );
  }
}

export default Matchmaking;
