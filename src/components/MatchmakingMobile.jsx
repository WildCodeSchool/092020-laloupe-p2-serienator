import React from "react";
import CardsMobile from "./CardsMobile";
import "./MatchmakingMobile.css";

function MatchmakingMobile() {
  return (
    <section className="matchmaking-mobile">
      <h2>Ajouter une série en cliquant sur une carte</h2>
      <div className="mobile-position">
        <CardsMobile />
        <CardsMobile />
      </div>
    </section>
  );
}

export default MatchmakingMobile;
