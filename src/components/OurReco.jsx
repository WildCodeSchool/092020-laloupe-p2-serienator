import React from "react";
import MapReco from "./MapReco";
import testPatern from "../images/test-pattern-152459_960_720.webp";
import "./OurReco.css";

const baseImg = "https://image.tmdb.org/t/p/w200";

const series = [
  {
    original_name: "True Detective",
    id: 46648,
    name: "True Detective",
    vote_count: 1593,
    vote_average: 8.3,
    first_air_date: "2014-01-12",
    poster_path: "/aowr4xpLP5sRCL50TkuADomJ98T.jpg",
    genre_ids: [18],
    original_language: "en",
    backdrop_path: "/2Ahm0YjLNQKuzSf9LOkHrXk8qIE.jpg",
    overview:
      "À chaque saison, son histoire. True Detective nous embarque dans des récits policiers mêlant mysticisme, réflexions philosophiques et personnages torturés.",
    origin_country: ["US"],
    popularity: 37.4,
  },
  {
    backdrop_path: "/ecT6wR78bXHLbqAwtLNMDVirdit.jpg",
    first_air_date: "2006-10-01",
    genre_ids: [80, 18, 9648],
    id: 1405,
    name: "Dexter",
    origin_country: ["US"],
    original_language: "en",
    original_name: "Dexter",
    overview:
      "Brillant expert scientifique du service médico-légal de la police de Miami, Dexter Morgan est spécialisé dans l'analyse de prélèvements sanguins. Mais Dexter cache un terrible secret  : c'est également un tueur en série !\n\nUn serial killer pas comme les autres, avec sa propre vision de la justice, qui, grâce au code fourni par son père adoptif, ne s'en prend qu' à des victimes coupables de meurtres affreux ou de délits répréhensibles. Mais Dexter n'attend pas que la justice les libère ou les relâche faute de preuves, il les assassine avant même que la police ne remonte jusqu'à eux. Sa soeur Debra travaille dans le même commissariat et n'a de cesse que de traquer tous les meurtriers quelqu'ils soient... sans savoir qu'elle en fréquente un tous les jours !",
    poster_path: "/p4rx3FW14Ayx1dLHJQBqDGw9YiX.jpg",
    vote_average: 8.1,
    vote_count: 2018,
    popularity: 90.195,
  },
  {
    original_name: "Marcella",
    id: 66023,
    name: "Marcella",
    vote_count: 94,
    vote_average: 6.9,
    first_air_date: "2016-04-04",
    poster_path: "/yyEjwLzlfso0V5qwAwcQRbuE31R.jpg",
    genre_ids: [18],
    original_language: "en",
    backdrop_path: "/qlL1M4wGWjFTm5IdX3Vb581tOPY.jpg",
    overview:
      "Malgré une disparition tragique, ses pertes de mémoire et les nombreux défis du quotidien, cette détective londonienne ne recule devant rien pour traquer les meurtriers.",
    origin_country: ["GB"],
    popularity: 13.598,
  },
  {
    original_name: "Unforgotten",
    id: 62505,
    name: "Unforgotten : le passé déterré",
    vote_count: 57,
    vote_average: 7.8,
    first_air_date: "2015-10-08",
    poster_path: "/2oGdGsrNhODGTFQleGbNcN4XNNJ.jpg",
    genre_ids: [80, 18, 9648],
    original_language: "en",
    backdrop_path: "/kXkt4SQHnpX0EpvbtWrRCrG5B6.jpg",
    overview:
      "La police réouvre l'enquête sur l'assassinat d'un garçon tué en 1976, lorsque des os sont retrouvés sous les fondations d'une maison démolie.",
    origin_country: ["GB"],
    popularity: 8.783,
  },
  {
    backdrop_path: "/gi8T3XASIAL3Ba5HXnIujVMuIBl.jpg",
    first_air_date: "2014-10-06",
    genre_ids: [80, 18, 9648],
    id: 61457,
    name: "Grantchester",
    origin_country: ["GB"],
    original_language: "en",
    original_name: "Grantchester",
    overview:
      "En 1953, un jeune vicaire fait équipe avec un inspecteur de police pour résoudre des crimes dans la ville de Grantchester, située dans le comté de Cambridgeshire en Angleterre. Petit à petit, les deux hommes se lient d'amitié, tout en s'apportant mutuellement dans le travail.",
    poster_path: "/8pt9v09r85ZzI6g8ggYDAf92t58.jpg",
    vote_average: 7.4,
    vote_count: 62,
    popularity: 9.183,
  },
];

function OurReco() {
  return (
    <section className="display-OurReco">
      <div>
        <h2>Voici nos recommandations</h2>
        <p className="subtitle-OurReco">Les avez-vous déjà vues ?</p>
      </div>
      <div className="map-OurReco">
        {series.map((serie) => (
          <MapReco
            key={serie.id}
            posterPath={
              serie.poster_path ? baseImg + serie.poster_path : testPatern
            }
            name={serie.name}
            year={serie.first_air_date.substr(0, 4)}
          />
        ))}
      </div>
    </section>
  );
}

export default OurReco;
