import React from "react";
import PropTypes from "prop-types";
import MapReco from "./MapReco";
import FicheTech from "./FicheTech";
import "./Top3Ingrid.css";

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
      "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
    origin_country: ["JP"],
    popularity: 67.814,
  },
];

class Top3Ingrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      idKey: 0,
      resultat: series,
    };
  }

  handleClick = (index) => {
    this.setState({
      idKey: index,
      isLoading: true,
    });
  };

  render() {
    const { closePopUp, popUp } = this.props;
    const { handleClick } = this;
    const { idKey, isLoading, resultat } = this.state;
    return (
      <section className="display-OurReco">
        <div className="recoPerso">
          {resultat.map((serie, index) => (
            <button
              type="button"
              className="btn-OurReco"
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
Top3Ingrid.propTypes = {
  closePopUp: PropTypes.func.isRequired,
  popUp: PropTypes.bool.isRequired,
};
export default Top3Ingrid;
