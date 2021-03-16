import React, { Component } from "react";
import { TimelineLite, CSSPlugin, AttrPlugin } from "gsap/all";
import { Timeline } from "gsap/gsap-core";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    var tl = new Timeline();
    tl.to(
      ".intro__overlay",
      1.5,
      {
        top: "100%",
      },
      0
    );
  }
  render() {
    return (
      <section className="about">
        <div className="intro__overlay"></div>
        <div className="about__left"></div>
        <div className="about__right">
          <h1 className="about__title">Le saxophone</h1>
          <p className="about__story">
            Le saxophone est un instrument de musique à vent appartenant à la
            famille des bois. Il a été inventé par le Belge Adolphe Sax et
            breveté à Paris le 21 mars, Il ne doit pas être confondu avec le
            saxhorn, de la famille des cuivres, mis au point, lui aussi, par
            Adolphe Sax. Le saxophone est généralement en laiton, bien qu'il en
            existe certains en cuivre, en argent, en plastique ou plaqués en or.
          </p>
          <button className="about__cta">View more</button>
        </div>
      </section>
    );
  }
}

export default About;
