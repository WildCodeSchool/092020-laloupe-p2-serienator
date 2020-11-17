import React from "react";
import axios from "axios";
import MatchmakingMobile from "./components/MatchmakingMobile";
import Matchmaking from "./components/Matchmaking";
import Header from "./components/Header";
import OurReco from "./components/OurReco";
import Lucky from "./components/Lucky";
import Footer from "./components/Footer";
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
      },
      keywords: "",
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
      recoSeries: [],
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
    this.getKeywords(resultSearch[findId].id);
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
    const { inputValue, serie, serieSearch, counter, keywords } = this.state;
    if (counter < 2) {
      if (serie.idS !== 0 && inputValue.length >= 1) {
        if (counter === 0) {
          serieSearch[0] = serie;
          serieSearch[0].keywords = keywords;
        } else if (counter === 1) {
          serieSearch[1] = serie;
          serieSearch[1].keywords = keywords;
          this.algoMatchmaking();
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
          },
          keywords: "",
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
        keywords: "",
        recoSeries: [],
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

  getKeywords = (id) => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}/keywords?api_key=590e90c03c55c8852b1ed2de7215607f`
      )
      .then((res) => res.data)
      .then((data) => {
        const keywords = data.results.map((keyword) => {
          return keyword.id;
        });
        const keywordString = keywords.join("||");
        this.setState({ keywords: keywordString });
      });
  };

  algoMatchmaking = () => {
    const { serieSearch, recoSeries } = this.state;
    axios
      .get(
        `https://api.themoviedb.org/3/discover/tv?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_keywords=${serieSearch[0].keywords}||${serieSearch[1].keywords}&with_genres=${serieSearch[0].genres}||${serieSearch[1].genres}&with_original_language=${serieSearch[0].original_language}||${serieSearch[1].original_language}&vote_count.gte=100`
      )
      .then((res) => {
        const recommandedSeries = [];
        const { results } = res.data;
        for (let i = 0; i < results.length; i += 1) {
          if (
            results[i].id === serieSearch[0].idS ||
            results[i].id === serieSearch[1].idS
          ) {
            results.splice(i, 1);
          }
        }
        recoSeries.push(results.splice(0, 5));
        this.setState({ recoSeries: recommandedSeries });
        console.log(recoSeries);
      });
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
        <OurReco />
        <MatchmakingMobile serieSearch={serieSearch} />
        <Footer />
      </div>
    );
  }
}

export default App;
