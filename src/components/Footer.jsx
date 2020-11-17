import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date().getFullYear() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date().getFullYear(),
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="footerStyle">
        <p className="signature">
          {" "}
          &copy; Los Seniores<span className="yearStyle"> {date}.</span>
        </p>
      </div>
    );
  }
}

export default Footer;
