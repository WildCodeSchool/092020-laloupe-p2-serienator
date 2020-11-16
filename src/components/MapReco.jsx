import React from "react";
import PropTypes from "proptypes";
import "./MapReco.css";

function MapReco({ posterPath, name, year }) {
  return (
    <section>
      <div className="cards-MapReco">
        <img src={posterPath} alt={name} />
        <h4>{name}</h4>
        <p className="year-MapReco">({year})</p>
      </div>
    </section>
  );
}

MapReco.propTypes = {
  posterPath: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MapReco;
