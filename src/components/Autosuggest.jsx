import React from "react";
import axios from "axios";
import ResultAuto from "./ResultAuto";
import "./Autosuggest.css";
import testPatern from "../images/test-pattern-152459_960_720.webp";

const baseImg = "https://image.tmdb.org/t/p/w92";

class Autosuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", resultSearch: [], idS: 0 };
  }

  componentDidUpdate(prevProps, prevState) {
    const { title } = this.state;
    if (prevState.title !== title) {
      this.apiCall();
    }
  }

  apiCall = () => {
    const { title } = this.state;
    const researchAPI =
      "https://api.themoviedb.org/3/search/tv?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr&page=1&include_adult=false&query=";

    axios
      .get(researchAPI + title)
      .then((response) => response.data)
      .then((data) => {
        this.setState({ resultSearch: data.results });
      });
  };

  handleChange = (event) => {
    const title = event.target.value;
    this.setState({ title });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClick = (findId) => {
    const { resultSearch, idS } = this.state;
    const eureka = resultSearch[findId].name;
    console.log("1", idS);
    this.setState({ title: eureka, idS: resultSearch[findId].id });
    console.log("2", idS);
  };

  render() {
    const { title, resultSearch } = this.state;
    const { handleSubmit, handleChange, handleClick } = this;
    return (
      <div>
        <form onSubmit={handleSubmit} className="form-Autosuggest">
          <label htmlFor="title">
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              onChange={handleChange}
            />
          </label>
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

export default Autosuggest;
