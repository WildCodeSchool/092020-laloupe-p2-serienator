import React from "react";
import PropTypes from "prop-types";
import ResultAuto from "./ResultAuto";
import "./Autosuggest.css";
import testPatern from "../images/test-pattern-152459_960_720.webp";

const baseImg = "https://image.tmdb.org/t/p/w92";

function Autosuggest(props) {
  const {
    placeHolder,
    inputValue,
    error,
    resultSearch,
    handleChange,
    handleSubmit,
    handleClick,
    buttonText,
  } = props;

  return (
    <div className="serie-select">
      <p className={error ? "error-mobile" : ""}>{error}</p>
      <form onSubmit={handleSubmit} className="form-Autosuggest">
        <div className="input-mobile-container">
          <input
            placeholder={placeHolder.substr(0, 25)}
            id="title"
            name="title"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type="button"
            className="mobile-submit-btn"
            onClick={handleSubmit}
          >
            {buttonText}
          </button>
        </div>
        <ul className="container-Autosuggest">
          {resultSearch.map((resultat, index) => (
            <ResultAuto
              key={resultat.id}
              posterPath={
                resultat.poster_path
                  ? baseImg + resultat.poster_path
                  : testPatern
              }
              name={resultat.name}
              handleClick={handleClick}
              id={index}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}
Autosuggest.propTypes = {
  resultSearch: PropTypes.arrayOf(PropTypes.object).isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default Autosuggest;
