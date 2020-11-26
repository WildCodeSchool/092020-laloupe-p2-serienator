import React from "react";
import PropTypes from "prop-types";
import arrowRounded from "../images/curved-arrow.svg";
import "./Header.css";
import BtnsTop from "./BtnsTop";
import SerieForm from "./SerieForm";

function Header(props) {
  const {
    placeHolder,
    inputValue,
    error,
    disabled,
    buttonClass,
    buttonText,
    resultSearch,
    handleChange,
    handleSubmit,
    handleClick,
    handleTop,
  } = props;
  return (
    <header className="header">
      <div className="backgroundHeader">
        <BtnsTop handleTop={handleTop} />
        <h1 className="titre">Bienvenue sur SerieNator,</h1>
        <p className="soustitre">
          Le robot de Match-Making de séries TV le plus performant du Web.
        </p>
        <p className="soustitre">
          Donnez lui 2 séries dès maintenant, ses recommandations seront sans
          faille !
        </p>
        <div className="input-line">
          <img className="arrowRounded" alt="arrowRounded" src={arrowRounded} />
          <SerieForm
            placeHolder={placeHolder}
            inputValue={inputValue}
            disabled={disabled}
            error={error}
            buttonClass={buttonClass}
            buttonText={buttonText}
            resultSearch={resultSearch}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeHolder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleTop: PropTypes.func.isRequired,
};

export default Header;
