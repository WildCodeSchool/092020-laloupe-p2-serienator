import React from 'react'
import MapReco from "./MapReco"
import FicheTech from "./FicheTech"
import PropTypes from "prop-types";
import "./Top3Thibaut.css"


const baseImg = "https://image.tmdb.org/t/p/w200";

const series = [ 
  
  {
    original_name: "Final Space",
    id: 74387,
    name: "Final Space",
    vote_count: 300,
    vote_average: 8.4,
    first_air_date: "2018-02-26",
    poster_path: "/zT6tXWsJoBOWJT1PeUEKLTFOoHh.jpg",
    genre_ids: [16, 10759, 10765],
    original_language: "en",
    backdrop_path: "/5tVBWjENNERVBstTCEPBKKlViOD.jpg",
    overview:
      "Après avoir rencontré un alien adorable capable de détruire les planètes, un prisonnier humain se lance dans une aventure interstellaire pour sauver l'univers.",
    origin_country: ["US"],
    popularity: 31.287,
  },
  {
    backdrop_path: "/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
    first_air_date: "2019-11-12",
    genre_ids: [10765, 10759, 37],
    id: 82856,
    name: "The Mandalorian",
    origin_country: ["US"],
    original_language: "en",
    original_name: "The Mandalorian",
    overview:
      "Après les aventures de Jango et Boba Fett, un nouveau héros émerge dans l'univers Star Wars. L'intrigue, située entre la chute de l'Empire et l'émergence du Premier Ordre, suit les voyages d'un chasseur de primes solitaire dans les contrées les plus éloignées de la Galaxie, loin de l’autorité de la Nouvelle République.",
    poster_path: "/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    vote_average: 8.5,
    vote_count: 2795,
    popularity: 1844.008,
  },
  {
    original_name: "Westworld",
    id: 66023,
    name: "Westworld",
    vote_count: 3146,
    vote_average: 8.2,
    first_air_date: "2016-10-02",
    poster_path: "/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg",
    genre_ids: [18],
    original_language: "en",
    backdrop_path: "/uRojJ77wDQdzzVvP1VDjnvCWiDb.jpg",
    overview:
      "À Westworld, un parc d'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l'Ouest. Dolores, Teddy et bien d'autres sont des androïdes à apparence humaine créés pour donner l'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l'occasion de laisser libre-cours à leurs fantasmes. Cet univers bien huilé est mis en péril lorsqu'à la suite d'une mise à jour, quelques robots commencent à adopter des comportements imprévisibles, voire erratiques. En coulisses, l'équipe, qui tire les ficelles de ce monde alternatif, s'inquiète de ces incidents de plus en plus nombreux. Les enjeux du programme Westworld étant énormes, la Direction ne peut se permettre une mauvaise publicité qui ferait fuir ses clients. Que se passe-t-il réellement avec les androïdes ré-encodés ?",
    origin_country: ["US"],
    popularity: 90.483,
  }
];

class Top3Thibaut extends React.Component {
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
            {isLoading ? <FicheTech resultat={resultat} idKey={idKey} closePopUp={closePopUp}
            popUp={popUp} /> : <></>}
                                 
      </section>
    );
  }
}

Top3Thibaut .propTypes = {
  closePopUp: PropTypes.func.isRequired,
  popUp: PropTypes.bool.isRequired,
};


export default Top3Thibaut;