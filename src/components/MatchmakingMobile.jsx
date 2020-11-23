import React from "react";
import PropTypes from "prop-types";
import Autosuggest from "./Autosuggest";
import CardsMobile from "./CardsMobile";
import "./MatchmakingMobile.css";

class MatchmakingMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleTap = this.handleTap.bind(this);
  }

  handleTap() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const {
      serieSearch,
      placeHolder,
      inputValue,
      disabled,
      error,
      resultSearch,
      handleChange,
      handleSubmit,
      handleClick,
    } = this.props;
    const { isOpen } = this.state;
    const { handleTap } = this;
    return (
      <section className="matchmaking-mobile">
        <h2>Ajouter une série en cliquant sur une carte</h2>
        <div className="mobile-position">
          <CardsMobile card={serieSearch[0]} handleClick={handleTap} />
          <CardsMobile card={serieSearch[1]} handleClick={handleTap} />
          {isOpen && (
            <Autosuggest
              placeHolder={placeHolder}
              inputValue={inputValue}
              disabled={disabled}
              error={error}
              resultSearch={resultSearch}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              handleClick={handleClick}
            />
          )}
        </div>
      </section>
    );
  }
}
MatchmakingMobile.propTypes = {
  resultSearch: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  placeHolder: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  disabled: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  serieSearch: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.object])
  ).isRequired,
};
export default MatchmakingMobile;
