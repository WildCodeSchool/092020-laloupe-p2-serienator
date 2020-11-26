import React, { Component } from "react";
import Top3Philippe from "./Top3Philippe";
import Top3Damien from "./Top3Damien";
import Top3Ingrid from "./Top3Ingrid";
import Top3Thibaut from "./Top3Thibaut";
import "./Top3.css";

class Top3 extends Component {
  constructor() {
    super();
    this.state = {
      isShowedPhilippe: false,
      isShowedIngrid: false,
      isShowedDamien: false,
      isShowedThibaut: false,
    };
  }

  handleClickP = () => {
    const { isShowedPhilippe } = this.state;
    this.setState({
      isShowedPhilippe: !isShowedPhilippe,
      isShowedIngrid: false,
      isShowedDamien: false,
      isShowedThibaut: false,
    });
  };

  handleClickI = () => {
    const { isShowedIngrid } = this.state;
    this.setState({
      isShowedIngrid: !isShowedIngrid,
      isShowedPhilippe: false,
      isShowedDamien: false,
      isShowedThibaut: false,
    });
  };

  handleClickT = () => {
    const { isShowedThibaut } = this.state;
    this.setState({
      isShowedThibaut: !isShowedThibaut,
      isShowedPhilippe: false,
      isShowedIngrid: false,
      isShowedDamien: false,
    });
  };

  handleClickD = () => {
    const { isShowedDamien } = this.state;
    this.setState({
      isShowedDamien: !isShowedDamien,
      isShowedPhilippe: false,
      isShowedIngrid: false,
      isShowedThibaut: false,
    });
  };

  render() {
    const {
      isShowedPhilippe,
      isShowedDamien,
      isShowedIngrid,
      isShowedThibaut,
    } = this.state;

    return (
      <div className="top3Section">
        <div className="titreTop3">
          <button
            type="button"
            className="buttonTop3"
            onClick={this.handleClickP}
          >
            <p className="Top3Filipe">Top 3 Séries selon Philippe</p>
            <p className="fleche">{isShowedPhilippe ? "˄" : "˅"}</p>
          </button>
        </div>

        <div className="flexTrait">
          <hr className="traitDessus" />
        </div>

        {isShowedPhilippe ? <Top3Philippe /> : ""}

        <div className="titreTop3">
          <button
            type="button"
            className="buttonTop3"
            onClick={this.handleClickI}
          >
            <p className="Top3Filipe">Top 3 Séries Animées selon Ingrid</p>
            <p className="fleche">{isShowedIngrid ? "˄" : "˅"}</p>
          </button>
        </div>
        <div className="flexTrait">
          <hr className="traitDessus" />
        </div>
        {isShowedIngrid ? <Top3Ingrid /> : ""}

        <div className="titreTop3">
          <button
            type="button"
            className="buttonTop3"
            onClick={this.handleClickT}
          >
            <p className="Top3Filipe">Top 3 Séries Sci-Fi selon Thibaut</p>
            <p className="fleche">{isShowedThibaut ? "˄" : "˅"}</p>
          </button>
        </div>

        <div className="flexTrait">
          <hr className="traitDessus" />
        </div>

        {isShowedThibaut ? <Top3Thibaut /> : ""}

        <div className="titreTop3">
          <button
            type="button"
            className="buttonTop3"
            onClick={this.handleClickD}
          >
            <p className="Top3Filipe">Top 3 Séries selon Damien</p>
            <p className="fleche">{isShowedDamien ? "˄" : "˅"}</p>
          </button>
        </div>

        <div className="flexTrait">
          <hr className="traitDessus" />
        </div>
        {isShowedDamien ? <Top3Damien /> : ""}
      </div>
    );
  }
}

export default Top3;
