import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import ResultAuto from "./ResultAuto";
import "./Autosuggest.css";
import testPatern from "../images/test-pattern-152459_960_720.webp";

const baseImg = "https://image.tmdb.org/t/p/w92";
const placeHolderInit = [
  "Entre ta 1ère Série",
  "Entre ta 2ème Série",
  "cliquer sur Réinitialiser pour réessayer",
];

class Autosuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      resultSearch: [],
      idS: 0,
      counter: 1,
      placeHolder: placeHolderInit[0],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { title, idS } = this.state;
    if (prevState.title !== title && idS === 0) {
      this.apiCall();
    }
  }

  apiCall = () => {
    const { title } = this.state;
    const researchAPI =
      "https://api.themoviedb.org/3/search/tv?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr&page=1&include_adult=false&query=";

    if (title.length > 0) {
      axios
        .get(researchAPI + title)
        .then((response) => response.data)
        .then((data) => {
          this.setState({ resultSearch: data.results });
        });
    } else {
      this.setState({ resultSearch: [] });
    }
  };

  handleChange = (event) => {
    const title = event.target.value;
    this.setState({ title, idS: 0 });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { counter, title, idS } = this.state;
    const { serieSearch } = this.props;
    if (counter < 3) {
      if (idS !== 0 && title.length >= 1) {
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
          placeHolder: placeHolderInit[counter],
          title: "",
        });
      } else {
        this.setState({ error: "Ooooops" });
      }
    } else {
      const newCounter = 0;
      this.setState({
        counter: newCounter + 1,
        error: "",
        placeHolder: placeHolderInit[newCounter],
        title: "",
      });
    }
  };

  handleClick = (findId) => {
    const { resultSearch } = this.state;
    const eureka = resultSearch[findId].name;
    console.log("clic");
    this.setState({
      title: eureka,
      idS: resultSearch[findId].id,
      resultSearch: [],
    });
  };

  render() {
    const { title, resultSearch, placeHolder, error } = this.state;
    const { handleSubmit, handleChange, handleClick } = this;

    return (
      <div className="serie-select">
        <form onSubmit={handleSubmit} className="form-Autosuggest">
          <label htmlFor="title">
            <input
              placeholder={placeHolder}
              id="title"
              name="title"
              type="text"
              value={title}
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
}
Autosuggest.propTypes = {
  serieSearch: PropTypes.shape({
    idS1: PropTypes.number,
    idS2: PropTypes.number,
  }).isRequired,
};
export default Autosuggest;
