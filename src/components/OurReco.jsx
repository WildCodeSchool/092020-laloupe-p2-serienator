import React from "react";
import PropTypes from "prop-types";
import MapReco from "./MapReco";
import testPatern from "../images/test-pattern-152459_960_720.webp";
import "./OurReco.css";
import FicheTech from "./FicheTech";

const baseImg = "https://image.tmdb.org/t/p/w200";

const OurReco = React.forwardRef(
  ({ recoSeries, idKey, isLoading, handleClick }, ref) => {
    return (
      <section className="display-OurReco" ref={ref}>
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
);

OurReco.propTypes = {
  idKey: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  recoSeries: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default OurReco;
