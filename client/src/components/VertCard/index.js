import React from "react";
import "./style.css";

function VertCard(props) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={props.image} />
            <span className="card-title">{props.title}</span>
          </div>
          <div className="card-content">
            <p>{props.summary}</p>
          </div>
          <div className="card-action">
            <a href={props.githubLink}>Github Link</a>
          </div>
          <div className="card-action">
            <a href={props.projectLink} className="waves-effect waves-light btn">View Project</a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default VertCard;
