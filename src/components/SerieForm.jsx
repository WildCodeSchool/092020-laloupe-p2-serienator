import React, { Component } from "react";
import "./SerieForm.css";

const casaDelPapel = {
  genre: "action",
  id: "1",
  title: "Casa",
};

const placeHolderInit = [
  "Entre ta 1ère Série",
  "Entre ta 2ème Série",
  "cliquer sur Réinitialiser pour réessayer",
];

const buttonTextInit = ["1ère Série", "2ème Série", "Réinitialiser"];
const buttonClassInit = ["Btnserie1", "Btnserie2", "Btnserie1"];

// const serie2 = {genre: "", id: "", title: ""};

const disabledInit = [false, false, "disabled"];

class SerieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      error: "",
      inputValue: "",
      disabled: disabledInit[0],
      buttonText: buttonTextInit[0],
      buttonClass: buttonClassInit[0],
      placeHolder: placeHolderInit[0],
      serie1: { genre: "", id: "", title: "" },
      // serie2: serie2,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { counter, inputValue, serie1 } = this.state;

    if (counter < 3) {
      if (inputValue === casaDelPapel.title) {
        console.log(inputValue);
        const newCounter = counter + 1;
        this.setState({
          counter: newCounter,
          error: "",
          disabled: disabledInit[counter],
          buttonText: buttonTextInit[counter],
          buttonClass: buttonClassInit[counter],
          placeHolder: placeHolderInit[counter],
          inputValue: "",
          serie1: casaDelPapel,
        });
        console.log(serie1);
      } else {
        console.log("il y a erreur");
        this.setState({ error: "Ooooops" });
      }
    } else {
      const newCounter = 0;
      this.setState({
        counter: newCounter + 1,
        error: "",
        disabled: disabledInit[newCounter],
        buttonText: buttonTextInit[newCounter],
        buttonClass: buttonClassInit[newCounter],
        placeHolder: placeHolderInit[newCounter],
        inputValue: "",
        serie1,
      });
    }
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value, error: "" });
  }

  render() {
    const {
      placeHolder,
      error,
      inputValue,
      disabled,
      buttonClass,
      buttonText,
    } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <form className="SerieForm2">
        <div className="Error">
          <p>{error}</p>
        </div>
        <div className="SerieForm">
          <input
            placeholder={placeHolder}
            id="name"
            name="serie1"
            type="text"
            value={inputValue}
            onChange={handleChange}
            disabled={disabled}
          />
          <button type="button" className={buttonClass} onClick={handleSubmit}>
            {buttonText}
          </button>
        </div>
      </form>
    );
  }
}

// SerieForm.propTypes = {
//   this.state.error: PropTypes.string.isRequired,
//   this.state.disabled: PropTypes.bool.isRequired,
//   this.state.buttonText: PropTypes.string.isRequired,
//   this.state.buttonClass: PropTypes.string.isRequired,
//   this.state.placeHolder: PropTypes.string.isRequired,
//   this.state.inputValue: PropTypes.string.isRequired,
//   this.state.handleClick: PropTypes.func.isRequired,
//   this.state.handleChange: PropTypes.func.isRequired,
// };

export default SerieForm;
