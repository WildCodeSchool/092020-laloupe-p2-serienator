import React from "react";
import PropTypes from "prop-types";
import arrowRounded from "../images/curved-arrow.svg";
import "./Header.css";
import BtnsTop from "./BtnsTop";
import SerieForm from "./SerieForm";

function Header(props) {
  const {
    serieSearch,
    counter,
    placeHolder,
    error,
    inputValue,
    serie,
    disabled,
    buttonClass,
    buttonText,
    resultSearch,
    handleSubmit,
    handleChange,
    handleClick,
  } = props;
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
        <SerieForm
          serieSearch={serieSearch}
          counter={counter}
          placeHolder={placeHolder}
          error={error}
          inputValue={inputValue}
          disabled={disabled}
          buttonClass={buttonClass}
          buttonText={buttonText}
          resultSearch={resultSearch}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          serie={serie}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  serieSearch: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  resultSearch: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  counter: PropTypes.shape({ n: PropTypes.number }).isRequired,
  serie: PropTypes.shape({
    idS: PropTypes.number,
    poster_path: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  placeHolder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
