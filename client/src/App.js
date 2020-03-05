import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import logo from "./logo.svg";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar
          title="Raymond He"
          linkOne="About"
          linkTwo="Contact"
          linkThree="Portfolio"
        ></Navbar>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}

export default App;
