import React from "react";
import "./CardsMobile.css";
import PropTypes from "prop-types";
import questionMark from "../images/questioncard3.jpeg";

function CardsMobile(props) {
  const { handleClick } = props;
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div>
      <div
        className="cards-mobile"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
      >
        <img className="qmark" src={questionMark} alt="Sélectionner un série" />
      </div>
    </div>
  );
}
CardsMobile.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default CardsMobile;
