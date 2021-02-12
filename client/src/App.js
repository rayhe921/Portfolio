import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"
import { Container, Row, Col } from "./components/Grid";

class App extends Component {

  state = {
    collapseSidebar: "active"
  };

  componentDidMount() {

    let sidebarCollapse = (id) => {
      (id).toggleClass("active");
    } 
  //   $('#sidebarCollapse').on('click', function () {
  //     $('#sidebar').toggleClass('active');
  // });

  }

  render() {
    return (
      <Router>
        <Navbar
        ></Navbar>
        <div>
        <Sidebar
          title="Raymond He"
          linkOne="Home"
          linkTwo="Contact"
          linkThree="Portfolio"
        ></Sidebar>
        </div>
        <div className="content">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
