import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../context";

function RAMDetails() {
  const [character, setCharacter] = useState({});
  const { id: idParam } = useParams();

  const context = useContext(Context);
  const { rickAndMorty } = context || {};
  const { characters } = rickAndMorty || [];

  useEffect(() => {
    const item = characters.find((item) => item.id === parseInt(idParam));
    setCharacter(item);
  }, []);

  return (
    <div>
      RAMDeatails: {idParam}
      <strong>ID:</strong> {character.id}
      <strong>Species:</strong> {character.species}
      <strong>Gender:</strong> {character.gender}
      <strong>Name:</strong> {character.name}
      <strong>Status:</strong> {character.status}
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default RAMDetails;
