import React from 'react'
import MapReco from "./MapReco"
import FicheTech from "./FicheTech"
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
      "An astronaut named Gary and his planet-destroying sidekick Mooncake embark on serialized journeys through space in order to unlock the mystery of “Final Space,” the last point in the universe, if it actually does exist.",
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
      "After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.",
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
      "A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.",
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
            {isLoading ? <FicheTech resultat={resultat} idKey={idKey} /> : <></>}
                                 
      </section>
    );
  }
}

export default Top3Thibaut;