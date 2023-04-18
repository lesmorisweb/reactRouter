import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Loader } from "../components/Loader";

import { CardList } from "../components/CardList";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(true);

  const getAllCharacters = () => {
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((request) => request.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.log("Error", error);
      });
    setLoader(false);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  return (
    <>
      <Header>Header</Header>
      {loader && <Loader />}
      <CardList list={characters} />
      <Footer>Footer</Footer>
    </>
  );
}

export default RickAndMorty;
