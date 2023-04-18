import React from "react";
import "./pok-details.scss";

function PokeDetail({ name, image, hp, defense, attack, speed }) {
  return (
    <div className="pokemon__card">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="pokemon__info">
        <h2>{name}</h2>
        <h3>- Stats -</h3>
        <ul>
          <li>
            <p className="stat__value">HP:</p>
            <p className="Stat__name">{hp}</p>
          </li>
          <li>
            <p className="stat__value">DEFENSE:</p>
            <p className="Stat__name">{defense}</p>
          </li>
          <li>
            <p className="stat__value">ATTACK:</p>
            <p className="Stat__name">{attack}</p>
          </li>
          <li>
            <p className="stat__value">SPEED:</p>
            <p className="Stat__name">{speed}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PokeDetail;
