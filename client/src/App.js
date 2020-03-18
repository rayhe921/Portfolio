import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Sidebar from "./components/Sidebar";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Navbar
          title="Raymond He"
          linkOne="About"
          linkTwo="Contact"
          linkThree="Portfolio"
        ></Navbar> */}
        <Sidebar></Sidebar>
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
