import React from "react";
import "./matchmaking.css";
import PropTypes from "prop-types";

function MatchmakingCard({ card }) {
  return (
    <div className="matchmaking-card">
      <img src={card.poster_path} alt={card.name} />
    </div>
  );
}

MatchmakingCard.propTypes = {
  card: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MatchmakingCard;
