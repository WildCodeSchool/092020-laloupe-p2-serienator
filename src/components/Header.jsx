import React from "react";
import PropTypes from "prop-types";
import arrowRounded from "../images/curved-arrow.svg";
import "./Header.css";
import BtnsTop from "./BtnsTop";
import SerieForm from "./SerieForm";

function Header(props) {
  const { serieSearch } = props;
  return (
    <header className="header">
      <div className="backgroundHeader">
        <BtnsTop />
        <h1 className="titre">Bienvenue sur Serienator,</h1>
        <h2 className="soustitre">
          Le robot de Match-Making de séries TV le plus performant du Web.
        </h2>
        <h2 className="soustitre">
          Donnez lui 2 séries dès maintenant, ses recommandations seront sans
          faille !
        </h2>
        <img className="arrowRounded" alt="arrowRounded" src={arrowRounded} />
        <SerieForm serieSearch={serieSearch} />
      </div>
    </header>
  );
}

Header.propTypes = {
  serieSearch: PropTypes.number.isRequired,
};

export default Header;
