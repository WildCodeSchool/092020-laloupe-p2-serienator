import React from "react";
import "./Top3Perso.css";
import arrow from "../images/arrow-204-xxl.png";
import MapReco from "./MapReco";
import FicheTech from "./FicheTech";

const baseImg = "https://image.tmdb.org/t/p/w200";

const series = [
  {
    original_name: "Breaking Bad",
    id: 1396,
    name: "Breaking Bad",
    vote_average: 9.1,
    vote_count: 93,
    first_air_date: "2008-01-20",
    poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    genre_ids: [18],
    original_language: "en",
    backdrop_path: "/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    overview:
      "Un professeur de chimie de lycée mourant d'un cancer fait équipe avec un ancien élève pour assurer l'avenir de sa famille en fabriquant et en vendant de la méthamphétamine en cristaux.",
    origin_country: ["US"],
    popularity: 195.725,
  },
  {
    backdrop_path: "/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg",
    poster_path: "/jAGeeCuAh4Id4p78BOYsSFXLrC8.jpg",
    first_air_date: "2017-05-02",
    genre_ids: [80, 18, 9648],
    id: 71446,
    name: "la Casa de Papel",
    origin_country: ["ES"],
    original_language: "es",
    original_name: "La casa de papel",
    overview:
      "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
    vote_average: 8.3,
    vote_count: 11150,
    popularity: 220.031,
  },
  {
    original_name: "Orange Is the New Black",
    id: 1424,
    name: "Orange Is the New Black",
    vote_count: 1326,
    vote_average: 7.6,
    first_air_date: "2019-07-26",
    poster_path: "/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg",
    genre_ids: [18],
    original_language: "en",
    backdrop_path: "/sjd4JTiJt4wGi98DwnTyK8Vo4DD.jpg",
    overview:
      "Entre les murs de la prison pour femmes de Litchfield, la vie n’est pas rose tous les jours. Rattrapées par le passé, des détenues venues d’horizons divers cohabitent dans cette société en vase clos.",
    origin_country: ["US"],
    popularity: 13.598,
  },
];

class Top3Damien extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      popUp: true,
      idKey: 0,
      resultat: series,
      selectedIndex: {
        previous1: 2,
        current: 0,
        next1: 1,
      },
    };
  }

  closePopUp = () => {
    const { popUp } = this.state;
    if (popUp === true) {
      this.setState({ popUp: false });
    }
  };

  clickPrevious = () => {
    const { selectedIndex } = this.state;
    this.setState({
      selectedIndex: {
        previous1:
          selectedIndex.previous1 === 2 ? 0 : selectedIndex.previous1 + 1,
        current: selectedIndex.current === 2 ? 0 : selectedIndex.current + 1,
        next1: selectedIndex.next1 === 2 ? 0 : selectedIndex.next1 + 1,
      },
    });
  };

  clickNext = () => {
    const { selectedIndex } = this.state;
    this.setState({
      selectedIndex: {
        previous1:
          selectedIndex.previous1 === 0 ? 2 : selectedIndex.previous1 - 1,
        current: selectedIndex.current === 0 ? 2 : selectedIndex.current - 1,
        next1: selectedIndex.next1 === 0 ? 2 : selectedIndex.next1 - 1,
      },
    });
  };

  determineClass = (selectedIndex, cardIndex) => {
    if (selectedIndex.current === cardIndex) {
      return "active";
    }
    if (selectedIndex.next1 === cardIndex) {
      return "next1";
    }
    if (selectedIndex.previous1 === cardIndex) {
      return "previous1";
    }
    return null;
  };

  handleClick = (index) => {
    this.setState({
      idKey: index,
      isLoading: true,
      popUp: true,
    });
  };

  render() {
    const {
      handleClick,
      clickNext,
      clickPrevious,
      determineClass,
      closePopUp,
    } = this;
    const { idKey, isLoading, resultat, selectedIndex, popUp } = this.state;
    return (
      <section className="bgNone">
        <div className="scene">
          <button type="button" className="previous" onClick={clickPrevious}>
            <img src={arrow} alt="previous" className="arrow" />
          </button>
          <div className="recoPerso">
            {resultat.map((serie, index) => (
              <button
                type="button"
                className={`btnTop3D ${determineClass(selectedIndex, index)}`}
                key={serie.id}
                onClick={() => handleClick(index)}
              >
                <MapReco
                  posterPath={baseImg + serie.poster_path}
                  name={serie.name}
                  year={serie.first_air_date.substr(0, 4)}
                  key={serie.id}
                />
              </button>
            ))}
          </div>
          <button type="button" className="next" onClick={clickNext}>
            <img src={arrow} alt="next" className="arrow" />
          </button>
        </div>
        {isLoading ? (
          <FicheTech
            resultat={resultat}
            idKey={idKey}
            closePopUp={closePopUp}
            popUp={popUp}
          />
        ) : (
          <></>
        )}
      </section>
    );
  }
}
export default Top3Damien;
