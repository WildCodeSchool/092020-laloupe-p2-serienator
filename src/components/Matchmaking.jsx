import React from "react";
import "./matchmaking.css";
import imgDefault from "../images/questioncard3.jpeg";
import MatchmakingCard from "./MatchmakingCard";
import TvDisplay from "./TvDisplay";
import loadingScreen from "../images/loading-screen.gif";
import offScreen from "../images/screen-tv-off.jpg";
import glitchScreen from "../images/screen-tv-glitch800.webp";
import successScreen from "../images/success.gif";

const screenStep = [offScreen, glitchScreen, loadingScreen, successScreen];

class Matchmaking extends React.Component {
  constructor() {
    super();
    this.state = {
      firstSeries: {
        name: "question mark card",
        poster_path: imgDefault,
      },
      secondSeries: {
        name: "question mark card",
        poster_path: imgDefault,
      },
      screen: offScreen,
      counter: 1,
    };
    this.handleScreen = this.handleScreen.bind(this);
  }

  handleScreen() {
    const { counter } = this.state;
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
    const { firstSeries, secondSeries, screen } = this.state;
    return (
      <section className="matchmaking">
        <h2>Quelles sont les 2 dernières séries que tu as regardées ?</h2>
        <div className="matchmaking-container">
          <MatchmakingCard card={firstSeries} />
          <TvDisplay screen={screen} handleScreen={this.handleScreen} />
          <MatchmakingCard card={secondSeries} />
        </div>
      </section>
    );
  }
}

export default Matchmaking;
