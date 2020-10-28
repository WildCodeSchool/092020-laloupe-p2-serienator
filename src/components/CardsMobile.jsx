import React from "react";
import "./CardsMobile.css";
import questionMark from "../images/question-mark.png";

function CardsMobile() {
  return (
    <div className="cards-mobile">
      <button type="submit">
        <img src={questionMark} alt="Sélectionner un série" />
      </button>
    </div>
  );
}
export default CardsMobile;
