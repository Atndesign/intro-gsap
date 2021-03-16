import React from "react";
import Intro from "./introScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./about";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact>
            <Intro />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/types" exact>
            <p>types</p>
          </Route>
        </Router>
      </>
    );
  }
}

export default Main;
