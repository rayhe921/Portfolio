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
    sidebarButton: false
  };

  componentDidMount() {
  }
   activeSidebar = (event) => {
      event.preventDefault();
      console.log("click is working");
      this.state.sidebarButton == true ? this.setState({sidebarButton: false})
       :
      this.setState({sidebarButton: true})
      console.log("If false " + this.state.sidebarButton) 
    }; 
  

  render() {
    return (
      <Router>
        <Navbar
         onClick={this.activeSidebar}
         data-toggle=""
         data-target=""
         title="Toggle Menu"
        ></Navbar>
        <div>
        <Sidebar
          title="Raymond He"
          linkOne="Home"
          linkTwo="Contact"
          linkThree="Portfolio"
          closeSide={this.state.sidebarButton}
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
