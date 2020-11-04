import React from "react";
import PropTypes from "prop-types";
import "./ResultAuto.css";

function ResultAuto({ posterPath, name }) {
  return (
    <div className="container-ResultAuto">
      <img src={posterPath} alt={name} />
      <p>{name}</p>
    </div>
  );
}

ResultAuto.propTypes = {
  posterPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ResultAuto;
