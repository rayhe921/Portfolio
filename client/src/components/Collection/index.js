import React from "react";
import "./style.css";

function Collection(props) {
  return (
    <div class="collection with-header">
    <li class="collection-header"><h4>{props.header}</h4></li>
    <a href={props.linkOne} class="collection-item">{props.email}</a>
    <a href={props.linkTwo} class="collection-item">{props.github}</a>
    <a href={props.linkThree} class="collection-item">{props.linkedIn}</a>
    <a href={props.linkFour} class="collection-item">{props.resume}</a>
  </div>
  );
}

export default Collection;
