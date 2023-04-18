import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";
import "./pok-details.scss";

function PokeDetails() {
  const { id: idName } = useParams();
  const [character, setCharacter] = useState({});

  const context = useContext(Context);
  const { pokemon } = context || {};
  const { characters } = pokemon || [];

  useEffect(() => {
    const item = characters.find((item) => item.id === idName);
    console.log("tarjeta para el pokemon", item);
    setCharacter(item);
  }, []);

  return (
    <div className="pokemon__card">
      <div className="image-container">
        <img src={character.image} alt="character.name" />
      </div>
      <div className="pokemon__info">
        <h2>{idName}</h2>
        <h3>- Stats -</h3>
        <ul>
          <li>
            <p className="stat__value">HP:</p>
            <p className="Stat__name">{character.hp}</p>
          </li>
          <li>
            <p className="stat__value">DEFENSE:</p>
            <p className="Stat__name">{character.defense}</p>
          </li>
          <li>
            <p className="stat__value">ATTACK:</p>
            <p className="Stat__name">{character.attack}</p>
          </li>
          <li>
            <p className="stat__value">SPEED:</p>
            <p className="Stat__name">{character.speed}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PokeDetails;
