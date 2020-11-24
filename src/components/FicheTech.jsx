import React from "react";
import axios from "axios";
import "./FicheTech.css";
import PropTypes from "prop-types";
import closeCross from "../images/close_cross_icon_128690.svg";

const baseImg = "https://image.tmdb.org/t/p/w300";
// const baseBg = "https://image.tmdb.org/t/p/w780";

class FicheTech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvId: [],
      genreId: [],
      filteredGenre: [],
      popUp: true,
    };
  }

  componentDidMount() {
    this.getApiGenre();
  }

  componentDidUpdate(prevProps) {
    const { idKey } = this.props;
    if (prevProps.idKey !== idKey) {
      this.getGenre();
    }
  }

  getApiGenre = () => {
    const { idKey, resultat } = this.props;
    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          tvId: data.genres,
          genreId: resultat[idKey].genre_ids,
        });
      });
  };

  getGenre = () => {
    const { genreId, tvId } = this.state;
    let counter = 0;
    let searchGenre = 0;
    const tabGenre = [];
    const { idKey, resultat } = this.props;
    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr"
      )
      .then((response) => response.data)
      .then((data) => {
        for (let i = 0; i < genreId.length; i += 1) {
          searchGenre = genreId[counter];
          for (let j = 0; j < tvId.length; j += 1) {
            if (tvId[j].id === searchGenre) {
              tabGenre.push(tvId[j].name);
            }
          }
          counter += 1;
        }
        this.setState({
          filteredGenre: tabGenre,
          tvId: data.genres,
          genreId: resultat[idKey].genre_ids,
          popUp: true,
        });
      });
  };

  closePopUp = () => {
    const { popUp } = this.state;
    if (popUp === true) {
      this.setState({ popUp: false });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.closePopUp();
    }
  };

  noteColor = () => {
    const { resultat, idKey } = this.props;
    let noteClass = "note-inf6";
    if (resultat[idKey].vote_average >= 8) {
      noteClass = "note-sup8";
    } else if (resultat[idKey].vote_average >= 6) {
      noteClass = "note-sup6";
    }
    return noteClass;
  };

  render() {
    const { resultat, idKey } = this.props;
    const { filteredGenre, popUp } = this.state;
    const { closePopUp, handleKeyPress, noteColor } = this;
    return (
      <section className={popUp ? "display-FicheTech" : "closePopUp"}>
        <button
          type="button"
          className="closeCross"
          onClick={closePopUp}
          onKeyPress={handleKeyPress}
        >
          <img src={closeCross} alt="CloseCross" />
        </button>
        <div className="card-imgFicheTech">
          <img
            src={baseImg + resultat[idKey].poster_path}
            alt={resultat[idKey].name}
          />
        </div>
        <div className="description-FicheTech">
          <div>
            <div className="title-FicheTechMob">
              <h5>{resultat[idKey].name}</h5>
              <p>({resultat[idKey].first_air_date.substr(0, 4)})</p>
            </div>
            <ul className="tag-FicheTech">
              {filteredGenre.map((genre) => (
                <li className="uniqueTag-FicheTech">{genre}</li>
              ))}
            </ul>
            <p className="overview-FicheTech">{resultat[idKey].overview}</p>
          </div>
          <div className="baseline-FicheTech">
            <div className="note-FicheTech">
              <p className={noteColor()}>{resultat[idKey].vote_average}</p>
              <p>/ 10</p>
            </div>
            <a
              href={`https://www.themoviedb.org/tv/${resultat[idKey].id}?language=fr`}
              target="blank"
            >
              <button type="button" className="button-FicheTech">
                En savoir plus
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

FicheTech.propTypes = {
  idKey: PropTypes.number.isRequired,
  resultat: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FicheTech;
