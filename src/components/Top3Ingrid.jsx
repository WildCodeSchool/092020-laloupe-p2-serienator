import React from "react";
import "./Top3Perso.css";
import arrow from "../images/arrow-204-xxl.png";
import MapReco from "./MapReco";
import FicheTech from "./FicheTech";

const baseImg = "https://image.tmdb.org/t/p/w200";

const series = [
  {
    original_name: "サイコパス",
    id: 43865,
    name: "Psycho-Pass",
    vote_count: 0,
    vote_average: 7.8,
    first_air_date: "2012-10-12",
    poster_path: "/aX6S3P8xiz9nJwXjaka5e9kT6f4.jpg",
    genre_ids: [10765],
    original_language: "ja",
    backdrop_path: "/zrW7b4AQnX7KeZUYsmpdV3z5qlp.jpg",
    overview:
      "En l'an 2113, on scanne les cerveaux pour connaître le potentiel criminel des gens. Quiconque présente des tendances considérées répréhensibles est pourchassé, voire tué.",
    origin_country: ["JP"],
    popularity: 27.645,
  },
  {
    backdrop_path: "/5hS2OIuZSKGkR8R5l3bY5zh04Ce.jpg",
    first_air_date: "2006-10-01",
    genre_ids: [10759, 16, 18, 10765],
    id: 31724,
    name: "Code Geass: Lelouch of the Rebellion",
    origin_country: ["JP"],
    original_language: "ja",
    original_name: "コードギアス 反逆のルルーシュ",
    overview:
      "Nous sommes en 2017. Sept ans se sont écoulés depuis que le Nouvel Empire de Britannia a déclaré la guerre au Japon. Ce dernier, n’ayant pu résister aux robots de combat de l’Empire (appelés Nightmares), est devenu un territoire de l’Empire connu sous le nom de Zone 11. Lelouch, jeune étudiant qui se joue des nobles, se retrouve un jour impliqué dans le vol d’une arme chimique, qui s’avère être en réalité une fille.",
    poster_path: "/8p3HXHOQXjMpU9gAkZVAqozhDzQ.jpg",
    vote_average: 6.8,
    vote_count: 2,
    popularity: 24.161,
  },
  {
    original_name: "進撃の巨人",
    id: 1429,
    name: "L'Attaque des Titans",
    vote_count: 2153,
    vote_average: 8.7,
    first_air_date: "2013-04-06",
    poster_path: "/hqRb1wyIVsaMukZElPBUXoJPqrR.jpg",
    genre_ids: [16, 10765, 18, 10768, 9648],
    original_language: "ja",
    backdrop_path: "/2b0s0iMNl9CgrCMz0VGKlMw3vZw.jpg",
    overview:
      "Dans un monde ravagé par des titans mangeurs d’homme depuis plus d’un siècle, les rares survivants de l’Humanité n’ont d’autre choix pour survivre que de se barricader dans une cité-forteresse. Le jeune Eren, témoin de la mort de sa mère dévorée par un titan, n’a qu’un rêve : entrer dans le corps d’élite chargé de découvrir l’origine des titans, et les annihiler jusqu’au dernier…",
    origin_country: ["JP"],
    popularity: 67.814,
  },
];

class Top3Ingrid extends React.Component {
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

export default Top3Ingrid;
