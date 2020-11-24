import React from "react";
import "./Lucky.css";
import PropTypes from "prop-types";

function Lucky({ getSeries }) {
  return (
    <>
      <div className="LuckySection">
        <h2 className="LuckyTitle"> Ou tentez notre bouton magique</h2>
        <button className="luckyBtn" onClick={getSeries} type="button">
          J'ai de la chance
        </button>
      </div>
    </>
  );
}

export default Lucky;

Lucky.propTypes = {
  getSeries: PropTypes.func.isRequired,
};
