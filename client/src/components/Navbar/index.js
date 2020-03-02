import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">{props.title}</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">{props.linkOne}</a></li>
        <li><a href="/contact">{props.linkTwo}</a></li>
        <li><a href="/portfolio">{props.linkThree}</a></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
