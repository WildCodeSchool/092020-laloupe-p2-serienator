import React from "react";
import PropTypes from "prop-types";
import "./matchmaking.css";
import MatchmakingCard from "./MatchmakingCard";
import TvDisplay from "./TvDisplay";

const Matchmaking = React.forwardRef((props, ref) => {
  const { screen, serieSearch } = props;
  return (
    <section className="matchmaking" ref={ref}>
      <h2>Quelles sont les 2 dernières séries que tu as regardées ?</h2>
      <div className="matchmaking-container">
        <MatchmakingCard card={serieSearch[0]} />
        <TvDisplay screen={screen} />
        <MatchmakingCard card={serieSearch[1]} />
      </div>
    </section>
  );
});

export default Matchmaking;

Matchmaking.propTypes = {
  serieSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
  screen: PropTypes.string.isRequired,
};
