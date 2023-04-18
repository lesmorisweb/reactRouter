import React, { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardList } from "../components/CardList";
import { Context } from "../context";

function Pokemon() {
  const [characters, setCharacters] = useState([]);
  const context = useContext(Context);

  const getOnePokemon = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return {
      image: data.sprites.front_shiny,
      [data.stats[0].stat.name]: data.stats[0].base_stat,
      [data.stats[1].stat.name]: data.stats[1].base_stat,
      [data.stats[2].stat.name]: data.stats[2].base_stat,
      [data.stats[5].stat.name]: data.stats[5].base_stat,
    };
  };

  const getAllPokemons = async () => {
    const pokemons = [];
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    console.log(("data", data));

    for (let i = 0; i < data.results.length; i++) {
      const item = data.results[i];
      const { image, hp, attack, defense, speed } = await getOnePokemon(
        item.url
      );
      pokemons.push({
        name: item.name,
        image: image,
        id: item.name,
        hp,
        attack,
        speed,
        defense,
      });
    }

    console.log("Pokemons", pokemons);
    context.pokemon.characters = pokemons;
    context.redirectDetailsRoute = "/pokemon";

    setCharacters(pokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const renderPokemons = () => <CardList list={characters} />;

  return (
    <>
      <Header>Header</Header>
      {characters.length >= 1 && renderPokemons()}

      <Footer>Footer</Footer>
    </>
  );
}

export default Pokemon;
