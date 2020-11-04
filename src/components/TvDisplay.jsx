import React from "react";
import "./matchmaking.css";
import tvPost from "../images/toppng-old-tv.png";
import loadingScreen from "../images/loading-screen.gif";
import offScreen from "../images/screen-tv-off.jpg";
import glitchScreen from "../images/screen-tv-glitch800.webp";
import successScreen from "../images/success.gif";
import leftCable from "../images/left-cable.png";
import rightCable from "../images/right-cable.png";

class TvDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      screen: offScreen,
      counter: 1,
      screenStep: [offScreen, glitchScreen, loadingScreen, successScreen],
    };
    this.handleScreen = this.handleScreen.bind(this);
  }

  handleScreen() {
    const { counter, screenStep } = this.state;
    if (counter < 3) {
      const newcounter = counter + 1;
      this.setState({ counter: newcounter });
    } else {
      const newcounter = 0;
      this.setState({ counter: newcounter });
    }
    this.setState({ screen: screenStep[counter] });
  }

  render() {
    const { screen } = this.state;
    return (
      <div className="tv-component">
        <div className="cable" id="left-cable">
          <img src={leftCable} alt="cable gauche" />
        </div>
        <div className="tv">
          <img src={tvPost} alt="tv-post" />
          <div className="tv-screen">
            <img src={screen} alt="tv-screen-changing" />
          </div>
          <button type="button" onClick={this.handleScreen}>
            change screen
          </button>
        </div>
        <div className="cable" id="right-cable">
          <img src={rightCable} alt="" />
        </div>
      </div>
    );
  }
}

export default TvDisplay;
