import React from "react";
import axios from "axios";
import "./FicheTech.css";
import PropTypes from "prop-types";

const baseImg = "https://image.tmdb.org/t/p/w300";

class FicheTech extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tvId: [],
      filteredGenre: [],
    };
  }

  componentDidMount() {
    this.getApiGenre();
    this.scrollLock();
  }

  componentDidUpdate(prevProps) {
    const { idKey, popUp } = this.props;
    const { tvId } = this.state;
    if (prevProps.idKey !== idKey || prevProps.popUp !== popUp) {
      this.getGenre(tvId);
      this.scrollLock();
    }
  }

  scrollLock = () => {
    const { popUp } = this.props;
    const scrollPos = document.body;
    if (popUp === true) {
      scrollPos.style.overflowY = "hidden";
    } else {
      scrollPos.style.overflowY = "initial";
    }
  };

  getApiGenre = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/tv/list?api_key=590e90c03c55c8852b1ed2de7215607f&language=fr"
      )
      .then((response) => response.data)
      .then((data) => {
        this.getGenre(data.genres);
      });
  };

  getGenre = (genreId) => {
    let counter = 0;
    let searchGenre = 0;
    const tabGenre = [];
    const { idKey, resultat } = this.props;
    const { tvId } = this.state;
    for (let i = 0; i < resultat[idKey].genre_ids.length; i += 1) {
      searchGenre = resultat[idKey].genre_ids[counter];
      for (let j = 0; j < genreId.length; j += 1) {
        if (genreId[j].id === searchGenre) {
          tabGenre.push(genreId[j].name);
        }
      }
      counter += 1;
    }
    if (genreId.length !== tvId.length) {
      this.setState({
        filteredGenre: tabGenre,
        tvId: genreId,
      });
    } else {
      this.setState({
        filteredGenre: tabGenre,
      });
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

  handleKeyPress = (event) => {
    const { closePopUp } = this.props;
    if (event.key === "Enter") {
      closePopUp();
    }
  };

  render() {
    const { resultat, idKey, closePopUp, popUp } = this.props;
    const { filteredGenre } = this.state;
    const { handleKeyPress, noteColor } = this;
    return (
      <section className={popUp ? "display-FicheTech" : "closePopUp"}>
        <button
          type="button"
          className="closeCross"
          onClick={closePopUp}
          onKeyPress={handleKeyPress}
        >
          <p className="closeCrossImg">&#215;</p>
        </button>
        <div className="card-imgFicheTech">
          <img
            src={baseImg + resultat[idKey].poster_path}
            alt={resultat[idKey].name}
            className="imgFicheTech"
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
  closePopUp: PropTypes.func.isRequired,
  popUp: PropTypes.bool.isRequired,
};

export default FicheTech;
