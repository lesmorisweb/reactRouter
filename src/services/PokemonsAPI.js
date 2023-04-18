export const getAllPokemons = async () => {
  const pokemons = [];
  const url = "https://pokeapi.co/api/v2/pokemon";
  try {
    const response = await fetch(url);
    const data = await response.json();

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
    return pokemons;
  } catch (error) {
    return error;
  }
};

const getOnePokemon = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      image: data.sprites.front_shiny,
      [data.stats[0].stat.name]: data.stats[0].base_stat,
      [data.stats[1].stat.name]: data.stats[1].base_stat,
      [data.stats[2].stat.name]: data.stats[2].base_stat,
      [data.stats[5].stat.name]: data.stats[5].base_stat,
    };
  } catch (error) {
    return error;
  }
};
