import React from "react";
import "./CardsMobile.css";
import PropTypes from "prop-types";

function CardsMobile(props) {
  const { handleClick, card } = props;
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleClick();
    }
  };

  return (
    <div
      className="cards-mobile"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
    >
      <img
        className="qmark"
        src={card.poster_path}
        alt="Sélectionner un série"
      />
    </div>
  );
}
CardsMobile.propTypes = {
  handleClick: PropTypes.func.isRequired,
  card: PropTypes.shape({
    poster_path: PropTypes.string,
  }).isRequired,
};
export default CardsMobile;
