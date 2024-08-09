import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => {
                setPokemon(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching Pokémon details:', error);
                setLoading(false);
            });
    }, [name]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!pokemon) {
        return <div>Pokémon not found</div>;
    }

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <ul>
                {pokemon.types.map((typeInfo) => (
                    <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
                ))}
            </ul>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <button onClick={() => navigate('/pokemon')} className="back-button">
                Back to Pokemon List
            </button>
        </div>
    );
};

export default PokemonDetail;
