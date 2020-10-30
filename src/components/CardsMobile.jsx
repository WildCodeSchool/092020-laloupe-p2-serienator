import React from "react";
import "./CardsMobile.css";
import questionMark from "../images/questioncard3.jpeg";

function CardsMobile() {
  return (
    <div className="cards-mobile">
      <img className="qmark" src={questionMark} alt="Sélectionner un série" />
      <div className="toggle-search">
        <input className="toggle-search" type="checkbox" />
      </div>
      <div className="serie-select">
        <forms>
          <input className="serie-select" type="text" />
        </forms>
      </div>
    </div>
  );
}

export default CardsMobile;
