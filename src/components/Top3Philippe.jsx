import React from 'react'
import MapReco from "./MapReco"
import FicheTech from "./FicheTech"
import PropTypes from "prop-types";
import "./Top3Philippe.css"


const baseImg = "https://image.tmdb.org/t/p/w200";

const series = [ 
  
  {
    original_name: "Fargo",
    id: 60622,
    name:  "Fargo",
    vote_count: 1385,
    vote_average: 8.2,
    first_air_date: "2014-04-15",
    poster_path: "/9ZIhl17uFlXCNUputSEDHwZYIEJ.jpg",
    genre_ids: [18, 80],
    original_language: "en",
    backdrop_path: "/xcJLhsFGVC4LVvucSqVXks2mnUJ.jpg",
    overview:
      "En 2006, l'arrivée de Lorne Malvo à Bemidji, une petite ville du Minnesota, ne passe pas inaperçue, notamment pour Lester Nygaard, un courtier qui se retrouve entraîné dans une spirale de violence. Molly Solverson et Gus Grimly enquêtent eux sur plusieurs meurtres. Une trentaine d'année auparavant, un policier, de retour au pays après la guerre du Vietnam, mène les investigations après un meurtre.",
    origin_country: ["US"],
    popularity: 69.211
  },
  {
    backdrop_path: "/ecT6wR78bXHLbqAwtLNMDVirdit.jpg",
    first_air_date: "2006-10-01",
    genre_ids: [80, 18, 9648],
    id: 94154,
    name: "El Dragón: Return of a Warrior",
    origin_country: ["US"],
    original_language: ["es,en"],
    original_name: "El Dragón",
    overview:
      "A Tokyo business man returns to his home country of Mexico where he must battle rivals to replace his grandfather as the head of a cartel.",
    poster_path: "/1eKrOjS7OSOjgmEIdCNmKEEItKJ.jpg",
    vote_average: 7.6,
    vote_count: 207,
    popularity: 25.189,
  },
  {
    original_name: "Taboo",
    id: 65708,
    name: "Taboo",
    vote_count: 618,
    vote_average: 7.9,
    first_air_date: "2017-01-07",
    poster_path: "/om1wVOuEtwH3krHutIWO9sJzkS5.jpg",
    genre_ids: [18],
    original_language: "en",
    backdrop_path: "/uFwMLQdiHMNa0qmnNVZzoDC7BPw.jpg",
    overview:
      "Considéré comme mort depuis des années, James Keziah Delaney refait surface à Londres en 1814, après 10 ans passés en Afrique. De retour en possession de diamants acquis illégalement et bien décidé à venger la mort de son père, il va refuser de vendre ce qu'il reste de l'héritage familial à la Compagnie britannique des Indes orientales et se mettre en tête de bâtir son propre empire de négoce et de transport. Mais James, qui va rapidement comprendre qu'il a de nombreux ennemis, va devoir naviguer bien des eaux troubles pour rester en vie et parvenir à ses fins.",
    origin_country: ["GB"],
    popularity: 19.26,
  }
];

class Top3Philippe extends React.Component {
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
    const {closePopUp,popUp} = this.props;
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
                                          posterPath={
                                            serie.poster_path ? baseImg + serie.poster_path : testPatern
                                          }
                                          name={serie.name}
                                          year={serie.first_air_date.substr(0, 4)}
                                          key={serie.id}
                                        />
                                  </button>
                                  
                      ))}
            </div>
            {isLoading ? <FicheTech resultat={resultat} idKey={idKey} closePopUp={closePopUp} popUp={popUp} /> : <></>}
                                 
      </section>
    );
  }
}

Top3Philippe.propTypes = {
  closePopUp: PropTypes.func.isRequired,
  popUp: PropTypes.bool.isRequired,
};

export default Top3Philippe;