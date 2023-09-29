import React from "react";
import './style.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-titulo">
        <h4>{props.titulo}</h4>
      </div>
      <div className="card-content">
          {props.children}
      </div>
    </div>
  );
}

export default Card;
