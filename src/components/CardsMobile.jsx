import React from "react";
import "./CardsMobile.css";
import questionMark from "../images/question-mark.png";

class CardsMobile extends React.Component {
  constructor() {
    super();
    this.displayPrompt = this.displayPrompt.bind(this);
  }
  //     displayPrompt () {
  //         let serie = prompt("Entrez le nom d'une série");
  //         console.log(serie);
  // }

  render() {
    return (
      <div className="cards-mobile">
        <button className="qmark" type="button" onClick={this.displayPrompt}>
          <img
            className="qmark"
            src={questionMark}
            alt="Sélectionner un série"
          />
        </button>
      </div>
    );
  }
}

export default CardsMobile;
