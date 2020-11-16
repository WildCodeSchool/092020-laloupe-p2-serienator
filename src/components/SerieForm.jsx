import React from "react";
import "./SerieForm.css";
import PropTypes from "prop-types";
import ResultAuto from "./ResultAuto";
import testPatern from "../images/test-pattern-152459_960_720.webp";

const baseImg = "https://image.tmdb.org/t/p/w92";

function SerieForm(props) {
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
  } = props;
  return (
    <form className="SerieForm2">
      <div className="Error">
        <p>{error}</p>
      </div>
      <div className="SerieForm">
        <input
          placeholder={placeHolder}
          id="name"
          name="serie1"
          type="text"
          value={inputValue}
          onChange={handleChange}
          disabled={disabled}
        />
        <button type="button" className={buttonClass} onClick={handleSubmit}>
          {buttonText}
        </button>
      </div>
      <ul className="containerAutosuggest">
        {resultSearch.map((resultat, index) => (
          <ResultAuto
            key={resultat.id}
            posterPath={
              resultat.poster_path ? baseImg + resultat.poster_path : testPatern
            }
            name={resultat.name}
            handleClick={handleClick}
            id={index}
          />
        ))}
      </ul>
    </form>
  );
}

SerieForm.propTypes = {
  resultSearch: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  placeHolder: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  buttonClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SerieForm;
