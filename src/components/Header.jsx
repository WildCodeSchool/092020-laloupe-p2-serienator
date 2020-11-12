import React from "react";
import arrowRounded from "../images/curved-arrow.svg";
import "./Header.css";
import BtnsTop from "./BtnsTop";
import SerieForm from "./SerieForm";

function Header() {
  return (
    <header className="header">
      <div className="backgroundHeader">
        <BtnsTop />
        <h1 className="titre">Bienvenue sur Serienator,</h1>
        <p className="soustitre">
          Le robot de Match-Making de séries TV le plus performant du Web.
        </p>
        <p className="soustitre">
          Donnez lui 2 séries dès maintenant, ses recommandations seront sans
          faille !
        </p>
        <img className="arrowRounded" alt="arrowRounded" src={arrowRounded} />
        <SerieForm />
      </div>
    </header>
  );
}

export default Header;
