import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";

function Pokemon() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.sprites.front_shiny;
  };

  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();

    await data.results.reduce(async (prevPromise, item) => {
      await prevPromise;
      const image = await getOnePokemon(item.url);
      pokemons.push({ name: item.name, image });
      return Promise.resolve();
    }, Promise.resolve());

    console.log("Pokemons", pokemons);

    setLoader(false);
    setCharacters(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const renderPokemons = characters.map((character, index) => (
    <div>
      <div key={index}>{character.name}</div>
      <img src={character.image} alt={character.name} />
    </div>
  ));

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader />}
      <div>{characters.length >= 1 && renderPokemons}</div>
      <Footer>Footer</Footer>
    </>
  );
}

export default Pokemon;
