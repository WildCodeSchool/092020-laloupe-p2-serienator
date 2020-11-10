import React from "react";
import PropTypes from "prop-types";
import "./matchmaking.css";
import tvPost from "../images/toppng-old-tv.png";
import leftCable from "../images/left-cable550.png";
import rightCable from "../images/right-cable550.png";

function TvDisplay({ screen, handleScreen }) {
  return (
    <div className="tv-component">
      <div className="cable" id="left-cable">
        <img src={leftCable} alt="left cable" />
      </div>
      <div className="tv">
        <img src={tvPost} alt="tv-post" />
        <div className="tv-screen">
          <img src={screen} alt="tv-screen-changing" />
        </div>
        <button type="button" onClick={handleScreen}>
          change screen
        </button>
      </div>
      <div className="cable" id="right-cable">
        <img src={rightCable} alt="right cable" />
      </div>
    </div>
  );
}

export default TvDisplay;

TvDisplay.propTypes = {
  screen: PropTypes.string.isRequired,
  handleScreen: PropTypes.func.isRequired,
};
