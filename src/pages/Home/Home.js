import React, { useState, useEffect } from "react";
import axios from "axios";

export function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemon(response.data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []);
  return (
    <>
      {
        <div>
          <h1>Pokémon</h1>
          <ul>
            {pokemon.map((poke) => (
              <li key={poke.name}>{poke.name}</li>
            ))}
          </ul>
        </div>
      }
    </>
  );
}













































