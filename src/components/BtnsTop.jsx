import React from "react";
import PropTypes from "prop-types";
import "./BtnsTop.css";

function BtnsTop({ handleTop }) {
  return (
    <div className="container-btnsHeader">
      <button type="button" className="nosTops" onClick={handleTop}>
        Nos Tops
      </button>
    </div>
  );
}

BtnsTop.propTypes = {
  handleTop: PropTypes.func.isRequired,
};

export default BtnsTop;
