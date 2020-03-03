import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav>
    <div className="nav-wrapper grey darken-2 z-depth-3">
      <a href="/" className="brand-logo">{props.title}</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/">{props.linkOne}</a></li>
        <li><a href="/contact">{props.linkTwo}</a></li>
        <li><a href="/portfolio">{props.linkThree}</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
