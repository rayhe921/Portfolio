import React from "react";
import "./style.css";

function Navbar(props) {

  return (
    <div id="content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fas fa-align-right"></i>
            <span>Toggle Sidebar</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
