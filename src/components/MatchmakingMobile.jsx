import React from "react";
import CardsMobile from "./CardsMobile";
import "./MatchmakingMobile.css";
import Search from "./Search";

class MatchmakingMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      // cardOne:{src:"", alt:""},
      // cardTwo:{src:"",alt:""}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { handleClick } = this;
    return (
      <section className="matchmaking-mobile">
        <h2>Ajouter une série en cliquant sur une carte</h2>
        <div className="mobile-position">
          <CardsMobile handleClick={handleClick} />
          <CardsMobile handleClick={handleClick} />
          {isOpen && <Search />}
        </div>
      </section>
    );
  }
}

export default MatchmakingMobile;
