import React from "react";
import "./FicheTech.css";

function FicheTech() {
  return (
    <section className="display-FicheTech">
      <img
        src="https://image.tmdb.org/t/p/w400/eDlCaXdC5Z8elYuRto7pPNDb3ho.jpg"
        alt="Casa de Papel"
      />
      <div className="description-FicheTech">
        <div>
          <div>
            <h5>Casa de papel</h5>
            <p>(2017) - United States</p>
          </div>
          <div className="tag-FicheTech">
            <p className="uniqueTag-FicheTech">Action</p>
            <p className="uniqueTag-FicheTech">Aventure</p>
          </div>
          <p className="overview-FicheTech">
            Huit voleurs font une prise dotages dans la Maison royale de la
            Monnaie dEspagne, tandis quun génie du crime manipule la police pour
            mettre son plan à exécution.
          </p>
        </div>
        <div className="baseline-FicheTech">
          <div className="note-FicheTech">
            <p className="note-principale-FicheTech">8,7</p>
            <p>/ 10</p>
          </div>
          <a href="https://www.themoviedb.org/?language=fr" target="blank">
            <button type="button" className="button-FicheTech">
              En savoir plus
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FicheTech;
