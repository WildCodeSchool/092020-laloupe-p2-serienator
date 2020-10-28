import React from "react";
import "./matchmaking.css";
import imgDefault from "../images/questioncard3.jpeg";

class MatchmakingCard extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultImg: imgDefault,
      defaultAlt: "card with a question mark",
    };
  }

  render() {
    const { defaultImg, defaultAlt } = this.state;
    return (
      <div className="matchmaking-card">
        <img src={defaultImg} alt={defaultAlt} />
      </div>
    );
  }
}

export default MatchmakingCard;
