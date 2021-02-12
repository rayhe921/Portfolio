import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col s12 m6">
      <h2 className="header white-text">{props.title}</h2>
      <div className="card horizontal z-depth-2 border">
        <div className="card-image">
          <img className="card-image" src={props.img} alt={props.title} />
          </div>  
          <div className="card-stacked">
            <div className="card-content">
              <p>{props.children}</p>
            </div>
          </div>
        </div>
      </div>
      );
    }
    
    export default Card;