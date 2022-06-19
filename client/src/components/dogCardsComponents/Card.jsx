import React from "react";
import { NavLink } from "react-router-dom";
import '../dogCardsComponents/card.css'

function Card(props) {
  return (
    <div className="card">
      <NavLink  className = 'breed-info' to={`/racedetails/${props.name}`}>
      <p className = 'breed-info'>{props.name}</p>
      </NavLink>
      <img className="dogImage" src={props.image} alt="" />
      <div className="texts-container">
        <div className="texts-temp">
          <span className="span-temp">Temperamentos: </span>
          <span className = 'breed-temp'>{props.temperament}</span>  
        </div>
      <div className="texts-info">
        <span className="span-weight">Peso: </span>
        <span className = 'breed-weigth'>{props.weight} Kg</span>
      </div>
      </div>
    </div>
  );
}

export default Card;
