import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <div className="pokemon-list">
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`} className="pokemon-name">
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
