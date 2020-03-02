import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col s12 m7">
      <h2 className="header">{props.title}</h2>
      <div className="card horizontal">
        <div className="card-image img-size">
          <img src={props.img} />
          </div>  
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.summary}</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    
      );
    }
    
    export default Card;
