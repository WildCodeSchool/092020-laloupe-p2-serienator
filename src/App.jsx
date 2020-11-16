import React from "react";
import axios from "axios";
import MatchmakingMobile from "./components/MatchmakingMobile";
import Matchmaking from "./components/Matchmaking";
import Header from "./components/Header";
import NosReco from "./components/NosReco";
import FicheTech from "./components/FicheTech";
import Lucky from "./components/Lucky";
import "./App.css";
import imgDefault from "./images/questioncard3.jpeg";
import loadingScreen from "./images/loading-screen.gif";
import offScreen from "./images/screen-tv-off.jpg";
import glitchScreen from "./images/screen-tv-glitch800.webp";
import successScreen from "./images/success.gif";

const baseImg = "https://image.tmdb.org/t/p/w200";
const placeHolderInit = [
  "Entre ta 1ère Série",
  "Entre ta 2ème Série",
  "cliquer sur Réinitialiser pour réessayer",
];
const buttonTextInit = ["1ère Série", "2ème Série", "Réinitialiser"];
const buttonClassInit = ["Btnserie1", "Btnserie2", "Btnserie1"];
const disabledInit = [false, false, "disabled"];
const screenStep = [offScreen, glitchScreen, loadingScreen, successScreen];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serie: {
        idS: 0,
        poster_path: "",
        name: "",
        genres: "",
        original_language: "",
        keywords: "",
      },
      serieSearch: [
        {
          idS: 0,
          poster_path: imgDefault,
          name: "question mark card",
          genres: "",
          original_language: "",
          keywords: "",
        },
        {
          idS: 0,
          poster_path: imgDefault,
          name: "question mark card",
          genres: "",
          original_language: "",
          keywords: "",
        },
      ],
      counter: 0,
      screen: offScreen,
      error: "",
      inputValue: "",
      disabled: disabledInit[0],
      buttonText: buttonTextInit[0],
      buttonClass: buttonClassInit[0],
      placeHolder: placeHolderInit[0],
      resultSearch: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, serie } = this.state;
    if (prevState.inputValue !== inputValue && serie.idS === 0) {
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

  handleClick = (findId) => {
    const { resultSearch } = this.state;
    const eureka = resultSearch[findId].name;
    const poster = baseImg + resultSearch[findId].poster_path;
    const genreString = resultSearch[findId].genre_ids.join("||");
    this.setState({
      inputValue: eureka,
      serie: {
        idS: resultSearch[findId].id,
        poster_path: poster,
        name: resultSearch[findId].name,
        original_language: resultSearch[findId].original_language,
        genres: genreString,
      },
      resultSearch: [],
    });
  };

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      error: "",
      serie: { idS: 0 },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { inputValue, serie, serieSearch, counter } = this.state;
    if (counter < 2) {
      if (serie.idS !== 0 && inputValue.length >= 1) {
        if (counter === 0) {
          serieSearch[0] = serie;
        } else if (counter === 1) {
          serieSearch[1] = serie;
        }
        const newCounter = counter + 1;
        this.setState({
          counter: newCounter,
          serie: {
            idS: 0,
            poster_path: "",
            name: "",
            genres: "",
            original_language: "",
            keywords: "",
          },
          error: "",
          disabled: disabledInit[newCounter],
          buttonText: buttonTextInit[newCounter],
          buttonClass: buttonClassInit[newCounter],
          placeHolder: placeHolderInit[newCounter],
          screen: screenStep[newCounter],
          inputValue: "",
        });
      } else {
        this.setState({ error: "Ooooops" });
      }
    } else {
      const newCounter = 0;
      this.setState({
        counter: newCounter,
        serieSearch: [
          {
            idS: 0,
            poster_path: imgDefault,
            name: "question mark card",
            genres: "",
            original_language: "",
            keywords: "",
          },
          {
            idS: 0,
            poster_path: imgDefault,
            name: "question mark card",
            genres: "",
            original_language: "",
            keywords: "",
          },
        ],
        serie: {
          idS: 0,
          poster_path: "",
          name: "",
          genres: "",
          original_language: "",
          keywords: "",
        },
        error: "",
        disabled: disabledInit[newCounter],
        buttonText: buttonTextInit[newCounter],
        buttonClass: buttonClassInit[newCounter],
        placeHolder: placeHolderInit[newCounter],
        screen: screenStep[newCounter],
        inputValue: "",
      });
    }
  };

  render() {
    const {
      placeHolder,
      inputValue,
      error,
      disabled,
      buttonClass,
      buttonText,
      resultSearch,
      screen,
      serieSearch,
    } = this.state;
    return (
      <div>
        <Header
          placeHolder={placeHolder}
          inputValue={inputValue}
          error={error}
          disabled={disabled}
          buttonClass={buttonClass}
          buttonText={buttonText}
          resultSearch={resultSearch}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleClick={this.handleClick}
        />
        <Matchmaking screen={screen} serieSearch={serieSearch} />
        <Lucky />
        <NosReco />
        <FicheTech />
        <MatchmakingMobile serieSearch={serieSearch} />
      </div>
    );
  }
}

export default App;
