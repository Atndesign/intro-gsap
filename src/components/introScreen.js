import React from "react";
import { TimelineLite, CSSPlugin, AttrPlugin } from "gsap/all";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var tl = new TimelineLite();
    tl.to("h1", 0.5, { color: "white" }, 2);
    tl.to(
      ".intro__overlay",
      1.5,
      {
        top: "0%",
      },
      4
    ).then(() => {
      window.location = "/about";
    });
  }
  render() {
    return (
      <main className="intro">
        <div className="intro__overlay"></div>
        <h1>Saxophone</h1>
      </main>
    );
  }
}

export default Intro;
