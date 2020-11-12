import React from "react";
import PropTypes from "prop-types";
import Autosuggest from "./Autosuggest";
import CardsMobile from "./CardsMobile";
import "./MatchmakingMobile.css";

class MatchmakingMobile extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { serieSearch } = this.props;
    const { isOpen } = this.state;
    const { handleClick } = this;
    return (
      <section className="matchmaking-mobile">
        <h2 className="matchmaking-mobile">
          Ajouter une série en cliquant sur une carte
        </h2>
        <div className="mobile-position">
          <CardsMobile handleClick={handleClick} />
          <CardsMobile handleClick={handleClick} />
          {isOpen && <Autosuggest serieSearch={serieSearch} />}
        </div>
      </section>
    );
  }
}
MatchmakingMobile.propTypes = {
  serieSearch: PropTypes.shape({
    idS1: PropTypes.number,
    idS2: PropTypes.number,
  }).isRequired,
};
export default MatchmakingMobile;
