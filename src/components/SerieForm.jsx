import React, { Component } from "react";
import "./SerieForm.css";
import axios from "axios";
import PropTypes from "prop-types";
import ResultAuto from "./ResultAuto";
import testPatern from "../images/test-pattern-152459_960_720.webp";

const baseImg = "https://image.tmdb.org/t/p/w92";
const placeHolderInit = [
  "Entre ta 1ère Série",
  "Entre ta 2ème Série",
  "cliquer sur Réinitialiser pour réessayer",
];
const buttonTextInit = ["1ère Série", "2ème Série", "Réinitialiser"];
const buttonClassInit = ["Btnserie1", "Btnserie2", "Btnserie1"];
const disabledInit = [false, false, "disabled"];

class SerieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      error: "",
      inputValue: "",
      disabled: disabledInit[0],
      buttonText: buttonTextInit[0],
      buttonClass: buttonClassInit[0],
      placeHolder: placeHolderInit[0],
      resultSearch: [],
      idS: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, idS } = this.state;
    if (prevState.inputValue !== inputValue && idS === 0) {
      this.apiCall();
    }
  }

  apiCall = () => {
    const { inputValue } = this.state;
    const researchAPI =
      "https://api.themoviedb.org/3/search/tv?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr&page=1&include_adult=false&query=";

    if (inputValue.length > 0) {
      axios
        .get(researchAPI + inputValue)
        .then((response) => response.data)
        .then((data) => {
          this.setState({ resultSearch: data.results });
        });
    } else {
      this.setState({ resultSearch: [] });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { counter, inputValue, idS } = this.state;
    const { serieSearch } = this.props;

    if (counter < 3) {
      if (idS !== 0 && inputValue.length >= 1) {
        const newCounter = counter + 1;
        if (counter === 1) {
          serieSearch.idS1 = idS;
        } else if (counter === 2) {
          serieSearch.idS2 = idS;
        } else if (counter === 3) {
          serieSearch.idS1 = 0;
          serieSearch.idS2 = 0;
        }
        this.setState({
          counter: newCounter,
          error: "",
          disabled: disabledInit[counter],
          buttonText: buttonTextInit[counter],
          buttonClass: buttonClassInit[counter],
          placeHolder: placeHolderInit[counter],
          inputValue: "",
        });
      } else {
        this.setState({ error: "Ooooops" });
      }
    } else {
      const newCounter = 0;
      this.setState({
        counter: newCounter + 1,
        error: "",
        disabled: disabledInit[newCounter],
        buttonText: buttonTextInit[newCounter],
        buttonClass: buttonClassInit[newCounter],
        placeHolder: placeHolderInit[newCounter],
        inputValue: "",
      });
    }
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value, error: "", idS: 0 });
  };

  handleClick = (findId) => {
    const { resultSearch } = this.state;
    const eureka = resultSearch[findId].name;
    this.setState({
      inputValue: eureka,
      idS: resultSearch[findId].id,
      resultSearch: [],
    });
  };

  render() {
    const {
      placeHolder,
      error,
      inputValue,
      disabled,
      buttonClass,
      buttonText,
      resultSearch,
    } = this.state;
    const { handleChange, handleSubmit, handleClick } = this;
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
    );
  }
}

SerieForm.propTypes = {
  serieSearch: PropTypes.shape({
    idS1: PropTypes.number,
    idS2: PropTypes.number,
  }).isRequired,
};

export default SerieForm;
