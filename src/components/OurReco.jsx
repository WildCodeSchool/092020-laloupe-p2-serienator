import React from "react";
import PropTypes from "prop-types";
import MapReco from "./MapReco";
import testPatern from "../images/test-pattern-152459_960_720.webp";
import "./OurReco.css";
import FicheTech from "./FicheTech";
import arrow from "../images/arrow-204-xxl.png";

const baseImg = "https://image.tmdb.org/t/p/w200";

class OurReco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: {
        previous1: 3,
        previous2: 4,
        current: 0,
        next1: 1,
        next2: 2,
      },
    };
    this.recoDiv = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { recoSeries } = this.props;
    if (prevProps.recoSeries !== recoSeries) {
      if (this.recoDiv.current) {
        this.recoDiv.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }

  clickPrevious = () => {
    const { selectedIndex } = this.state;
    this.setState({
      selectedIndex: {
        previous1:
          selectedIndex.previous1 === 4 ? 0 : selectedIndex.previous1 + 1,
        previous2:
          selectedIndex.previous2 === 4 ? 0 : selectedIndex.previous2 + 1,
        current: selectedIndex.current === 4 ? 0 : selectedIndex.current + 1,
        next1: selectedIndex.next1 === 4 ? 0 : selectedIndex.next1 + 1,
        next2: selectedIndex.next2 === 4 ? 0 : selectedIndex.next2 + 1,
      },
    });
  };

  clickNext = () => {
    const { selectedIndex } = this.state;
    this.setState({
      selectedIndex: {
        previous1:
          selectedIndex.previous1 === 0 ? 4 : selectedIndex.previous1 - 1,
        previous2:
          selectedIndex.previous2 === 0 ? 4 : selectedIndex.previous2 - 1,
        current: selectedIndex.current === 0 ? 4 : selectedIndex.current - 1,
        next1: selectedIndex.next1 === 0 ? 4 : selectedIndex.next1 - 1,
        next2: selectedIndex.next2 === 0 ? 4 : selectedIndex.next2 - 1,
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
    if (selectedIndex.next2 === cardIndex) {
      return "next2";
    }
    if (selectedIndex.previous1 === cardIndex) {
      return "previous1";
    }
    if (selectedIndex.previous2 === cardIndex) {
      return "previous2";
    }
    return null;
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.clickNext();
    }
  };

  render() {
    const { clickPrevious, clickNext, determineClass, handleKeyPress } = this;
    const { selectedIndex } = this.state;
    const { idKey, isLoading, recoSeries, handleClick } = this.props;
    return (
      <section
        className={recoSeries[0] ? "display-OurReco" : "none"}
        ref={this.recoDiv}
      >
        <div>
          <h2>Voici nos recommandations</h2>
          <p className="subtitle-OurReco">Les avez-vous déjà vues ?</p>
        </div>
        <div className="scene">
          <button
            type="button"
            className="previous"
            onClick={clickPrevious}
            onKeyPress={handleKeyPress}
          >
            <img src={arrow} alt="previous" className="arrow" />
          </button>
          <div className="map-OurReco">
            {recoSeries.map((serie, index) => (
              <button
                type="button"
                className={`btn-OurReco ${determineClass(
                  selectedIndex,
                  index
                )}`}
                onClick={() => handleClick(index)}
                key={serie.id}
              >
                <MapReco
                  posterPath={
                    serie.poster_path ? baseImg + serie.poster_path : testPatern
                  }
                  name={serie.name}
                  year={serie.first_air_date.substr(0, 4)}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="next"
            onClick={clickNext}
            onKeyPress={handleKeyPress}
          >
            <img src={arrow} alt="next" className="arrow" />
          </button>
        </div>
        {isLoading ? <FicheTech resultat={recoSeries} idKey={idKey} /> : <></>}
      </section>
    );
  }
}

OurReco.propTypes = {
  idKey: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  recoSeries: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default OurReco;
