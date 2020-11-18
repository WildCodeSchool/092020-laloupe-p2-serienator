import React from "react";
import PropTypes from "prop-types";
import MapReco from "./MapReco";
import testPatern from "../images/test-pattern-152459_960_720.webp";
import "./OurReco.css";
import FicheTech from "./FicheTech";

const baseImg = "https://image.tmdb.org/t/p/w200";

class OurReco extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      idKey: 0,
    };
  }

  handleClick = (index) => {
    this.setState({
      idKey: index,
      isLoading: true,
    });
  };

  render() {
    const { handleClick } = this;
    const { idKey, isLoading } = this.state;
    const { recoSeries } = this.props;
    return (
      <section className="display-OurReco">
        <div>
          <h2>Voici nos recommandations</h2>
          <p className="subtitle-OurReco">Les avez-vous déjà vues ?</p>
        </div>
        <div className="map-OurReco">
          {recoSeries.map((serie, index) => {
            return (
              <button
                type="button"
                className="btn-OurReco"
                key={serie.id}
                onClick={() => handleClick(index)}
              >
                <MapReco
                  posterPath={
                    serie.poster_path ? baseImg + serie.poster_path : testPatern
                  }
                  name={serie.name}
                  year={serie.first_air_date.substr(0, 4)}
                  key={serie.id}
                />
              </button>
            );
          })}
        </div>
        {isLoading ? <FicheTech resultat={recoSeries} idKey={idKey} /> : <></>}
      </section>
    );
  }
}

OurReco.propTypes = {
  recoSeries: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
};

export default OurReco;
