import React from "react";
import axios from "axios";
import ResultAuto from "./ResultAuto";
import "./Autosuggest.css";
import testPatern from "../images/test-pattern-152459_960_720.webp";

let resultSearch = [];
const baseImg = "https://image.tmdb.org/t/p/w92";

class Autosuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  handleChange = (event) => {
    const title = event.target.value;
    if (title.length >= 1) {
      const researchAPI =
        "https://api.themoviedb.org/3/search/tv?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr&page=1&include_adult=false&query=";
      axios
        .get(researchAPI + title)
        .then((response) => response.data)
        .then((data) => {
          resultSearch = data.results;
          console.log(resultSearch);
        });
    } else if (resultSearch === 0) {
      resultSearch = [];
    } else {
      resultSearch = [];
    }
    this.setState({ title });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleClick = (findId) => {
    const eureka = resultSearch[findId].name;
    this.setState({ title: eureka });
  };

  render() {
    const { title } = this.state;
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
