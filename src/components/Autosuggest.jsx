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
  } = props;

  return (
    <div className="serie-select">
      <form onSubmit={handleSubmit} className="form-Autosuggest">
        <label htmlFor="title">
          <input
            placeholder={placeHolder}
            id="title"
            name="title"
            type="text"
            value={inputValue}
            onChange={handleChange}
          />
        </label>
        <p>{error}</p>
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
  resultSearch: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default Autosuggest;
